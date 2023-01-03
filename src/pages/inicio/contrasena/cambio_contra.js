import { useState } from "react"

import Aviso_cambio_contra from "/src/componentes/inicio/modales/aviso_cambio_contra"

export default function CambioContraseña() {
  const [estado, setEstado] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }

  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      {(estado === 1) ? <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">Establece una nueva contraseña</h3>
            <p className="mt-3 text-center text-black/80">Ingresa una nueva contraseña.</p>
            <form action className="justify-center mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row">
              <input type="email" name="email" id="email" className="grow rounded-lg border border-transparent bg-indigo-200 py-3 px-5 placeholder:text-gray-500 focus:border-violet-500 focus:outline-none" placeholder="Nueva contraseña" />
              <input type="email" name="email" id="email" className="grow rounded-lg border border-transparent bg-indigo-200 py-3 px-5 placeholder:text-gray-500 focus:border-violet-500 focus:outline-none" placeholder="confirmar contraseña" />
            </form>
            <button
              onClick={() => setShowModal(true)}
              type="submit" className="mt-10 rounded-lg bg-black px-5 py-3 font-bold text-white">Cambiar contraseña</button>
            <button
              onClick={() =>
                setEstado(0)
              }
              type="submit" className="mt-2 rounded-lg bg-black px-5 py-3 font-bold text-white">Cancelar</button>
          </div>
          {showModal && <Aviso_cambio_contra onClose={() => handleClose()}></Aviso_cambio_contra>}
        </div>
      </div>

        : <div className="w-full relative flex items-center justify-center">
          <img src="/contraseña.png" alt="dining" className="w-30 h-30 absolute z-0 hidden xl:block" />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">Recupera tu contraseña</h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Ingresa el código de seguridad que hemos enviado a tu correo electrónico.
            </p>
            <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
              <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxLength={1} />
              <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxLength={1} />
              <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxLength={1} />
              <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxLength={1} />
            </div>
            <button
              onClick={() =>
                setEstado(1)
              }
              className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Verificar</button>
          </div>
        </div>}
    </div>
  )
}