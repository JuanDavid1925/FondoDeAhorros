describe('Logueo en la aplicación:', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/inicio/login')
  })

  it('Abre el login', () => {
    cy.contains('Ingrese a su cuenta')
  })

  it(`Al intentar digitar letras en el campo de documento no se cambia el valor en el campo.`, () => {
    cy.get('input:first').type('H1o2l3a4')

    cy.get('input:first').should('have.value', '1234')
  })

  it(`Al intentar loguearse con un usuario incorrecto muestra un mensaje que lo indica.`, () => {
    cy.get('input:first').type('123456')
    cy.get('input:last').type('123456')

    cy.contains('Ingresar').click()

    cy.contains('Documento incorrecto')
  })

  it(`Al intentar loguearse con una contraseña incorrecta muestra un mensaje que lo indica.`, () => {
    cy.get('input:first').type('1234567890')
    cy.get('input:last').type('123456')

    cy.contains('Ingresar').click()

    cy.contains('Contraseña incorrecta')
  })

  it(`Al intentar loguearse con datos válidos pasa a la página del dashboard del usuario.`, () => {
    cy.get('input:first').type('1234567890')
    cy.get('input:last').type('.Prueba1.')

    cy.contains('Ingresar').click()

    cy.url().should('eq', 'http://localhost:3000/dashboard/asociado')
  })

  it(`El vínculo para registrarse abre la modal para elegir el tipo de usuario.`, () => {
    cy.contains('Regístrese').click()

    cy.contains('¿Cómo deseas registrarte?')
  })

  it(`El botón de olvidó su contraseña envía a la página para solicitar el cambio de contraseña.`, () => {
    cy.contains('¿Olvidó su contraseña?').click()

    cy.url().should('eq', 'http://localhost:3000/inicio/contrasena/olvido_contra')
  })

  it(`El botón de la casa vuelve a la página de inicio.`, () => {
    cy.get('a').first().click()

    cy.url().should('eq', 'http://localhost:3000/')
  })

})