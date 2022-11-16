import { useCallback, useContext } from 'react'
import Context from '/src/context/userContext'
import { validarDatosLogin, validarDatosRegistroAsociado, validarDatosRegistroCliente } from '/src/utils/validations'

export default function useUser() {
  const { userData, setUserData } = useContext(Context)

  const login = useCallback((documento, contrasena, setEstado) => {
    const URL = '/api/users/login'
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
      .then(({ estado, mensaje, user }) => {
        switch (estado) {
          case 200:
            setUserData(user)
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

  }, [setUserData])

  const logout = useCallback(setEstado => {

    const URL = '/api/users/logout'

    fetch(
      URL,
      {
        method: 'POST',
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje }) => {
        if (estado === 200 || estado === 404) {
          setUserData(null)
          setEstado(1)
        }
        console.log(mensaje);
      })
      .catch(error => console.error(`Error: ${error}`))
  }, [setUserData])

  const registroAsociado = useCallback((data, setEstado) => {
    const URL = '/api/users/registro/asociado'
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
          case 201:
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
    const URL = '/api/users/registro/cliente'
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
          case 201:
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

  const getProfile = useCallback(() => {

    const URL = '/api/users/getProfile'

    fetch(
      URL,
      {
        method: 'POST',
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, user }) => {
        if (estado === 200) {
          setUserData(user)
        }
        console.log(mensaje);
      })
      .catch(error => console.error(`Error: ${error}`))
  }, [setUserData])

  return {
    isLogged: Boolean(userData),
    login,
    logout,
    registroAsociado,
    registroCliente,
    getProfile
  }
}
