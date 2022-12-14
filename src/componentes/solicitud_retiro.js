import { useCallback, useContext, useEffect, useState } from "react"
import Solicitud_retiro_exitoso from "./solicitud_retiro_exitosa"
import { Formik } from 'formik';

export default function Solicitud_retiro() {
    const [showModal, setShowModal] = useState(false)
    const handleClose = () => { setShowModal(false) }

    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <h5 className="text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl md:text-4xl">Retiros</h5>
                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                            <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z" />
                            </svg>
                        </button>
                        <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                        <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-6 2xl:container">
                <div className="flex min-h-screen items-center justify-start bg-white">
                    <div className="mx-auto w-full max-w-lg">
                        <h1 className="text-4xl font-medium">Solicitud de retiro</h1>
                        <p className="mt-3">Notifique al fondo sobre su deseo de retirar sus ahorros</p>
                        <Formik
                            initialValues=
                            {{
                                documento: "",
                                correo: "",
                                fecha: "",
                                motivo: "",
                            }}
                        >
                            {
                                ({ handleChange, handleSubmit, errors, touched }) => (
                                    <div>
                                        <form className="mt-10">
                                            <input type="hidden" name="access_key" defaultValue="YOUR_ACCESS_KEY_HERE" />
                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <div className="relative z-0">
                                                    <input onChange={handleChange} type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=" " required defaultValue={""} />
                                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">Documento de identificación</label>
                                                </div>
                                                <div className="relative z-0">
                                                    <input onChange={handleChange} type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=" " required defaultValue={""} />
                                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">Correo electrónico</label>
                                                </div>
                                                <div className="relative z-0">
                                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">Saldo disponible</label>
                                                    <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=" " disabled />
                                                </div>
                                                <div className="relative z-0">
                                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">¿Cuando desea retirar sus ahorros?</label>
                                                    <input
                                                        onChange={handleChange}
                                                        id="fecha de expiración"
                                                        name="fecha de expiración"
                                                        type="date"
                                                        placeholder=""
                                                        className="mt-4 h-5 w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                                                </div>
                                                <div className="relative z-0 col-span-2">
                                                    <textarea onChange={handleChange} name="message" rows={5} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0" placeholder=" " required defaultValue={""} />
                                                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500">¿Por qué desea retirar sus ahorros?</label>
                                                </div>
                                            </div>
                                            <button type="submit"
                                                onClick={() =>
                                                    setShowModal(true)
                                                }
                                                className="mt-5 rounded-md bg-indigo-700 px-10 py-2 text-white">Realizar solicitud de retiro
                                            </button>
                                        </form>
                                        {showModal && <Solicitud_retiro_exitoso onClose={() => handleClose()}></Solicitud_retiro_exitoso>}
                                    </div>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div >
        </div>
    )
}