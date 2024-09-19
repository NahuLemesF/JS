import { generarId } from "./funciones.js"

export let editando = false

// Objeto de Cita
export const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}