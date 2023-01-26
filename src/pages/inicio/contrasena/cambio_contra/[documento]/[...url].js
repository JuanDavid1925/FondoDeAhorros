import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import $ from "jquery"

import Aviso_cambio_contra from "/src/componentes/inicio/modales/aviso_cambio_contra"
import usePasswords from '/src/hooks/usePasswords'

export default function CambioContraseña() {
  const { verificarCodigo, cambiarContrasena } = usePasswords()

  const router = useRouter()

  const [estadoCodigo, setEstadoCodigo] = useState(0)
  const [estadoContra, setEstadoContra] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => { router.push('/inicio/login') }

  const handleSubmitCodigo = useCallback(() => {
    const data = {
      codigo: (
        $('#first').val().trim().substring(0, 1)
        + $('#second').val().trim().substring(0, 1)
        + $('#third').val().trim().substring(0, 1)
        + $('#fourth').val().trim().substring(0, 1)
      ),
      documento: router.query.documento,
      url: router.query.url.join('/')
    }

    console.log(data)

    verificarCodigo(data, setEstadoCodigo)
  }, [router, verificarCodigo])

  const handleSubmitContra = useCallback(() => {
    const data = {
      documento: router.query.documento,
      contrasena: $('#contrasena').val().trim(),
      confirmacion: $('#confirContra').val().trim()
    }

    console.log(data)

    cambiarContrasena(data, setEstadoContra)
  }, [router, cambiarContrasena])

  const handleCancel = useCallback(() => {
    router.push('/inicio/login')
  }, [router])

  useEffect(() => {
    if (estadoContra == 1) {
      setShowModal(true)
    }
  }, [estadoContra])

  return (
    <div className="2xl:mx-auto 2xl:container mx-4 py-16">
      {
        (estadoCodigo === 1)

          ? <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
            <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
              <div className="mx-auto flex max-w-sm flex-col items-center">
                <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">Establece una nueva contraseña</h3>
                <p className="mt-3 text-center text-black/80">Ingresa una nueva contraseña.</p>
                <form action className="justify-center mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row">
                  <input type="email" name="contrasena" id="contrasena" className="grow rounded-lg border border-transparent bg-indigo-200 py-3 px-5 placeholder:text-gray-500 focus:border-violet-500 focus:outline-none" placeholder="Nueva contraseña" />
                  <input type="email" name="confirContra" id="confirContra" className="grow rounded-lg border border-transparent bg-indigo-200 py-3 px-5 placeholder:text-gray-500 focus:border-violet-500 focus:outline-none" placeholder="confirmar contraseña" />
                </form>
                <button
                  onClick={handleSubmitContra}
                  type="submit" className="mt-10 rounded-lg bg-black px-5 py-3 font-bold text-white">Cambiar contraseña</button>
                <button
                  onClick={handleCancel}
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
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" name="first" maxLength={1} />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" name="second" maxLength={1} />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" name="third" maxLength={1} />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" name="fourth" maxLength={1} />
              </div>
              <button
                onClick={handleSubmitCodigo}
                className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Verificar</button>
            </div>
          </div>
      }
    </div>
  )
}