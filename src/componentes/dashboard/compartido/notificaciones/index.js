import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'

export default function Notificaciones_asociado({ children, onClose }) {
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
                    <div className="backdrop-blur-sm fixed inset-0 bg-opacity-75 transition-opacity bg-no-repeat bg-center bg-cover" />
                </Transition.Child>

                <div className="fixed mt-5 mr-6 inset-0 z-10 overflow-y-auto">
                    <div className="flow-root min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="float-right relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                {/*Aquí empieza la primera notificación*/}
                                <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="rounded-full h-14 w-14" alt="" />
                                        <div className="flex flex-col space-y-1">
                                            <span className="font-bold">John Doe</span>
                                            <span className="text-sm">Aprobar solicitud de retiro.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={onClose}
                                        ref={cancelButtonRef}
                                    >
                                        Rechazar
                                    </button>
                                </div>

                                {/* Aquí empieza la segunda notificación*/}
                                <div className="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" className="rounded-full h-14 w-14" alt="" />
                                        <div className="flex flex-col space-y-1">
                                            <span className="font-bold">Humberto Solórzano</span>
                                            <span className="text-sm">Solicitud de reunión.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Aceptar
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={onClose}
                                        ref={cancelButtonRef}
                                    >
                                        Rechazar
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
