import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { cuota } = body

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        UPDATE 
          datos_generales
        SET 
          cuota_manejo = ${cuota}
        RETURNING cuota_manejo;`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `No se pudo realizar la modificacion.` })
        }

        return res.status(200).json({
          estado: 200, mensaje: 'Cuota modificada exitosamente.'
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