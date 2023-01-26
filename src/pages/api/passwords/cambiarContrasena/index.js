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
    contrasena
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const bcryptjs = require('bcryptjs')
        const contra = await bcryptjs.hash(contrasena, 8)

        const query1 = `UPDATE usuarios 
          SET contrasena_usuario = '${contra}'
          WHERE documento_usuario = '${documento}'
          RETURNING *;`

        const res1 = await conn.query(query1)

        if (!res1.rowCount)
          return res.status(400).json({ estado: 400, mensaje: 'Error al modificar los datos del usuario.' })

        return res.status(200).json({ estado: 200, mensaje: 'Contraseña modificada exitosamente.' })

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