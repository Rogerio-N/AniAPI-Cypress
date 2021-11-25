/// <reference types="Cypress"/>

context('Check if the JWT is valid', () => {
    it('Valid JWT', () => {
        cy.verifyToken(Cypress.env("JWT")).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.headers).to.be.an("object")
             .that.includes.all.keys("x-ratelimit-limit","x-ratelimit-remaining","x-ratelimit-reset")
            expect(response.body).to.have.property("data")
        })
    });

    it('Invalid, JWT incorrect value', () => {
        cy.verifyToken(Cypress.env("JWT")+1).then((response)=>{
            expect(response.status).to.eq(401)
            expect(response.headers).to.be.an("object")
             .that.includes.all.keys("x-ratelimit-limit","x-ratelimit-remaining","x-ratelimit-reset")
            expect(response.statusText).to.be.eq("Unauthorized")
        })
    });

    it('Invalid, JWT incorrect format', () => {
        cy.verifyToken("a").then((response)=>{
            expect(response.status).to.eq(401)
            expect(response.headers).to.be.an("object")
             .that.includes.all.keys("x-ratelimit-limit","x-ratelimit-remaining","x-ratelimit-reset")
            expect(response.statusText).to.eq("Unauthorized")
        })
    });
});