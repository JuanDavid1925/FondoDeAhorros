import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { id } = body

  switch (method) {
    case 'POST':
      try {
        if (jwt === undefined) {
          return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
        }

        const userData = verify(jwt, 'DSII')

        const query1 = `
        SELECT 
          id_prestamo
        FROM 
          prestamos
        WHERE 
          documento_usuario_solicitante_prestamo = '${userData.documento}';`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `Sin prestamos.` })
        }

        return res.status(201).json({
          estado: 201,
          mensaje: 'Prestamos obtenidos exitosamente.',
          datos: res1.rows
        })

      } catch (error) {
        console.error(error.message)
        res.status(504).json(`La base de datos no responde.`)

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}