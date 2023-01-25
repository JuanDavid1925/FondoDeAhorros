import { useCallback } from 'react'

export default function useLoans() {
  const solicitarPrestamo = useCallback((data, setEstado) => {
    const url = '/api/loans/solicitarPrestamo'

    data.interes = 0.25

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

  const getPrestamoXID = useCallback((id, setDatos) => {
    const url = '/api/loans/getPrestamo/porID'

    fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({ id: id })
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

  const getPrestamoXUsuario = useCallback(setDatos => {
    const url = '/api/loans/getPrestamo/porUsuario'

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

  return { solicitarPrestamo, getPrestamoXID, getPrestamoXUsuario }
}