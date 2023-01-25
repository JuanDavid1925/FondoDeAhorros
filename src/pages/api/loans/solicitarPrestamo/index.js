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
  const { cantidad_prestamo, interes } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        if (jwt === undefined) {
          return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
        }

        const userData = verify(jwt, 'DSII')

        if (userData.tipo === 'Cliente') {

          const query1 = `
            SELECT documento_asociado_cliente
            FROM clientes 
            WHERE documento_cliente = '${userData.documento}';`

          const { rows } = await conn.query(query1)

          userData.documento_asociado_cliente = rows[0].documento_asociado_cliente
        }
        else {
          userData.documento_asociado_cliente = userData.documento
        }

        const query2 = `
        INSERT INTO prestamos (
          documento_asociado_solicitado_prestamo,
          documento_usuario_solicitante_prestamo,
          interes_prestamo,
          monto_prestamo,
          cancelado_prestamo
        )
        VALUES (
          '${userData.documento_asociado_cliente}',
          '${userData.documento}',
          ${interes},
          ${cantidad_prestamo},
          0
        )
        RETURNING *;`

        const resp = await conn.query(query2)

        if (!resp.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al solicitar el préstamo.' })

        return res.status(201).json({ estado: 201, mensaje: 'Préstamo realizado con éxito.' })

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