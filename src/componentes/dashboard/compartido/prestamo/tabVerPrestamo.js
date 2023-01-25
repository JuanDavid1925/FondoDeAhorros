import { Fragment, useCallback } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Transition, Menu } from "@headlessui/react"
import { withRouter } from "next/router"
import React from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TabVerPrestamo = () => {

  const handleChange = useCallback(evt => {
    console.log(evt)
  }, [])

  return (
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
              <Menu.Items
                onChange={handleChange}
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
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
  )
}

export default withRouter(TabVerPrestamo)