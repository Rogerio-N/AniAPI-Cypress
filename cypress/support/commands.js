Cypress.Commands.add("verifyToken", (token) => {
    cy.request({
        method:"GET",
        url:"/v1/auth/me",
        headers:{
            "Authorization":`Bearer ${token}`
        },
        failOnStatusCode:false
    })
})