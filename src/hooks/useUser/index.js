import { useCallback, useContext } from 'react'

import Context from '/src/context/userContext'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback((documento, contrasena) => {
    const URL = '/api/login'
    const data = {
      documento: documento,
      contrasena: contrasena
    }
    console.log("Entra al login.");

    fetch(
      URL,
      {
        method: 'GET',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje }) => {
        switch (estado) {
          case 200:
            console.log("logueado.");
            setJWT('Logueado.')
            break
          case 404:
            console.log('Documento incorrecto.')
            break
          case 400:
            console.log('Contraseña incorrecta.')
            break
          default:
            console.log(mensaje)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const registroAsociado = useCallback(data => {
    const URL = '/api/registro/asociado'
    console.log("Entra al asociado.");

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log("respondió bien");
        if (data.estado === 201)
          return console.log('SUCCESS')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [])

  const registroCliente = useCallback(data => {
    const URL = '/api/registro/cliente'
    console.log("Entra al cliente.");

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.estado === 201)
          return console.log('SUCCESS')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    registroAsociado,
    registroCliente
  }
}