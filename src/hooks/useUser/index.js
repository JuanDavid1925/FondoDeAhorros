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

    if (validacion !== 1) {
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
            setEstado(-409)
            break
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

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion);
      return
    }

    {
      const { contrasena, confirContrasena } = data
      if (contrasena === confirContrasena) {
        delete data.confirContrasena
        delete data.aceptarTerminos
      }
      else {
        setEstado(-10)
        console.log(-10)
        return
      }
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
            setEstado(1)
            break
          case 400:
            setEstado(-1)
            break
          case 401:
            setEstado(-2)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-408)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje);

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [])

  const registroCliente = useCallback((data, setEstado) => {
    const URL = '/api/registro/cliente'
    console.log("Entra al cliente.")

    let validacion = validarDatosRegistroCliente(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion);
      return
    }

    {
      const { contrasena, confirContrasena } = data
      if (contrasena === confirContrasena) {
        delete data.confirContrasena
        delete data.aceptarTerminos
      }
      else {
        setEstado(-10)
        console.log(-10)
      }
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
            setEstado(1)
            break
          case 400:
            setEstado(-1)
            break
          case 401:
            setEstado(-2)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-408)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje);

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
