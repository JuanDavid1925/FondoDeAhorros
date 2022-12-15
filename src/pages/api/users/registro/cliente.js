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
    nombres,
    apellidos,
    telefono,
    contrasena,
    documento_asociado
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const bcryptjs = require('bcryptjs')
        const contra = await bcryptjs.hash(contrasena, 8)

        const query = `BEGIN;

        INSERT INTO usuarios (
          documento_usuario, 
          nombres_usuario,
          apellidos_usuario,
          contrasena_usuario,
          telefono_usuario,
          tipo_usuario,
          activo_usuario
        )
        VALUES (
          '${documento}',
          '${nombres}',
          '${apellidos}',
          '${contra}',
          '${telefono}',
          'Cliente',
          true
        )
        RETURNING *;

        INSERT INTO clientes (
          documento_cliente,
          documento_asociado_cliente
        )
        VALUES (
          '${documento}',
          '${documento_asociado}',
          true
        )
        RETURNING *;

        COMMIT;`

        const resp = await conn.query(query)

        if (resp[1].rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario.' })

        if (resp[2].rowcount === 0)
          return res.status(401).json({ estado: 401, mensaje: 'Error al crear al cliente.' })

        return res.status(201).json({
          estado: 201,
          mensaje: 'Usuario creado con éxito.',
          usuario: resp[1].rows[0].usuario
        })

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