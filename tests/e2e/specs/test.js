// https://docs.cypress.io/api/introduction/api.html

/*
describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
*/
describe('Root/app page', () => {
  it("visit root", () => {
    cy.visit('/');
  });

  it(" Open language modal", () => {
    cy.get('#app').get('.ettn-side-bar').find('div').should('have.class','left').contains('button','Language').click();
  });

  it("show Language modal", () => {
    cy.get("#app").get('.ettn-dialog').find('.dialogLang').find('div').should('have.class','show').contains('button','English');
  });

  it("Close Language modal", () => {
    cy.get('#app').get('.ettn-dialog').find('.dialogLang').find('.cmdClose').click();

    cy.get("#app").get('.ettn-dialog').find('.dialogLang').find('div').not('show').contains('button','English');
  });

  describe('about view', () => {
    it('Navigate to about', () => {
      cy.get('#app').find('.ettn-nav-bar').find('a').contains('a', 'About').should('have.attr', 'href', '/about').click();
    });

    it('Should contain image', () => {
      cy.get('#app').get('.about').find('.img-box').find('img').should('have.attr', 'src')
    });

    it('Should have contain', () => {
      cy.get("#app").find('.box-of-doom').find('.content').should('have.css', 'color');
    });
  });

  describe('contact view', () => {
    it('Navigate contact page', () => {
      cy.get('#app').find('.ettn-nav-bar').find('a').contains('a', 'Contact').should('have.attr', 'href', '/contact').click();
    });

    it('Should be Wrong', () => {
      cy.get('#app').find('.nameInput').invoke('val', 123).trigger('change');

      cy.get('#app').find('.nameInput').should('have.prop','value', '123')
    });
  })
});