beforeEach(() => {
    cy.visit('http://localhost:3000')
})

describe("Testing search for a query that returns a player", function() {
    it("Finds the searchbar and searches for something thaths in the database", function() {
        cy.get('#inputplayer')
        .type('messi')
        .should('have.value', 'messi')
        cy.get('.playerbutton').should('not.be.visible')
        cy.get('form').contains('Search').click()
        assert(cy.get('.playerbutton').contains('Messi'))
    })
})

describe("Testing search for a query that don't return any players", function() {
    it("Finds the searchbar and searches for something thats not in the database", function() {
        cy.get('#inputplayer')
        .type('messias')
        cy.get('form').contains("Search").click()
        cy.get('.playerbutton').should('not.exist')
    })
})



describe("Testing filtering", function() {
    it("Sets position to goalkeeper, club to Legends and nation to Netherlands, and checks if van der Sar displays", function() {
        cy.get('form').contains('Select position').click().type('Goalkeeper{enter}')
        cy.get('form').contains('Select club').click().type('Legends{enter}')
        cy.get('form').contains('Select nation').click().type('Netherlands{enter}')
        cy.get('form').contains("Search").click()
        cy.get('.playerbutton').contains('Edwin van der Sar 89')
    })
})



describe("Testing that ascending sorting works as it should", function() {
    it("Sets sorting order to asc, and checks that the youngest (Sancho) player displays first", function() {
        cy.get('form').contains('ASC').click()
        cy.get('form').contains("Search").click()
        cy.get('.playerbutton').first().contains("Sancho 87")
    })
})



describe("Testing that descending sorting works as it should", function() {
    it("Sets sorting order to desc, and checks that the oldest player (Garrincha) displays first", function() {
        cy.get('form').contains('DESC').click()
        cy.get('form').contains("Search").click()
        cy.get('.playerbutton').first().contains("Garrincha 94")
    })
})



describe("Testing search with no query", function() {
    it("Finds the searchbar and searches with an empty query, paginates through the db and checks that Pelé and Rijkaard (first and last element in db) displays", function() { 
        cy.get('form').contains("Search").click()
        assert(cy.get('.playerbutton').contains('Pelé 98'))
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        cy.get('.prevnext').contains("Next page").click()
        assert(cy.get('.playerbutton').contains('Rijkaard 88'))
    })
})



describe("Testing if there is possible to paginate backwards when you´re at the first page", function() {
    it("Searches for all players, and tries to paginate backwards from first page, hoping for the page not to change", function() {
        cy.get('form').contains("Search").click()
        cy.get('.prevnext').contains("Previous page").should('not.be.enabled')
    })
})



describe("Testing if there is possible to paginate backwards and foreward when there is only one player displayed", function() {
    it("Searches for a single player, and checks that both 'Next page' and 'Previous page' is disabled", function() {
        cy.get('#inputplayer').type("messi")
        cy.get('form').contains('Search').click()
        cy.get('.prevnext').contains("Previous page").should('not.be.enabled')
        cy.get('.prevnext').contains("Next page").should('not.be.enabled')
    })
})





