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
    fecha,
    motivo,
    multa,
    enlace
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query1 = `BEGIN;

        INSERT INTO reunion (
          fecha_reunion,
          motivo_reunion,
          multa_reunion,
          tipo_reunion
        )
        VALUES (
          '${fecha}',
          '${motivo}',
          ${multa},
          'Presencial'
        )
        RETURNING *;

        INSERT INTO virtual (
          enlace_virtual
        )
        VALUES (
          '${enlace}'
        )
        RETURNING *;

        COMMIT;`

        const resp = await conn.query(query1)

        console.log(resp)

        if (!resp[0].rowCount || !resp[1].rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear la reunión.' })

        return res.status(201).json({ estado: 201, mensaje: 'Reunión creada con éxito.' })

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