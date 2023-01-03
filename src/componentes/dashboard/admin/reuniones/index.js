import React, { Fragment, useCallback, useEffect, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Transition, Menu } from "@headlessui/react"
import { Formik } from "formik";

import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Panel_reuniones_admin() {
    const [tipo_reunion, setEstadoReunion] = useState(0)
    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header_asociado nombre_seccion="Reuniones" />
            <div >
                <Formik
                    initialValues=
                    {{
                        multa: "",
                        cuotaManejo: ""
                    }}

                    onSubmit={fields => {
                        handleSubmit(fields)
                    }}

                >
                    {
                        ({ handleChange, handleSubmit, errors, touched }) => (
                            <div>
                                <div className="grid sm:px-10 lg:grid-cols-1 ">
                                    <form className="mt-10 bg-white px-4 pt-8 lg:mt-0">
                                        <p className="text-xl font-medium">Detalles de la reunión</p>
                                        <p className="text-gray-400">Configure una reunión rellenando la siguiente información.</p>
                                        <div className>
                                            <div className="mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                                                <br></br>
                                                <label className="block mb-2 font-size:16 text-gray-600 dark:text-gray-700">Fije una multa por la inasistencia a esta reunión.</label>
                                                <input
                                                    onChange={handleChange}
                                                    id="multa"
                                                    name="multa"
                                                    type="number"
                                                    placeholder="Ingrese el valor de la multa"
                                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400 dark:bg-white dark:text-gray-600 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                            <div className="mt-5 relative z-0 col-span-2">
                                                <textarea
                                                    name="motivo"
                                                    rows={5}
                                                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-0"
                                                    placeholder=" "
                                                    defaultValue={""}
                                                    required
                                                />
                                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6  peer-focus:text-sky-600 peer-focus:dark:text-sky-500">Motivo de la reunión</label>
                                            </div>
                                            <label className="mt-4 block mb-2 font-size:16 text-gray-600 dark:text-gray-700">Tipo de reunión</label>
                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                        {(tipo_reunion === 1) ? "Presencial" : (tipo_reunion === 2) ? "Virtual" : "Tipo de reunión"}
                                                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                        onClick={() => {
                                                                            setEstadoReunion(1)
                                                                        }}
                                                                    >
                                                                        Presencial
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                        onClick={() => {
                                                                            setEstadoReunion(2)
                                                                        }}
                                                                    >
                                                                        Virtual
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                            {(tipo_reunion === 1) ?
                                                <div>
                                                    <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Dirección del sitio</label>
                                                    <div className="relative">
                                                        <input type="text" id="direccion" name="direccion" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Dirección" />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-gray-400">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Fecha</label>
                                                        <input
                                                            id="fecha"
                                                            name="fecha"
                                                            type="date"
                                                            placeholder=""
                                                            className="w-full pl-11 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-7 h-5 w-5 text-gray-400">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="relative">
                                                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Hora</label>
                                                        <input type="time" id="hora" name="hora" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Hora" />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-7 h-5 w-5 text-gray-400">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 font-medium text-white">Crear reunión</button>
                                                </div>
                                                :
                                                (tipo_reunion === 2) ?
                                                    <div>
                                                        <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Enlace de la reunión</label>
                                                        <div className="relative">
                                                            <input type="text" id="enlace" name="enlace" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enlace a la reunión" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="relative">
                                                            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Fecha</label>
                                                            <input
                                                                id="fecha"
                                                                name="fecha"
                                                                type="date"
                                                                placeholder=""
                                                                className="w-full pl-11 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-7 h-5 w-5 text-gray-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="relative">
                                                            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Hora</label>
                                                            <input type="time" id="hora" name="hora" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Hora" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-7 h-5 w-5 text-gray-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <button
                                                            className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 font-medium text-white">Crear reunión</button>
                                                    </div> : <></>}
                                        </div>
                                    </form>
                                </div>
                            </div>

                        )

                    }
                </Formik>
            </div >
        </div>
    )
}

