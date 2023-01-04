import { Fragment, useCallback, useEffect, useState } from "react"
import Solicitud_retiro_exitoso from "/src/componentes/dashboard/asociado/retiro/modales/solicitud_retiro_exitosa"
import Header_asociado from "/src/componentes/dashboard/compartido/header_asociado"
import { withRouter } from "next/router"
import { Formik } from 'formik'
import Link from "next/link"
import React from "react"
import { TabHead, TabContainer, TabBody, Tab } from "/src/componentes/dashboard/menuTabs"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Transition, Menu } from "@headlessui/react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Formulario_prestamo = ({ router }) => {

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => { setShowModal(false) }

    const {
        query: { tab }
    } = router

    const isTabOne = tab === "1" || tab == null
    const isTabTwo = tab === "2"

    return (
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
            <Header_asociado nombre_seccion="Préstamos" />
            <TabContainer>
                <TabHead>
                    <Tab selected={isTabOne}>
                        <Link href={{ query: { tab: "1" } }}>
                            <a>Solicitar un préstamo</a>
                        </Link>
                    </Tab>
                    <Tab selected={isTabTwo}>
                        <Link href={{ query: { tab: "2" } }}>
                            <a>Mis préstamos</a>
                        </Link>
                    </Tab>
                </TabHead>
                <TabBody>
                    {isTabOne &&
                        <React.Fragment>

                            <div className="px-6 pt-6 2xl:container">
                                <div>
                                    <div className="grid sm:px-10 lg:grid-cols-1 ">
                                        <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
                                            <p className="text-xl font-medium">Detalles del préstamo</p>
                                            <p className="text-gray-400">Complete su solicitud rellenando la siguiente información.</p>
                                            <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Información personal</label>
                                            <div className>
                                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Documento de identificación</label>
                                                <div className="relative">
                                                    <input type="text" id="documento" name="documento" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Número de documento" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                                                <div className="relative">
                                                    <input type="email" id="correo" name="correo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Dirección</label>
                                                <div className="flex flex-col sm:flex-row">
                                                    <div className="relative flex-shrink-0 sm:w-7/12">
                                                        <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Dirección de residencia" />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                            <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                                                        </div>
                                                    </div>
                                                    <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                                        <option value="State">Ciudad</option>
                                                        <option value="State">cali</option>
                                                        <option value="State">Palmira</option>
                                                    </select>
                                                </div>
                                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Referencias personales</label>
                                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Nombre completo</label>
                                                <div className="relative">
                                                    <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                                                <div className="relative">
                                                    <input type="email" id="correo_referencia_personal" name="correo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium">Dirección</label>
                                                        <div className="relative flex-shrink-0 sm:w-7/12">
                                                            <input type="text" id="billing-address" name="billing-address" className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium">Teléfono</label>
                                                        <div className="relative flex-shrink-0 sm:w-7/12">
                                                            <input type="number" id="billing-address" name="billing-address" className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-md text-sky-600 font-medium">Referencias laborales</label>
                                                <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Nombre completo</label>
                                                <div className="relative">
                                                    <input type="text" id="nombre_referencia_personal" name="nombre" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Nombre completo" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo electrónico</label>
                                                <div className="relative">
                                                    <input type="email" id="correo_referencia_laboral" name="correo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2">
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium">Dirección</label>
                                                        <div className="relative flex-shrink-0 sm:w-7/12">
                                                            <input type="text" id="billing-address" name="billing-address" className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <img className="h-4 w-4 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label className="block mb-2 text-sm font-medium">Teléfono</label>
                                                        <div className="relative flex-shrink-0 sm:w-7/12">
                                                            <input type="number" id="billing-address" name="billing-address" className="w-full px-4 py-3 pl-11 mt-2 text-gray-700 placeholder-gray-400 outline-none shadow-sm border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 focus:ring-opacity-40" />
                                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 text-gray-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <label htmlFor="cantidad_retirar" className="mt-4 mb-2 block text-sm font-medium">Cantidad a pedir prestada</label>
                                                <div className="flex flex-col sm:flex-row">
                                                    <div className="relative flex-shrink-0 sm:w-7/12">
                                                        <input type="number" id="cantidad_prestamo" name="cantidad_prestamo" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder=" " />
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                            <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    setShowModal(true)
                                                }
                                                className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-sky-600 to-cyan-400 px-6 py-3 font-medium text-white">Solicitar préstamo</button>
                                        </div>
                                        {showModal && <Solicitud_retiro_exitoso onClose={() => handleClose()}></Solicitud_retiro_exitoso>}
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>}

                    {isTabTwo && <React.Fragment>
                        <div className="px-6 pt-6 2xl:container">
                            <div className="grid sm:px-10 lg:grid-cols-1 ">
                                <div className="mt-10 bg-white px-4 pt-8 lg:mt-0">
                                    <p className="text-3xl text-center font-medium">Historial de préstamos</p>
                                    <p className="text-center text-gray-500">Aquí encontrará la información correspondiente a sus créditos.</p>
                                    <p className="mt-10 text-md font-medium">Generar extracto</p>
                                    <p className="text-gray-500">Para generar un estado de cuenta debe seleccionar el número de obligación.</p>
                                    <Menu as="div" className="mt-5 relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                Número de obligación
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

                                                                }}
                                                            >
                                                                1707476
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <div>
                                        <div className="mt-10 w-full h-14 pt-2 text-center bg-gray-700  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white ">
                                            Estado de cuenta
                                        </div>
                                        <section className="text-gray-600 body-font  m-0 p-0 relative" />
                                        <div className="container    mx-auto">
                                            <div className="flex flex-col text-center w-full mb-1">
                                            </div>
                                            <div className="mt-10 md:mt-0 md:col-span-2">
                                                <form action="#" method="POST">
                                                    <div className="shadow overflow-hidden sm:rounded-md">
                                                        <div className="px-2 py-8 bg-white sm:p-6">
                                                            <div className="grid grid-cols-6 gap-6">
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">Número de obligación
                                                                    </label>
                                                                    <input type="text" name="numero_obligacion" placeholder="Número de obligación" id="numero_obligacion" autoComplete="given-name" className="mt-1 h-20 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Valor financiado
                                                                    </label>
                                                                    <input type="text" name="valor_financiado" placeholder="Valor financiado" id="valor_financiado" autoComplete="family-name" className="mt-1 h-20 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Número de cuotas
                                                                    </label>
                                                                    <input type="text" name="numero_cuota" placeholder="Número de cuotas" id="last-name" autoComplete="family-name" className="mt-1 h-20 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">Tasa efectiva anual
                                                                    </label>
                                                                    <input type="text" name="tasa_anual" placeholder="Tasa efectiva anual" id="tasa_anual" autoComplete="family-name" className="mt-1 h-20 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">
                                                                        Cuotas pendientes</label>
                                                                    <input type="text" name="cuotas_pendientes" placeholder="Cuotas pendientes" id="cuotas_pendientes" autoComplete="family-name" className="mt-1 h-20 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                                <div className="col-span-6 sm:col-span-3">
                                                                    <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">
                                                                        Saldo a capital</label>
                                                                    <input type="text" name="saldo_capital" placeholder="saldo a capital" id="saldo_capital" autoComplete="family-name" className="mt-1 h-20 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>}
                </TabBody>
            </TabContainer >
        </div >
    )
}

export default withRouter(Formulario_prestamo)