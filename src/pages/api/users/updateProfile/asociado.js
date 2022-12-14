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
    cuota_fija_mensual,
    cuota_manejo_pendiente,
    activo
  } = JSON.parse(body)

  switch (method) {
    case 'POST':
      try {
        let res1, res2

        if (nombres || apellidos || contrasena || telefono) {
          const bcryptjs = (contrasena) ? require('bcryptjs') : undefined
          const contra = (contrasena) ? await bcryptjs.hash(contrasena, 8) : undefined

          const query1 = `UPDATE usuarios 
          SET
          ${`${(nombres) ? `nombres_usuario = '${nombres}',` : ''}
            ${(apellidos) ? `apellidos_usuario = '${apellidos}',` : ''}
            ${(contrasena) ? `contrasena_usuario = '${contra}',` : ''}
            ${(telefono) ? `telefono_usuario = '${telefono}',` : ''}`
              .trim().slice(0, -1)}
          WHERE documento_usuario = ${documento}
          RETURNING *;`

          res1 = await conn.query(query1)

          if (res1.rowcount === 0)
            return res.status(400).json({ estado: 400, mensaje: 'Error al modificar los datos del usuario.' })
        }

        if (ciudad || ocupacion || direccion || cuota_fija_mensual || correo || fecha_nacimiento || cuota_manejo_pendiente || activo) {
          const query2 = `UPDATE asociados
          SET
          ${`${(ciudad) ? `ciudad_asociado = '${ciudad}',` : ''}
            ${(ocupacion) ? `ocupacion_asociado = '${ocupacion}',` : ''}
            ${(direccion) ? `direccion_asociado = '${direccion}',` : ''}
            ${(cuota_fija_mensual) ? `cuota_fija_mensual_asociado = ${cuota_fija_mensual},` : ''}
            ${(cuota_fija_mensual) ? `correo_asociado = '${cuota_fija_mensual}',` : ''}
            ${(fecha_nacimiento) ? `fecha_nacimiento_asociado = '${fecha_nacimiento}',` : ''}
            ${(cuota_manejo_pendiente) ? `cuota_manejo_pendiente_asociado = ${cuota_manejo_pendiente},` : ''}
            ${(activo) ? `activo_asociado = ${activo},` : ''}`
              .trim().slice(0, -1)}
          WHERE documento_asociado = ${documento}
          RETURNING *;`

          res2 = await conn.query(query2)

          if (res2.rowcount === 0)
            return res.status(400).json({ estado: 401, mensaje: 'Error al modificar los datos del asociado.' })
        }

        if (res1 || res2) {
          return res.status(201).json({
            estado: 201,
            mensaje: 'Usuario modificado con éxito.'
          })
        }

        return res.status(400).json({ estado: 402, mensaje: 'No se realizaron modificaciones.' })

      } catch ({ message }) {
        res.status(400).json({ estado: 408, mensaje: message })

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}