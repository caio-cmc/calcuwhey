/* eslint-disable no-undef */

describe('Testing header responsiveness', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/#main')
  })

  it('Should collapse', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="header-test"]').invoke('attr', 'class').should('eq', 'header-main-collapsed')
  })

  it('Should return to fullsize', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="logo-header-test"]').click()
    cy.get('[data-testid="header-test"]').invoke('attr', 'class').should('eq', 'header-main-fullsize')
  })
})

describe('Testing form responsiveness and results', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('http://localhost:3000/#main')
  })

  it('Button should still be disabled with an incomplete form', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="brand-input-test-0"]').type('Crescimento')
    cy.get('[data-testid="weight-input-test-0"]').type(1000)
    cy.get('[data-testid="calculate-button-test"]').should('be.disabled')
  })

  it('Should show right results from a form', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="brand-input-test-0"]').type('Crescimento')
    cy.get('[data-testid="weight-input-test-0"]').type(1000)
    cy.get('[data-testid="serving-input-test-0"]').type(30)
    cy.get('[data-testid="protein-input-test-0"]').type(24)
    cy.get('[data-testid="price-input-test-0"]').type(99.9)
    cy.get('[data-testid="calculate-button-test"]').click()
    cy.get('[data-testid="br-info-test-0"]').should('have.text', 'Informações do whey Crescimento:')
    cy.get('[data-testid="sq-info-test-0"]').should('have.text', 'Rende 33 porções por embalagem')
    cy.get('[data-testid="sp-info-test-0"]').should('have.text', 'Preço por porção: R$3.00')
    cy.get('[data-testid="tp-info-test-0"]').should('have.text', 'Cada embalagem possui 800g de proteína, tendo assim uma concentração de 80.0%')
    cy.get('[data-testid="pp-info-test-0"]').should('have.text', 'Você paga R$79.92 só pela proteína do produto')
  })

  it('Button should still be disabled with only one form filled', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="compare-test"]').click()
    cy.get('[data-testid="brand-input-test-0"]').type('Crescimento')
    cy.get('[data-testid="weight-input-test-0"]').type(1000)
    cy.get('[data-testid="serving-input-test-0"]').type(30)
    cy.get('[data-testid="protein-input-test-0"]').type(24)
    cy.get('[data-testid="price-input-test-0"]').type(99.9)
    cy.get('[data-testid="calculate-button-test"]').should('be.disabled')
  })

  it('Should show right results from both forms', () => {
    cy.get('[data-testid="calc-bt-header-test"]').click()
    cy.get('[data-testid="compare-test"]').click()
    cy.get('[data-testid="brand-input-test-0"]').type('Crescimento')
    cy.get('[data-testid="brand-input-test-1"]').type('Titânio Máximo')
    cy.get('[data-testid="weight-input-test-0"]').type(1000)
    cy.get('[data-testid="weight-input-test-1"]').type(900)
    cy.get('[data-testid="serving-input-test-0"]').type(30)
    cy.get('[data-testid="serving-input-test-1"]').type(30)
    cy.get('[data-testid="protein-input-test-0"]').type(24)
    cy.get('[data-testid="protein-input-test-1"]').type(21)
    cy.get('[data-testid="price-input-test-0"]').type(99.9)
    cy.get('[data-testid="price-input-test-1"]').type(129.9)
    cy.get('[data-testid="calculate-button-test"]').click()
    cy.get('[data-testid="br-info-test-0"]').should('have.text', 'Informações do whey Crescimento:')
    cy.get('[data-testid="sq-info-test-0"]').should('have.text', 'Rende 33 porções por embalagem')
    cy.get('[data-testid="sp-info-test-0"]').should('have.text', 'Preço por porção: R$3.00')
    cy.get('[data-testid="tp-info-test-0"]').should('have.text', 'Cada embalagem possui 800g de proteína, tendo assim uma concentração de 80.0%')
    cy.get('[data-testid="pp-info-test-0"]').should('have.text', 'Você paga R$79.92 só pela proteína do produto')
    cy.get('[data-testid="br-info-test-1"]').should('have.text', 'Informações do whey Titânio Máximo:')
    cy.get('[data-testid="sq-info-test-1"]').should('have.text', 'Rende 30 porções por embalagem')
    cy.get('[data-testid="sp-info-test-1"]').should('have.text', 'Preço por porção: R$4.33')
    cy.get('[data-testid="tp-info-test-1"]').should('have.text', 'Cada embalagem possui 630g de proteína, tendo assim uma concentração de 70.0%')
    cy.get('[data-testid="pp-info-test-1"]').should('have.text', 'Você paga R$90.93 só pela proteína do produto')
  })
})
