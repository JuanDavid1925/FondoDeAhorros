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
    correo,
    fecha_nacimiento,
    ocupacion,
    ciudad,
    direccion,
    cuota_fija_mensual
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        const bcryptjs = require('bcryptjs')
        let contra = await bcryptjs.hash(contrasena, 8)

        const query1 = `INSERT INTO usuarios (
          documento_usuario,
          nombres_usuario,
          apellidos_usuario,
          contrasena_usuario,
          telefono_usuario,
          tipo_usuario
        )
        VALUES (
          '${documento}',
          '${nombres}',
          '${apellidos}',
          '${contra}',
          '${telefono}',
          'Asociado'
        )
        RETURNING *;`

        const query2 = `INSERT INTO asociados (
          documento_asociado,
          ciudad_asociado,
          ocupacion_asociado,
          direccion_asociado,
          cuota_fija_mensual_asociado,
          correo_asociado,
          fecha_nacimiento_asociado,
          cuota_manejo_pendiente_asociado,
          monto_total_asociado,
          activo_asociado
        )
        VALUES (
          '${documento}',
          '${ciudad}',
          '${ocupacion}',
          '${direccion}',
          '${cuota_fija_mensual}',
          '${correo}',
          '${fecha_nacimiento}',
          5000,
          0,
          true
        )
        RETURNING *;`

        const res1 = await conn.query(query1)

        const res2 = await conn.query(query2)

        if (res1.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario' })

        if (res2.rowcount === 0)
          return res.status(400).json({ estado: 401, mensaje: 'Error al crear al asociado' })

        console.log(res2.rows);

        return res.status(201).json({
          estado: 201,
          mensaje: 'Usuario creado con éxito',
          usuario: res1.rows[0].usuario
        })

      } catch ({ message }) {
        res.status(40).json({ estado: 408, mensaje: message })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}