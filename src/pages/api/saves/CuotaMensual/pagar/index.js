import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { jwt } = req.cookies
  const { monto } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        if (jwt === undefined) {
          return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
        }

        const userData = verify(jwt, 'DSII')

        const query1 = `
        INSERT INTO transacciones (
          documento_asociado_transacciones,
          fecha_transacciones,
          descripcion_transacciones,
          monto_transacciones
        )
        VALUES (
          '${userData.documento}',
          '${new Date().getUTCMonth() + 1}-${new Date().getUTCDate()}-${new Date().getUTCFullYear()}',
          'cuota mensual.',
          ${monto}
        )
        RETURNING *;`

        const resp = await conn.query(query1)

        if (!resp.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al realizar el pago.' })

        return res.status(201).json({ estado: 201, mensaje: 'Pago realizado con éxito.' })

      } catch ({ message }) {
        res.status(408).json({ estado: 408, mensaje: message })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}