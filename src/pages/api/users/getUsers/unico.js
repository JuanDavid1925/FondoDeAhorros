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
    documento,
    tipo
  } = JSON.parse(body)

  switch (method) {
    case 'GET':
      try {
        let query1

        switch (tipo) {
          case 'Asociado':
            query1 = `SELECT nombres_usuario, apellidos_usuario, telefono_usuario, ocupacion_asociado, direccion_asociado, ciudad_asociado, correo_asociado
                      FROM usuarios, asociados 
                      WHERE usuarios.documento_usuario = asociados.documento_asociado
                      AND documento_usuario = ${documento};`
            break
          case 'Cliente':
            query1 = `SELECT nombres_usuario, apellidos_usuario, telefono_usuario, 
                      FROM usuarios
                      WHERE documento_usuario = ${documento};`
            break
          case 'Admin':
            query1 = `SELECT nombres_usuario, apellidos_usuario, telefono_usuario, 
                      FROM usuarios
                      WHERE documento_usuario = ${documento};`
            break
          default:
            return res.status(400).json({ estado: 401, mensaje: 'Tipo de usuario no válido.' })
        }

        const res1 = await conn.query(query1)

        if (res1.rows.length === 0) {
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario.' })
        }

        return res.status(200).json({
          estado: 200,
          mensaje: 'Usuario obtenido exitosamente.',
          usuario: rows[0]
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