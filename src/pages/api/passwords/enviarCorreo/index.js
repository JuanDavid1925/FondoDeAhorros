import { NextApiRequest, NextApiResponse } from 'next'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method, body } = req

  const { documento } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const query1 = `
        SELECT 
          correo_asociado,
          contrasena_usuario
        FROM 
          usuarios JOIN asociados
        ON 
          usuarios.documento_usuario = asociados.documento_asociado
        WHERE 
          usuarios.documento_usuario = '${documento}';`

        const res1 = await conn.query(query1)

        if (!res1.rowCount) {
          return res.status(404).json({ estado: 404, mensaje: `Usuario no encontrado.` })
        }

        const codigo = (
          Math.floor(Math.random() * 10).toString()
          + Math.floor(Math.random() * 10).toString()
          + Math.floor(Math.random() * 10).toString()
          + Math.floor(Math.random() * 10).toString()
        )

        const bcryptjs = require('bcryptjs')
        const url = await bcryptjs.hash(codigo + res1.rows[0].contrasena_usuario, 8)

        return res.status(200).json({
          estado: 200,
          mensaje: 'Correo enviado exitosamente.',
          url: url,
          templateParams: {
            codigo: codigo,
            correo: res1.rows[0].correo_asociado
          }
        })

      } catch (error) {
        console.log(error)
        res.status(504).json({ estado: 504, mensaje: `Ocurrio un error al generar el código.` })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}