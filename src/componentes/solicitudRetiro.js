import { useCallback, useContext, useEffect, useState } from "react"
import { Formik } from 'formik';
import $, { data } from "jquery"
import Solicitud_retiro_exitoso from "./solicitud_retiro_exitosa"
import useSaves from '/src/hooks/useSaves'
import Header_asociado from "./header_asociado"

export default function Solicitud_retiro() {
    const [showModal, setShowModal] = useState(false)
    const [estado, setEstado] = useState()
    const [datos, setDatos] = useState()
    const { solicitarRetiro, cargarDatosSolicitud } = useSaves()

    const handleClose = useCallback(() => { setShowModal(false) }, [])

    useEffect(() => {
        cargarDatosSolicitud(setDatos)
    }, [cargarDatosSolicitud, setDatos])

    useEffect(() => {
        if (!datos)
            return

        $("#documento").val(datos.documento)
        $("#correo").val(datos.correo)
        $("#saldo").val(datos.saldo)
    }, [datos])

    useEffect(() => {
        if (estado == 1) {
            setShowModal(true)
        }
    }, [estado])

    const handleSubmit = useCallback(data => {
        data.documento = datos.documento
        data.correo = datos.correo
        data.saldo = datos.saldo

        solicitarRetiro(data, setEstado)
    }, [datos, solicitarRetiro])

    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header_asociado nombre_seccion="Retiros" />
            <div className="px-6 pt-6 2xl:container">
                <div>
                    <div className="grid sm:px-10 lg:grid-cols-1 ">
                        <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
                            <p className="text-xl font-medium">Solicitud de retiro</p>
                            <p className="text-gray-400">Notifique al fondo sobre su deseo de retirar sus ahorros</p>
                            <div className>
                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Documento de identificación</label>
                                <div className="relative">
                                    <input type="text" id="documento" name="documento" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Solicitud de retiro" disabled />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                                <div className="relative">
                                    <input type="email" id="correo" name="correo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" disabled />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                </div>
                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Cantidad a retirar</label>
                                <div className="relative">
                                    <input type="text" id="saldo" name="saldo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Saldo" disabled />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-5 relative z-0">
                                    <label className=" top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-medium duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">¿Cuando desea retirar sus ahorros?</label>
                                    <input

                                        id="fecha de expiración"
                                        name="fecha"
                                        type="date"
                                        placeholder=""
                                        className="mt-4 h-10 w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                                </div>
                                <div className="mt-5 relative z-0 col-span-2">
                                    <textarea

                                        name="motivo"
                                        rows={5}
                                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0"
                                        placeholder=" "
                                        defaultValue={""}
                                        required
                                    />
                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm font-medium duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6  peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">¿Por qué desea retirar sus ahorros?</label>
                                </div>
                            </div>
                            <button
                                onClick={() =>
                                    setShowModal(true)
                                }
                                className="mt-4 mb-8 w-full rounded-md bg-indigo-700 px-6 py-3 font-medium text-white">Realizar retiro</button>
                        </div>
                        {showModal && <Solicitud_retiro_exitoso onClose={() => handleClose()}></Solicitud_retiro_exitoso>}
                    </div>
                </div>
            </div>
        </div>
    )
}