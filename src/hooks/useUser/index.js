import { useCallback, useContext } from 'react'
import Context from '/src/context/userContext'
import { validarDatosLogin, validarDatosRegistroAsociado, validarDatosRegistroCliente, validarDatosModificacionAsociado, validarDatosModificacionCliente } from '/src/utils/validations/users'

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
      console.log(validacion)
      return
    }

    setEstado(2)

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
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error =>{
        setEstado(-400)
        console.error(`Error: ${error}`) 
      })

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
          setEstado(1)
          setUserData(null)
        }
        console.log(mensaje)
      })
      .catch(error => console.error(`Error: ${error}`))
  }, [setUserData])

  const registroAsociado = useCallback((data, setEstado) => {
    const URL = '/api/users/registro/asociado'
    console.log("Entra al asociado.")

    let validacion = validarDatosRegistroAsociado(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion)
      return
    }

    setEstado(2)

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
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  const registroCliente = useCallback((data, setEstado) => {
    const URL = '/api/users/registro/cliente'
    console.log("Entra al cliente.")

    let validacion = validarDatosRegistroCliente(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion)
      return
    }

    setEstado(2)

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
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  const getProfile = useCallback(() => {

    const URL = '/api/users/getProfile'

    fetch(
      URL,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, user }) => {
        if (estado === 200) {
          setUserData(user)
        }
        console.log(mensaje)
      })
      .catch(error => console.error(`Error: ${error}`))
  }, [setUserData])

  const getUser = useCallback((data, setEstado, setUser) => {
    const URL = '/api/users/getUsers/unico'

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
            setUser(user)
            setEstado(1)
            break
          case 404:
            setEstado(-1)
            break
          case 401:
            setEstado(-2)
            break
          case 408:
            setEstado(-408)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })
  }, [])

  const getAllUsers = useCallback((data, setEstado, setUsers) => {
    const URL = '/api/users/getUsers/todos'

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, users }) => {
        switch (estado) {
          case 200:
            setUsers(users)
            setEstado(1)
            break
          case 404:
            setEstado(-1)
            break
          case 401:
            setEstado(-2)
            break
          case 408:
            setEstado(-408)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })
  }, [])

  const modificacionAsociado = useCallback((data, setEstado) => {
    const URL = '/api/users/updateProfile/asociado'
    console.log("Entra al asociado.")

    let validacion = validarDatosModificacionAsociado(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion)
      return
    }

    setEstado(2)

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
          case 402:
            setEstado(-3)
            break
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  const modificacionCliente = useCallback((data, setEstado) => {
    const URL = '/api/users/updateProfile/cliente'
    console.log("Entra al cliente.")

    let validacion = validarDatosModificacionCliente(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion)
      return
    }

    setEstado(2)

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
          case 402:
            setEstado(-3)
            break
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-409)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  return {
    isLogged: Boolean(userData),
    login,
    logout,
    registroAsociado,
    registroCliente,
    getProfile,
    getUser,
    getAllUsers,
    modificacionAsociado,
    modificacionCliente
  }
}
