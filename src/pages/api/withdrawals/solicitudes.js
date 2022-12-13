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
    documento_asociado,
    fecha
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query = `
        INSERT INTO clientes (
          documento_asociado_retiro,
          fecha_solicitada_retiro,
          estado_retiro
        )
        VALUES (
          '${documento_asociado}',
          '${fecha}',
          -2
        )
        RETURNING *;`

        const resp = await conn.query(query)

        if (resp.rowcount === 0)
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