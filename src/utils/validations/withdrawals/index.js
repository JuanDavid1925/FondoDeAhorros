/**
 * Funciones para validar las diferentes entradas esperadas en los registros de usuarios.
 */

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
 * Función para validar si el dato entregado es una fecha a partir de 30 días del presente.
 * @param { String } fecha Dato a evaluar.
 */
function validarFecha(fecha) {
  try {
    const diferenciaAnho = new Date(fecha).getUTCFullYear() - new Date().getUTCFullYear()
    const diferenciaMes = new Date(fecha).getUTCMonth() - new Date().getUTCMonth()
    const diferenciaDia = new Date(fecha).getUTCDate() - new Date().getUTCDate()

    if (diferenciaAnho > 1)
      return true
    else if (diferenciaAnho < 0)
      return false

    if (diferenciaAnho === 1)
      if (diferenciaMes !== -11)
        return true
      else if (diferenciaDia >= 0)
        return true
      else
        return false

    if (diferenciaMes > 1)
      return true
    else if (diferenciaMes < 1)
      return false
    else if (diferenciaDia >= 0)
      return true

    return false
  } catch (error) {
    return false
  }
}

export { validarNombre, validarFecha }