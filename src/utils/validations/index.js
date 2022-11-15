/**
 * Funciones para validar las diferentes entradas esperadas.
 */

import { isInteger } from "formik"

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
 * Función para validar si el dato entregado es un número de documento válido.
 * @param { String } documento Dato a evaluar.
 */
function validarNumeroDocumento(documento) {
  try {
    let tamanoMin = documento.length >= 5
    let tamanoMax = documento.length <= 15
    let esNum = /^\d+$/.test(documento)

    return tamanoMin && tamanoMax && esNum

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
 * Función para validar si el dato entregado es una fecha de nacimiento
 * válida y si la persona es mayor de edad.
 * @param { String } fecha Dato a evaluar.
 */
function validarNacimiento(fecha) {
  try {
    let [anho, mes, dia] = (fecha.split('-').length === 3) ? fecha.split('-') : ['0', '0', '0']


  } catch (error) {
    return false
  }
}


/**
 * Función para validar si el dato entregado puede ser un nombre.
 * @param { String } nombre Dato a evaluar.
 */
function validarNombre(nombre) {
  try {
    let tamanoMin = nombre.length >= 1
    let tamanoMax = nombre.length <= 50
    let soloLetras = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/.test(nombre)

    return tamanoMin && tamanoMax && soloLetras

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
 * Función para validar si los dato entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 */
function validarDatosLogin({ documento }) {
  if (!validarNumeroDocumento(documento)) {
    return -101
  }
  return 0
}


/**
 * Función para validar si los dato entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosRegistroAsociado({ nombres, apellidos, documento, contrasena, telefono, fecha_nacimiento, ocupacion, ciudad, direccion, cuota_fija_mensual }) {
  if (!validarNombre(nombres)) {
    return -101
  }
  if (!validarNombre(apellidos)) {
    return -102
  }
  if (!validarNumeroDocumento(documento)) {
    return -103
  }
  if (!validarContrasena(contrasena)) {
    return -104
  }
  if (!validarNumeroTelefono(telefono)) {
    return -105
  }
  if (!validarNacimiento(fecha_nacimiento)) {
    return -106
  }
  if (!validarOcupacion(ocupacion)) {
    return -107
  }
  if (!validarCiudad(ciudad)) {
    return -108
  }
  if (!validarDireccion(direccion)) {
    return -109
  }
  if (!validarEntero(cuota_fija_mensual)) {
    return -110
  }
  return 0
}


/**
 * Función para validar si los dato entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosRegistroCliente({ nombres, apellidos, documento, contrasena, telefono, documento_asociado }) {
  if (!validarNombre(nombres)) {
    return -101
  }
  if (!validarNombre(apellidos)) {
    return -102
  }
  if (!validarNumeroDocumento(documento)) {
    return -103
  }
  if (!validarContrasena(contrasena)) {
    return -104
  }
  if (!validarNumeroTelefono(telefono)) {
    return -105
  }
  if (!validarNumeroDocumento(documento_asociado)) {
    return -106
  }
  return 0
}

export { validarDatosLogin, validarDatosRegistroAsociado, validarDatosRegistroCliente }