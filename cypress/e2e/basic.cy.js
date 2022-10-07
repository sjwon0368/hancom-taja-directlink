describe('Manifesting Web...', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Get Init Components...', () => {
    cy.get('h1')
    .contains('Welcome to my app!');
  })
  it('Netlify Logo Render...', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
