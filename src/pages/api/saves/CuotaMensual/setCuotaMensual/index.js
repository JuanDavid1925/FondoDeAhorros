import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req
  const { documento, cuota } = body

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        UPDATE 
          asociados
        SET 
          cuota_fija_mensual_asociado = ${cuota}
        WHERE 
          documento_asociado = ${documento}
        RETURNING documento_asociado, cuota_fija_mensual_asociado;`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `Usuario no encontrado.` })
        }

        return res.status(200).json({ estado: 200, mensaje: 'Cuota modificada exitosamente.' })

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