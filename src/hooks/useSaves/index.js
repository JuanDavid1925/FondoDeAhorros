import { useCallback, useContext } from 'react'

import { validarDatosSolicitud } from '/src/utils/validations/withdrawals'

export default function useSaves() {
  const cargarDatosSolicitud = useCallback((setDatos) => {
    const url = '/api/withdrawals/solicitudes/cargarDatos'

    fetch(
      url,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, datos }) => {
        if (estado === 200) {
          setDatos(datos)
        }
        console.log(mensaje)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })

  }, [])

  const solicitarRetiro = useCallback((data, setEstado) => {
    const url = '/api/withdrawals/solicitudes/crearSolicitud'

    const validacion = validarDatosSolicitud(data)

    if (validacion !== 1) {
      setEstado(validacion)
      console.log(validacion)
      return
    }

    setEstado(2)

    fetch(
      url,
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
          case 408:
            setEstado(-408)
            break
          case 409:
            setEstado(-2)
            break
          default:
            setEstado(-500)
            console.log('No se ha podido conectar con la base de datos.')
            break
        }

        console.log(mensaje)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })

  }, [])

  const prueba = useCallback(() => {
    const url = '/api/pruebas/ping'

    fetch(
      url,
      {
        method: 'GET'
      }
    )
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })
  }, [])

  return { cargarDatosSolicitud, solicitarRetiro, prueba }
}