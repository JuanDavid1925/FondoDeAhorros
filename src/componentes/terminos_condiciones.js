import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Terminos({ children, onClose }) {
    const [open, setOpen] = useState(true)
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="backdrop-blur-sm fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Términos y condiciones
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="p-2 text-sm text-gray-500 space-y-1">
                                                    El fondo de Ahorros y préstamos es un servicio establecido para facilitar a los consumidores financieros el acceso a productos y servicios, relacionados con su objeto y función social.
                                                </p>
                                                <p className="p-2 text-sm text-gray-500 space-y-1">
                                                    El fondo se reserva el derecho de actualizar, modificar o eliminar la información contenida, con el fin de ajustarla a los cambios normativos o jurisprudenciales, previo aviso al consumidor financiero.
                                                </p>
                                                <p className="p-2 text-sm text-gray-500 space-y-1">
                                                    Cuando se registra en el fondo está aceptando ahorrar de manera mensual una cuota fija que es estipulada por el administrador del fondo,
                                                    aunque si lo desea puede ahorrar más del monto fijado, pero teniendo en cuenta que las ganancias no aumentarán, además
                                                    acepta pagar una cuota de manejo anual que se utilizará para gastos administrativos, también se compromete a asistir a las
                                                    reuniones de asociados que son convocadas por el administrador del fondo, teniendo en cuenta que el no asistir a dichas reuniones
                                                    conlleva a sanciones por parte del mismo.

                                                </p>
                                                <p className="p-3 text-sm text-gray-500">
                                                    Puedes retirar tus ahorros antes de finalizado el año pero perderás todas tus ganancias y además debes notificar tu deseo de retirar tus ahorros
                                                    con un mes de anticipación.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={onClose}
                                    >
                                        Listo
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
