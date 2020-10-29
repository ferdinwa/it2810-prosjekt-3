describe("Testing search for a query that return a player", function() {
    it("Finds the searchbar and searches for something thaths in the database", function() {
        cy.visit('http://localhost:3000')
        cy.get('#inputplayer')
        .type('messi')
        .should('have.value', 'messi')

        cy.get('.playerbutton').should('not.be.visible')

        cy.get('form').contains('Search').click()
        assert(cy.get('.playerbutton').contains('Messi'))
    })
})

describe("Testing search for a query that do not return any players", function() {
    it("Finds the searchbar and searches for something thats not in the database", function() {
        cy.visit('http://localhost:3000')
        cy.get('#inputplayer')
        .type('messias')
        cy.get('form').contains("Search").click()
        cy.get('.playerbutton').should('not.exist')
    })
})

describe("Testing search with no query", function() {
    it("Finds the searchbar and searches with an empty query, checks that Pelé and Rijkaard (first and last element in db) displays", function() {
        cy.visit('http://localhost:3000') 
        cy.get('form').contains("Search").click()
        assert(cy.get('.playerbutton').contains('Pelé 98'))
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        assert(cy.get('.playerbutton').contains('Rijkaard 88'))
    })
})


