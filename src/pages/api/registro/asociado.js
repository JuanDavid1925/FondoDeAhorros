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
    nombre,
    apellido,
    telefono,
    contrasena,
    correo,
    fechaNacimiento,
    ocupacion,
    ciudad,
    direccion,
    cuotaMensual,
    cuotaManejoPendiente

  } = body

  switch (method) {
    case 'POST':
      try {
        const query1 = `INSERT INTO usuario (
          documento,
          nombres,
          apellidos,
          contrasena,
          telefono,
          tipo
        )
        VALUES (
          ${documento},
          ${nombre},
          ${apellido},
          ${contrasena},
          ${telefono},
          'Asociado'
        )
        RETURNING *;`

        const query2 = `INSERT INTO asociado (
          documento,
          correo,
          fecha_nacimiento,
          ocupacion,
          ciudad,
          direccion,
          cuota_fija_mensual,
          cuota_manejo_pendiente
        )
        VALUES (
          ${documento},
          ${correo},
          ${fechaNacimiento},
          ${ocupacion},
          ${ciudad},
          ${direccion},
          ${cuotaMensual},
          ${cuotaManejoPendiente}
        )
        RETURNING *;`

        const res1 = await conn.query(query1)

        const res2 = await conn.query(query2)

        if (res1.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al usuario' })

        if (res2.rowcount === 0)
          return res.status(400).json({ estado: 400, mensaje: 'Error al crear al cliente' })

        return res.status(200).json({
          estado: 200,
          mensaje: 'Usuario creado con éxito',
          usuario: res1.rows[0].usuario
        })

      } catch (error) {
        res.status(400).json(error)

      } finally {
        break
      }

    default:
      res.status(405).json('Método inválido.')
      break
  }
}