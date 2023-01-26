import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import $ from 'jquery'

import usePasswords from '/src/hooks/usePasswords'

export default function Registro() {
  const router = useRouter()

  const { olvidoContra } = usePasswords()

  const [url, setUrl] = useState()

  const handleSubmmit = useCallback(() => {
    olvidoContra($('#email').val().trim(), setUrl)
  }, [olvidoContra])

  useEffect(() => {
    if (typeof url === 'string') {
      router.push(`/inicio/contrasena/cambio_contra/${$('#email').val().trim()}/${url}`)
    }
  }, [url, router])

  return (

    <div className="bg-gradient-to-tl from-blue-500 to-blue-300 text-white  flex flex-col min-h-screen">
      <div className="flex justify-center px-6 my-12">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("/olvido.jpg")' }} />
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="px-8 mb-4 text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-gray-700">Cambiar contraseña</h2>
              <p className="mt-3  text-gray-700">
                Lo entendemos, muchas cosas pueden pasar. Ingrese su número de documento y le enviaremos un código de seguridad
                para reestablecer su contraseña al correo que tiene guardado.
              </p>
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700" htmlFor="text">
                Correo electrónico
              </label>
              <input
                className="w-full px-3 py-2 text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="mb-6 text-center">
              <button
                onClick={handleSubmmit}
                className="w-full px-4 py-2 font-bold text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="button">
                Cambiar
              </button>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
