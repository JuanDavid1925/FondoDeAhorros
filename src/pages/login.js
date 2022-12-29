import { Formik } from "formik"
import Head from "next/head";
import { useRouter } from "next/Router"
import { useCallback, useEffect, useState } from "react"
import Aviso_registro from "../componentes/aviso_registro"
import useUser from "/src/hooks/useUser"

export default function Login() {
  const router = useRouter()
  const { login } = useUser()
  const [estado, setEstado] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => { setShowModal(false) }

  useEffect(() => {
    if (estado === 1) {
      router.push("/dashboard")
    }
  }, [estado, router])

  const handleSubmit = useCallback(({ documento, contrasena }) => {
    login(documento, contrasena, setEstado)
  }, [login, setEstado])

  return (

    <div className="bg-white dark:bg-gray-900" >
      <Head>
        <link rel="icon" href="/usuario.png" />
        <title>Iniciar sesión</title>
        <meta name="description" content={"Iniciar sesión"} />
      </Head>
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url("https://www.semana.com/resizer/KBqsa1apFXMpiYrzLIKHestVJkk=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/IMMOPWHLBBGGLDWBUB4VAZZHIE.jpg")' }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Fondo de Ahorros y Préstamos</h2>
              <p className="max-w-x1 mt-3 text-gray-300">Gracias por formar parte de nuestro fondo. </p>
              <p className="max-w-xl mt-3 text-gray-300">Es un placer poder brindarle lo mejor de nosotros.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <a href="./" className="inline-flex items-center justify-center w-full px-0 py-3 text-base font-medium text-white bg-transparent hover:from-gray-600 hover:to-gray-600 sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">FAP</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">Ingrese a su cuenta</p>
            </div>
            <div className="mt-8">
              <Formik
                initialValues=
                {{
                  documento: "",
                  contrasena: ""
                }}
                onSubmit={handleSubmit}
              >
                {
                  ({ handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="documento" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Documento de identificación</label>
                        <input
                          onChange={handleChange}
                          type="number"
                          name="documento"
                          id="documento"
                          placeholder="Ingrese su documento"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {(estado === -1) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">Documento incorrecto </span> : <></>}
                      </div>
                      <div className="mt-6">
                        <div className="flex justify-between mb-2">
                          <label htmlFor="contrasena" className="text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                          <a href="./olvido_contra" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">¿Olvidó su contraseña?</a>
                        </div>
                        <input
                          onChange={handleChange}
                          type="password"
                          name="contrasena"
                          id="contrasena"
                          placeholder="Ingrese su contraseña"
                          className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {(estado === -2) ? <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">Contraseña incorrecta </span> : <></>}
                      </div>
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                          Ingresar
                        </button>
                      </div>
                    </form>
                  )
                }
              </Formik>

              <p className="mt-6 text-sm text-center text-gray-400">¿No tiene una cuenta?
                <a
                  onClick={() => setShowModal(true)}
                  className="text-blue-500 focus:outline-none focus:underline hover:underline cursor-pointer"> Regístrese
                </a>.
              </p>
            </div>
            <div style={{ paddingTop: 10 }} className="flex items-center justify-center">
              {
                (estado === 2)
                  ? <div style={{ borderTopColor: "transparent" }} className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
                  : <></>
              }
            </div>
            {showModal && <Aviso_registro onClose={() => handleClose()}></Aviso_registro>}
          </div>
        </div>
      </div>
    </div >
  )
}
