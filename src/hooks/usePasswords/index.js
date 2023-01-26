import emailjs from '@emailjs/browser'
import { useCallback } from 'react'

import { validarContrasena } from '/src/utils/validations/users'

export default function useUser() {
  const olvidoContra = useCallback((documento, setUrl) => {
    const URL = '/api/passwords/enviarCorreo'

    setUrl(2)

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify({ documento: documento })
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, url, templateParams }) => {
        switch (estado) {
          case 200:
            emailjs.send(
              'Cambio-Contrasena',
              'cambio_contrasen_vfv9kad',
              templateParams,
              '9gZ2KDrLeyUDOD6R_'
            )
              .then((result) => {
                setUrl(url)
              }, (error) => {
                console.log(error)
                setUrl(-1)
              })
            break
          case 404:
            setUrl(-404)
            break
          case 500:
            setUrl(-500)
            break
          default:
            setUrl(-504)
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setUrl(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  const verificarCodigo = useCallback((data, setEstado) => {
    const URL = '/api/passwords/verificarCodigo'

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
          case 200:
            setEstado(1)
            break
          case 400:
            setEstado(-400)
            break
          case 404:
            setEstado(-404)
            break
          default:
            setEstado(-504)
            break
        }
        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  const cambiarContrasena = useCallback((data, setEstado) => {
    const URL = '/api/passwords/cambiarContrasena'

    if (!validarContrasena(data.contrasena)) {
      console.log("La contraseña no es válida.")
      setEstado(-1)
      return
    }

    if (!(data.contrasena === data.confirmacion)) {
      console.log("Las contraseñas no son iguales.")
      setEstado(-2)
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
          case 200:
            setEstado(1)
            break
          case 400:
            setEstado(-400)
            break
          case 408:
            setEstado(-408)
            break
          default:
            setEstado(-504)
            break
        }

        console.log(mensaje)

      })
      .catch(error => {
        setEstado(-400)
        console.error(`Error: ${error}`)
      })

  }, [])

  return { olvidoContra, verificarCodigo, cambiarContrasena }
}