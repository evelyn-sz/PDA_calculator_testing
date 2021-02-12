// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  }),

  it('one plus four equals five', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  }),

  it('seven minus four equals three', () => {
    cy.get('#number7').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  }),

  it('three time five equals fifteen', () => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')

  }),

  it('21 by 7 equals 3', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator_divide').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3')
  }),

  it('987654 by 3210 equals 307.6803738317757', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '307.6803738317757')
  }),

  it('(5*11+15-20)/2 = 25', () => {
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number1').click();
  cy.get('#number1').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#number5').click();
  cy.get('#operator_subtract').click();
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '25')
  }),

  it('6 * 2 * CLEAR 3 equals 36', () => {
    cy.get('#number6').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#clear').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '36')
  }),

  it('90 - 300 equals -210', () => {
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-210')
  }),

  it('9876543210 * 32109876543210 equals 3.17134583146779e+23', () => {
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();    
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();    
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3.17134583146779e+23')
  })

  it('0 / 2 = 2', () => {
  cy.get('#number0').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '2')
  }),

  it('2 / 0 = Infinity', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Infinity')
  })
})
