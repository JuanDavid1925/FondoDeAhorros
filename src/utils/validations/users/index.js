/**
 * Funciones para validar las diferentes entradas esperadas en los registros de usuarios.
 */

const { isInteger } = require("formik")

/**
 * Función para validar si el dato entregado puede ser un nombre.
 * @param { String } nombre Dato a evaluar.
 */
function validarNombre(nombre) {
  try {
    let tamanoMin = nombre.length >= 1
    let tamanoMax = nombre.length <= 50
    let soloLetras = /^[a-z A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/.test(nombre)

    return tamanoMin && tamanoMax && soloLetras

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es un número de documento válido.
 * @param { String } documento Dato a evaluar.
 */
function validarNumeroDocumento(documento) {
  try {
    let tamanoMin = documento.toString().length >= 5
    let tamanoMax = documento.toString().length <= 15
    let esNum = /^\d+$/.test(documento)

    return tamanoMin && tamanoMax && esNum

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es un valor numérico entero.
 * @param { String } telefono Dato a evaluar.
 */
function validarNumeroTelefono(telefono) {
  try {
    let tamanoMin = telefono.length >= 5
    let tamanoMax = telefono.length <= 13
    let esNum = /^\d+$/.test(telefono)

    return tamanoMin && tamanoMax && esNum

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es un correo.
 * @param { String } correo Dato a evaluar.
 */
function validarCorreo(correo) {
  try {
    const tamanoMin = correo.length >= 8
    const tamanoMax = correo.length <= 255
    const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)

    return regExp

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado puede ser una ciudad.
 * @param { String } ocupacion Dato a evaluar.
 */
function validarOcupacion(ocupacion) {
  try {
    let tamanoMin = ocupacion.length >= 1
    let tamanoMax = ocupacion.length <= 20

    return tamanoMin && tamanoMax

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es una fecha de nacimiento
 * válida y si la persona es mayor de edad.
 * @param { String } fecha Dato a evaluar.
 */
function validarNacimiento(fecha) {
  try {
    console.log(fecha)
    return new Date(new Date() - new Date(fecha)).getFullYear() - 1970 >= 18
  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado puede ser una ciudad.
 * @param { String } ciudad Dato a evaluar.
 */
function validarCiudad(ciudad) {
  try {
    let tamanoMin = ciudad.length >= 1
    let tamanoMax = ciudad.length <= 35

    return tamanoMin && tamanoMax

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado puede ser una dirección de residencia.
 * @param { String } direccion Dato a evaluar.
 */
function validarDireccion(direccion) {
  try {
    let tamanoMin = direccion.length >= 1
    let tamanoMax = direccion.length <= 100

    return tamanoMin && tamanoMax

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es una contraseña válida.
 * @param { String } contrasena Dato a evaluar.
 */
function validarContrasena(contrasena) {
  try {
    let tamanoMin = contrasena.toString().length >= 6
    let tamanoMax = contrasena.toString().length <= 100
    let tieneNum = /\d/.test(contrasena)
    let tieneMinus = /[a-z]/.test(contrasena)
    let tieneMayus = /[A-Z]/.test(contrasena)
    let tieneEspecial = /[!-/:-@[-`{-■]/.test(contrasena)

    return tamanoMin && tamanoMax && tieneNum && tieneMinus && tieneMayus && tieneEspecial

  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado es un valor numérico entero.
 * @param { String } numero Dato a evaluar.
 */
function validarEntero(numero) {
  try {
    let num = isInteger(numero)

    return num

  } catch (error) {
    return false
  }
}

/**
 * Función para validar si los dato entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 */
function validarDatosLogin({ documento }) {
  if (!validarNumeroDocumento(documento)) {
    return -101
  }
  return 1
}


/**
 * Función para validar si los datos entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosRegistroAsociado({ nombres, apellidos, documento, telefono, correo, ocupacion, fecha_nacimiento, ciudad, direccion, contrasena, confirContrasena, cuota_fija_mensual, aceptarTerminos }) {
  if (!validarNombre(nombres)) {
    return -101
  }
  if (!validarNombre(apellidos)) {
    return -102
  }
  if (!validarNumeroDocumento(documento)) {
    return -103
  }
  if (!validarNumeroTelefono(telefono)) {
    return -105
  }
  if (!validarCorreo(correo)) {
    return -104
  }
  if (!validarOcupacion(ocupacion)) {
    return -106
  }
  if (!validarNacimiento(fecha_nacimiento)) {
    return -107
  }
  if (!validarCiudad(ciudad)) {
    return -108
  }
  if (!validarDireccion(direccion)) {
    return -109
  }
  if (!validarContrasena(contrasena)) {
    return -110
  }
  if (confirContrasena !== contrasena) {
    return -10
  }
  if (!validarEntero(cuota_fija_mensual)) {
    return -111
  }
  if (!aceptarTerminos) {
    return -112
  }
  return 1
}


/**
 * Función para validar si los datos entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosRegistroCliente({ nombres, apellidos, documento, telefono, documento_asociado, contrasena, confirContrasena }) {
  if (!validarNombre(nombres)) {
    return -101
  }
  if (!validarNombre(apellidos)) {
    return -102
  }
  if (!validarNumeroDocumento(documento)) {
    return -103
  }
  if (!validarNumeroTelefono(telefono)) {
    return -104
  }
  if (!validarNumeroDocumento(documento_asociado)) {
    return -105
  }
  if (!validarContrasena(contrasena)) {
    return -106
  }
  if (!confirContrasena) {
    return -6
  }
  return 1
}


/**
 * Función para validar si los datos entregados para modificar un asociado son válidos.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosModificacionAsociado({ nombres, apellidos, documento, telefono, correo, ocupacion, fecha_nacimiento, ciudad, direccion, contrasena, cuota_fija_mensual }) {
  if (nombres !== undefined && !validarNombre(nombres)) {
    return -101
  }
  if (apellidos !== undefined && !validarNombre(apellidos)) {
    return -102
  }
  if (documento !== undefined && !validarNumeroDocumento(documento)) {
    return -103
  }
  if (telefono !== undefined && !validarNumeroTelefono(telefono)) {
    return -104
  }
  if (correo !== undefined && !validarCorreo(correo)) {
    return -104
  }
  if (ocupacion !== undefined && !validarOcupacion(ocupacion)) {
    return -106
  }
  if (fecha_nacimiento !== undefined && !validarNacimiento(fecha_nacimiento)) {
    return -107
  }
  if (ciudad !== undefined && !validarCiudad(ciudad)) {
    return -108
  }
  if (direccion !== undefined && !validarDireccion(direccion)) {
    return -109
  }
  if (contrasena !== undefined && !validarContrasena(contrasena)) {
    return -110
  }
  if (cuota_fija_mensual !== undefined && !validarEntero(cuota_fija_mensual)) {
    return -111
  }
  return 1
}


/**
 * Función para validar si los dato entregados para modificar un cliente son válidos.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosModificacionCliente({ nombres, apellidos, documento, telefono, documento_asociado, contrasena }) {
  if (nombres !== undefined && !validarNombre(nombres)) {
    return -101
  }
  if (apellidos !== undefined && !validarNombre(apellidos)) {
    return -102
  }
  if (documento !== undefined && !validarNumeroDocumento(documento)) {
    return -103
  }
  if (telefono !== undefined && !validarNumeroTelefono(telefono)) {
    return -104
  }
  if (documento_asociado !== undefined && !validarNumeroDocumento(documento_asociado)) {
    return -105
  }
  if (contrasena !== undefined && !validarContrasena(contrasena)) {
    return -106
  }
  return 1
}

module.exports = {
  validarDatosLogin,
  validarDatosRegistroAsociado,
  validarDatosRegistroCliente,
  validarDatosModificacionAsociado,
  validarDatosModificacionCliente,
  validarContrasena
}
