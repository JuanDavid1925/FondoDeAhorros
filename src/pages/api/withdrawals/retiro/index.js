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
    id
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        UPDATE solicitudes
        SET
          estado_retiro = 0
        WHERE
          id_retiro = ${id}
        RETURNING*;`

        const resp1 = await conn.query(query1)

        if (resp1.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al realizar el retiro.' })

        return res.status(201).json({ estado: 201, mensaje: 'Retiro realizado con éxito.' })

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