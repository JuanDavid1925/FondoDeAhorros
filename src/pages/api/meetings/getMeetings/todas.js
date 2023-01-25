import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        SELECT 
          id_reunion,
          fecha_reunion,
          hora_reunion,
          tipo_reunion
        FROM 
          reunion
        ORDER BY 
          fecha_reunion ASC, 
          hora_reunion ASC, 
          tipo_reunion ASC,
          id_reunion ASC;`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          res.status(404).json({ estado: 404, mensaje: `Sin reuniones.` })
        }
        else {
          res.status(201).json({ estado: 201, mensaje: 'Reuniones encontradas.', datos: res1.rows })
        }

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