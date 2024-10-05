import { useState, useEffect } from "react"
import Header from "./components/Header.jsx"
import Button from "./components/Button.jsx";
import { formatMoney, calculatePayment } from "./helpers";

function App() {
  //Aca se crean las variables, antes del return

  //useState. No debe modificarse directamente

  /*-------HOOKS---------- */
  const [amount, setAmount] = useState(10000); //Entre parentesis lleva el valor inicial
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    setTotal(calculatePayment(amount, months));
  }, [amount, months, total])

  // Calcular pago mensual
  useEffect(() => {
    setMonthlyPayment(total / months);
  }, [total, months])

  /* -----CONST------*/

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  /*--------HANDLES--------- */
  const handleChange = e => {
    setAmount(+e.target.value); // El + lo convierte a number
  }
  const handleClickDecrement = () => {
    const value = amount - STEP

    if (value < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setAmount(value)
  }
  const handleClickIncrement = () => {
    const value = amount + STEP

    if (value > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setAmount(value)
  }


  // El return se reserva para lo que se va a mostrar en la interfaz de usuario
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operator="-"
          fnc={handleClickDecrement}
        />
        <Button
          operator="+"
          fnc={handleClickIncrement}
        />

      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatMoney(amount)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-500">Plazo </span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center font-bold text-xl text-gray-500"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-500">de Pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">Plazo a Pagar | {months} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">Total a Pagar | {formatMoney(total)}</p>
        <p className="text-xl text-gray-500 text-center font-bold">Cuota Mensual | {formatMoney(monthlyPayment)}</p>
      </div>
    </div>

  )
}

export default App
