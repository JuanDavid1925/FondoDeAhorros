import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

import { conn } from '/src/utils/database'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { jwt } = req.cookies

  try {
    if (jwt === undefined) {
      return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
    }

    const userData = verify(jwt, 'DSII')

    const query1 = `
      SELECT documento_usuario ${(userData.tipo === 'Asociado' ? ', correo_asociado, monto_total_asociado' : '') }
      FROM usuarios ${ (userData.tipo === 'Admin')
        ? ''
        : `JOIN ${(userData.tipo === 'Asociado') ? 'asociados' : 'clientes'}
          ON usuarios.documento_usuario = ${(userData.tipo === 'Asociado') ? 'documento_asociado' : 'documento_cliente'}`
      }
      WHERE documento_usuario = '${userData.documento}';`

    const resp1 = await conn.query(query1)

    if (!resp1.rowCount)
      return res.status(400).json({ estado: 404, mensaje: 'Usuario no encontrado.' })

    return res.status(200).json({ 
      estado: 200, 
      mensaje: 'Datos obtenidos correctamente.', 
      datos: { 
        documento: userData.documento, 
        correo: resp1.rows[0].correo_asociado,
        saldo: resp1.rows[0].monto_total_asociado
      } 
    })
  } catch ({ message }) {
    return res.status(401).json({ estado: 401, mensaje: message })
  }
}