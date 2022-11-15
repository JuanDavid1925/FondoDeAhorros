import { useCallback, useContext } from 'react'

import Context from '/src/context/userContext'
import { validarDatosLogin, validarDatosRegistroAsociado, validarDatosRegistroCliente } from '/src/utils/validations'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

  const login = useCallback((documento, contrasena, setEstado) => {
    const URL = '/api/login'
    const data = {
      documento: documento,
      contrasena: contrasena
    }
    console.log(`Entra al login.`)

    let validacion = validarDatosLogin(data)

    if (validacion !== 0) {
      console.log(validacion);
      return
    }

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje }) => {
        switch (estado) {
          case 200:
            setJWT("Logueado.")
            setEstado(1)
            break
          case 404:
            setEstado(-1)
            break
          case 400:
            setEstado(-2)
            break
          case 409:
            setEstado(-408)
          default:
            setEstado(-408)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje);

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const registroAsociado = useCallback((data, setEstado) => {
    const URL = '/api/registro/asociado'
    console.log("Entra al asociado.")

    let validacion = validarDatosRegistroAsociado(data)

    if (validacion !== 0) {
      setEstado(validacion)
      console.log(validacion);
      return
    }

    console.log(validacion);

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

  const registroCliente = useCallback((data, setEstado) => {
    const URL = '/api/registro/cliente'
    console.log("Entra al cliente.")

    let validacion = validarDatosRegistroCliente(data)

    if (validacion !== 0) {
      setEstado(validacion)
      console.log(validacion);
      return
    }

    console.log(validacion);

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