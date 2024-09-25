import { useState } from "react"
import Header from "./components/Header.jsx"

function App() {
  //Aca se crean las variables, antes del return
  const [count, setCount] = useState(10000);

  // El return se reserva para lo que se va a mostrar en la interfaz de usuario
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
      />

    </div>
  )

}

export default App
