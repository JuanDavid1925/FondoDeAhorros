import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const {
    documento,
    fecha
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        SELECT documento_asociado_retiro 
        FROM solicitudes
        WHERE 
          documento_asociado_retiro = '${documento}'
          AND estado_retiro > 0;`

        const resp1 = await conn.query(query1)

        if (resp1.rowCount > 0)
          return res.status(400).json({ estado: 409, mensaje: 'El usuario ya posee una solicitud en proceso.' })

        const query2 = `
        INSERT INTO solicitudes (
          documento_asociado_retiro,
          fecha_solicitada_retiro,
          estado_retiro
        )
        VALUES (
          '${documento}',
          '${fecha}',
          4
        )
        RETURNING *;`

        const resp2 = await conn.query(query2)

        if (!resp2.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear la solicitud.' })

        return res.status(201).json({ estado: 201, mensaje: 'Solicitud de retiro creada con éxito.' })

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