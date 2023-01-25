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
        const query1 = `
        SELECT 
          id_reunion,
          fecha_reunion,
          hora_reunion,
          multa_reunion,
          lugar_presencial,
          costo_presencial,
          tipo_reunion
        FROM 
          reunion JOIN presencial
        ON
          reunion.id_reunion = presencial.id_reunion_presencial
        WHERE 
          reunion.id_reunion = ${id};`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `Sin reuniones.` })
        }

        return res.status(201).json({
          estado: 201,
          mensaje: 'Reunion obtenida exitosamente.',
          reunion: res1.rows[0]
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