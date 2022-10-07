describe('Manifesting Web...', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Get Init Components...', () => {
    cy.get('h1')
    .contains('Welcome to my app!');
  })
  })
})
