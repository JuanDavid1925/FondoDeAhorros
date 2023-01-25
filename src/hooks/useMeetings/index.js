import { useCallback } from 'react'

export default function useMeetings() {
  const crearReunion = useCallback((data, setEstado) => {
    const url = (data.tipo == 1)
      ? '/api/meetings/crearReunion/presencial'
      : '/api/meetings/crearReunion/virtual'

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

  const getAllMeetings = useCallback(setDatos => {
    const url = '/api/meetings/getMeetings/todas'

    fetch(
      url,
      {
        method: 'POST'
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

  const getPresencial = useCallback(setDatos => {
    const url = '/api/meetings/getMeetings/presencial'

    fetch(
      url,
      {
        method: 'POST'
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

  const getVirtual = useCallback(setDatos => {
    const url = '/api/meetings/getMeetings/virtual'

    fetch(
      url,
      {
        method: 'POST'
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

  return {
    crearReunion,
    getAllMeetings,
    getPresencial,
    getVirtual
  }
}