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
    hora,
    motivo,
    multa,
    enlace
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        console.log("HIIIIIIII")
        console.log(body)
        const query1 = `
        INSERT INTO reunion (
          fecha_reunion,
          hora_reunion,
          motivo_reunion,
          multa_reunion,
          tipo_reunion
        )
        VALUES (
          '${fecha}',
          '${hora}',
          '${motivo}',
          ${multa},
          'Virtual'
        )
        RETURNING id_reunion;`

        const resp1 = await conn.query(query1)

        if (!resp1.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear la reunión.' })

        const query2 = `
        INSERT INTO virtual (
          id_reunion_virtual,
          enlace_virtual
        )
        VALUES (
          ${resp1.rows[0].id_reunion},
          '${enlace}'
        )
        RETURNING *;`

        const resp2 = await conn.query(query2)

        if (!resp2.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear la reunión.' })

        return res.status(201).json({ estado: 201, mensaje: 'Reunión creada con éxito.' })

      } catch ({ message }) {
        console.log(message);
        res.status(408).json({ estado: 408, mensaje: message })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}