import { useRouter } from 'next/router'
import { useState } from 'react'
import Head from "next/head"

import Aviso_registro from "/src/componentes/inicio/modales/aviso_registro"

export default function Info_prestamos_clientes() {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }

  const router = useRouter()

  return (
    <div className="container flex flex-col items-center px-4 py-20 mx-auto xl:flex-row">
      <Head>
        <link rel="icon" href="/icono_prestamo.png" />
        <title>Préstamo asociado</title>
        <meta name="description" content={"Préstamo asociado"} />
      </Head>
      <div className="flex justify-center xl:w-1/2">
        <img className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="/prestamos3.jpg" alt="" />
      </div>
      <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-gray-900">
          Realiza préstamos como asociado
        </h2>
        <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-500">
          Como asociado puedes realizar préstamos a terceros, pero te haces completamente responsable por el préstamo
          y obtienes una ganancia adicional que es estipulada por el administrador.El interés puede cambiar si el gerente lo realiza por
          año. Para un préstamo el interés será el mismo hasta terminar el préstamo, así se realicen
          abonos.
        </p>
        <div className="mt-6 sm:-mx-2">
          <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
            <a
              onClick={() => {
                router.push('/')
              }}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <span className="mx-2">
                Regresar
              </span>
            </a>
          </div>
          <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
            <a onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              <span className="mx-2">
                Registrarse
              </span>
            </a>
          </div>
          {showModal && <Aviso_registro onClose={() => handleClose()}></Aviso_registro>}
        </div>
      </div>
    </div>


  )
}