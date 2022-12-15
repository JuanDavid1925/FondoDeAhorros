import { NextApiRequest, NextApiResponse } from 'next'
import { verify } from 'jsonwebtoken'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const { jwt } = req.cookies

  try {
    if (jwt === undefined) {
      return res.status(404).json({ estado: 404, mensaje: 'No está logueado.' })
    }

    const userData = verify(jwt, 'DSII')

    return res.status(200).json({ estado: 200, mensaje: 'Datos obtenidos correctamente.', user: { nombres: userData.nombres, apellidos: userData.apellidos, tipo: userData.tipo, documento: userData.documento } })
  } catch ({ message }) {
    return res.status(401).json({ estado: 401, mensaje: message })
  }
}