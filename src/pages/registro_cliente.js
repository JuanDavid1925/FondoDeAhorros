import { Formik } from "formik"
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from "react"
import useUser from "/src/hooks/useUser"

export default function Registro_cliente() {
  const router = useRouter()
  const { registroCliente } = useUser()
  const [estado, setEstado] = useState()

  useEffect(() => {
    if (estado == 1) {
      router.push("/login")
    }
  }, [estado, router])

  const handleSubmit = useCallback(data => {
    registroCliente(data, setEstado)
  }, [registroCliente])

  return (

    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: 'url("./clientes3.jpg")' }}>
        </div>
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
              Forma parte de nuestros clientes
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Regístrate como cliente y contacta a un asociado para empezar a disfrutar de nuestros servicios.
            </p>
            <div>
              <Formik
                initialValues=
                {{
                  documento: "",
                  nombres: "",
                  apellidos: "",
                  telefono: "",
                  contrasena: "",
                  confirContrasena: "",
                  documento_asociado: ""
                }}
                onSubmit={handleSubmit}
              >
                {
                  ({ handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre (s) </label>
                        <input
                          onChange={handleChange}
                          id="nombres"
                          name="nombres"
                          type="text"
                          placeholder="Ingrese su(s) nombre(s)"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido (s)</label>
                        <input
                          onChange={handleChange}
                          id="apellidos"
                          name="apellidos"
                          type="text"
                          placeholder="Ingrese su(s) apellido(s)"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Documento de identificación</label>
                        <input
                          onChange={handleChange}
                          id="documento"
                          name="documento"
                          type="text"
                          placeholder="Ingrese tu documento"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Teléfono</label>
                        <input
                          onChange={handleChange}
                          id="telefono"
                          name="telefono"
                          type="text"
                          placeholder="Ingrese su número de contacto"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Identificación del asociado a vincular</label>
                        <input
                          onChange={handleChange}
                          id="documento_asociado"
                          name="documento_asociado"
                          type="text"
                          placeholder="Ingrese el número del asociado"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contraseña</label>
                        <input
                          onChange={handleChange}
                          id="contrasena"
                          name="contrasena"
                          type="password"
                          placeholder="Ingrese una contraseña"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirmar contraseña</label>
                        <input
                          onChange={handleChange}
                          id="confirContrasena"
                          name="confirContrasena"
                          type="password"
                          placeholder="Ingrese nuevamente su contraseña"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      </div>
                      <button type="submit" className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide bg-blue-400 capitalize rounded-md border-blue-400 border-2 text-white hover:text-white font-semibold hover:shadow-[inset_20rem_0_0_0] hover:shadow-blue-600 duration-[400ms,800ms] transition-[color,box-shadow]">
                        <span><label className="mt-4 text-white-500 white:text-white-400 cursor-pointer">Registrarse</label></span>
                      </button>
                    </form>
                  )
                }
              </Formik>
            </div>

          </div>
        </div>
      </div>
    </section>
  )

}

