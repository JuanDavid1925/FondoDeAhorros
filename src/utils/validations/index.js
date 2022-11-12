/**
 * Funciones para validar las diferentes entradas esperadas.
 */

/**
 * Función para validar si el dato entregado es un valor numérico entero.
 * @param { String } numero Dato a evaluar.
 */
function validarNumeroDocumento(numero) {
  try {
    let tamanoMin = numero.toString().length >= 5
    let tamanoMax = numero.toString().length <= 15
    let esNum = /^\d+$/.test(numero)

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
    let tamanoMax = contrasena.toString().length <= 64
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
 * Función para validar si los dato entregados son parte de un logueo válido.
 * @param { String } documento Número de documento a evaluar.
 * @param { String } contrasena Contraseña a evaluar.
 */
function validarDatosLogin({ documento, contrasena }) {
  if (validarNumeroDocumento(documento)) {
    return -101
  }
  return 0
}


export { validarNumeroDocumento, validarContrasena, validarDatosLogin }