import { useCallback } from 'react'

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

  const cargarDatosRetiro = useCallback((setDatos) => {
    const url = '/api/withdrawals/retiro/cargarDatos'

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

  const realizarRetiro = useCallback((data, setEstado) => {
    const url = '/api/withdrawals/retiro/realizarRetiro'

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

  const getCuotaMensual = useCallback((documento, setDatos) => {
    const url = '/api/saves/cuotaMensual/getCuotaMensual'

    fetch(
      url,
      {
        method: 'POST',
        data: JSON.stringify({ documento: documento })
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, datos }) => {
        if (estado === 201) {
          setDatos(datos)
        }
        console.log(mensaje)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })
  }, [])

  const setCuotaMensual = useCallback((data, setEstado) => {
    const url = '/api/saves/cuotaMensual/getCuotaMensual'

    fetch(
      url,
      {
        method: 'POST',
        data: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, datos }) => {
        if (estado === 201) {
          setEstado(1)
        }
        else {
          setEstado(-1)
        }

        console.log(mensaje)
      })
      .catch(error => {
        console.error(`Error: ${error}`)
      })
  }, [])

  const pagoMensual = useCallback(
    /**
     * Función para crear una nueva transacción 
     * abonando el valor de la cuota mensual.
     * @param {String} valor 
     * @param {Function} setEstado 
     */
    (valor, setEstado) => {
      const url = '/api/saves/CuotaMensual/pagar'

      setEstado(2)

      fetch(
        url,
        {
          method: 'POST',
          body: JSON.stringify({ monto: valor })
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
            case 404:
              setEstado(-404)
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

  return {
    cargarDatosSolicitud,
    solicitarRetiro,
    cargarDatosRetiro,
    realizarRetiro,
    getCuotaMensual,
    setCuotaMensual,
    pagoMensual
  }
}