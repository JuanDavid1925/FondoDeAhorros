const { validarDatosRegistroAsociado } = require('../utils/validations/users')

const datos = {
  nombres: 'Álvaro',
  apellidos: 'Portocarrero',
  documento: '1006071858',
  telefono: '3187742873',
  correo: 'alvaro@fap.org',
  ocupacion: 'Asociado',
  fecha_nacimiento: '06-01-2001',
  ciudad: 'Cali',
  direccion: 'Carrera 100 # 14 - 66',
  contrasena: 'Testing.1',
  confirContrasena: 'Testing.1',
  cuota_fija_mensual: '100000',
  aceptarTerminos: true
}


describe('Validaciones para el registro de asociados:', () => {

  test('Debe retornar un número.', () => {
    result = validarDatosRegistroAsociado(datos)

    expect(typeof result).toBe('number')
  })

  test('Retorna 1 cuando los datos entregados son correctos.', () => {
    result = validarDatosRegistroAsociado(datos)

    expect(result).toBe(1)
  })

  test('Debe aceptar los términos y condiciones', () => {
    prueba = {
      ...datos,
      aceptarTerminos: false
    }

    result = validarDatosRegistroAsociado(prueba)

    expect(result).toBe(-112)
  })


  describe('Validaciones de nombre:', () => {

    test('No debe estar vacío.', () => {
      prueba = {
        ...datos,
        nombres: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-101)
    })

    test('No debe incluir números.', () => {
      prueba = {
        ...datos,
        nombres: 'Alvaro1'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-101)
    })

    test('No debe incluir carácteres especiales.', () => {
      prueba = {
        ...datos,
        nombres: 'Alvaro.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-101)
    })

    test('Debe aceptar espacios.', () => {
      prueba = {
        ...datos,
        nombres: 'Juan David'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe aceptar tildes.', () => {
      prueba = {
        ...datos,
        nombres: 'Álvaró'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

  })


  describe('Validaciones de apellido:', () => {

    test('No debe estar vacío.', () => {
      prueba = {
        ...datos,
        apellidos: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-102)
    })

    test('No debe incluir números.', () => {
      prueba = {
        ...datos,
        apellidos: 'Portocarrero1'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-102)
    })

    test('No debe incluir carácteres especiales.', () => {
      prueba = {
        ...datos,
        apellidos: 'Portocarrero.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-102)
    })

    test('Debe aceptar espacios.', () => {
      prueba = {
        ...datos,
        apellidos: 'Porto Carrero'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe aceptar tildes.', () => {
      prueba = {
        ...datos,
        apellidos: 'Ramírez'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

  })


  describe('Validaciones de número de documento:', () => {

    test('Sólo debe contener números.', () => {
      prueba = {
        ...datos,
        documento: 'Uno'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-103)
    })

    test('Debe aceptar un valor numérico.', () => {
      prueba = {
        ...datos,
        documento: 12345
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe tener por lo menos 5 dígitos.', () => {
      prueba = {
        ...datos,
        documento: '1006'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-103)
    })

    test('Debe tener máximo 15 dígitos.', () => {
      prueba = {
        ...datos,
        documento: '1006071858581706'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-103)
    })

  })


  describe('Validaciones de número de telefono:', () => {

    test('Sólo debe contener números.', () => {
      prueba = {
        ...datos,
        telefono: 'Tres12'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-104)
    })

    test('Debe tener por lo menos 5 dígitos.', () => {
      prueba = {
        ...datos,
        telefono: '3124'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-104)
    })

    test('Debe tener máximo 13 dígitos.', () => {
      prueba = {
        ...datos,
        telefono: '32143729150426'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-104)
    })

  })


  describe('Validaciones de correo:', () => {

    test(`Debe tener una arroba (@).`, () => {
      prueba = {
        ...datos,
        correo: 'alvarofap.com'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-105)
    })

    test(`Debe tener un punto (.) despues del arroba (@).`, () => {
      prueba = {
        ...datos,
        correo: 'alvaro@fapcom'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-105)
    })

    test('Debe tener por lo menos 8 dígitos.', () => {
      prueba = {
        ...datos,
        correo: 'a@f.co'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-105)
    })

    test('Debe tener máximo 255 dígitos.', () => {
      prueba = {
        ...datos,
        correo: ''
      }

      for (i = 0; i < 248; i++) {
        prueba.correo += 'a'
      }

      prueba.correo += '@fap.com'

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-105)
    })

  })


  describe('Validaciones de ocupacion:', () => {

    test('No puede ser una cadena vacía.', () => {
      prueba = {
        ...datos,
        ocupacion: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-106)
    })

    test('Debe tener máximo 20 caracteres.', () => {
      prueba = {
        ...datos,
        ocupacion: 'Ingeniería de sistemas'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-106)
    })

  })


  describe('Validaciones de fecha de nacimiento:', () => {

    test('No puede ser una cadena vacía.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-107)
    })

    test('Debe estar en el formato MM-DD-AAAA.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: '15-06-2001'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-107)
    })

    test('Debe aceptar el año en dos dígitos MM-DD-AA.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: '06-15-01'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe aceptar una fecha pasada por más de 18 años.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: `${new Date().getMonth() + 1}-${new Date().getUTCDate()}-${new Date().getUTCFullYear() - 20}`
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe rechazar una fecha pasada por menos de 18 años.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: `${new Date().getMonth() + 1}-${new Date().getUTCDate()}-${new Date().getUTCFullYear() - 16}`
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-107)
    })

    test('Debe aceptar una fecha pasada por exactamente 18 años.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: `${new Date().getMonth() + 1}-${new Date().getUTCDate()}-${new Date().getUTCFullYear() - 18}`
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

    test('Debe rechazar una fecha futura.', () => {
      prueba = {
        ...datos,
        fecha_nacimiento: `${new Date().getMonth() + 1}-${new Date().getUTCDate() + 1}-${new Date().getUTCFullYear()}`
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-107)
    })

  })


  describe('Validaciones de ciudad:', () => {

    test('No puede ser una cadena vacía.', () => {
      prueba = {
        ...datos,
        ciudad: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-108)
    })

    test('Debe tener máximo 35 caracteres.', () => {
      prueba = {
        ...datos,
        ciudad: ''
      }

      for (i = 0; i < 36; i++) {
        prueba.ciudad += 'a'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-108)
    })

  })


  describe('Validaciones de dirección:', () => {

    test('No puede ser una cadena vacía.', () => {
      prueba = {
        ...datos,
        direccion: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-109)
    })

    test('Debe tener máximo 100 caracteres.', () => {
      prueba = {
        ...datos,
        direccion: ''
      }

      for (i = 0; i < 101; i++) {
        prueba.direccion += 'a'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-109)
    })

  })


  describe('Validaciones de contraseña:', () => {

    test('Debe tener mínimo 6 caracteres.', () => {
      prueba = {
        ...datos,
        contrasena: 'Tes1.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('Debe tener máximo 100 caracteres.', () => {
      prueba = {
        ...datos,
        contrasena: 'A1.'
      }

      for (i = 0; i < 98; i++) {
        prueba.contrasena += 'a'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('Debe tener por lo menos una letra mayúscula.', () => {
      prueba = {
        ...datos,
        contrasena: 'testing1.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('Debe tener por lo menos una letra minúscula.', () => {
      prueba = {
        ...datos,
        contrasena: 'TESTING1.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('Debe tener por lo menos un número.', () => {
      prueba = {
        ...datos,
        contrasena: 'Testing.'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('Debe tener por lo menos un caracter especial.', () => {
      prueba = {
        ...datos,
        contrasena: 'Testing1'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-110)
    })

    test('La confirmación debe ser igual a la contraseña.', () => {
      prueba = {
        ...datos,
        contrasena: 'Testing.1',
        confirContrasena: 'Prueba.1'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-10)
    })

  })


  describe('Validaciones de cuota fija mensual:', () => {

    test('No puede ser una cadena vacía.', () => {
      prueba = {
        ...datos,
        cuota_fija_mensual: ''
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-111)
    })

    test('Sólo debe contener números.', () => {
      prueba = {
        ...datos,
        cuota_fija_mensual: 'Uno'
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-111)
    })

    test('Debe aceptar un valor numérico.', () => {
      prueba = {
        ...datos,
        cuota_fija_mensual: 12345
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

  })


  describe('Validaciones de términos y condiciones:', () => {

    test('Debe aceptar los términos y condiciones.', () => {
      prueba = {
        ...datos,
        aceptarTerminos: false
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(-112)
    })

    test('En caso de aceptarlos el valor será correcto.', () => {
      prueba = {
        ...datos,
        aceptarTerminos: true
      }

      result = validarDatosRegistroAsociado(prueba)

      expect(result).toBe(1)
    })

  })

})