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
          documento_usuario, 
          nombres_usuario, 
          apellidos_usuario, 
          telefono_usuario, 
          tipo_usuario 
        FROM 
          usuarios
        ORDER BY 
          tipo_usuario ASC, 
          apellidos_usuario ASC, 
          nombres_usuario ASC, 
          documento_usuario ASC;`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          res.status(404).json({estado: 404, mensaje: `Sin usuarios.`})
        }
        else {
          res.status(200).json({estado: 200, mensaje: 'Usuarios encontrados.', usuarios: res1.rows})
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