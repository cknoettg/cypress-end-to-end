describe("Test our form inputs", function(){
    //Run Test | Debug Test
    this.beforeEach(function() {
        cy.visit("http://localhost:3000");
    })
    it("first test", function(){
        //cy.get("[for='name'] > input")
        cy.get('[data-cy="name"]')
            .type("Corey")
            .should("have.value", "Corey");
        cy.get('[data-cy="email"]')
            .type("email@email.com")
            .should("have.value", "email@email.com");
        cy.get("textarea")
            .type("I want to help")
            .should("have.value", "I want to help");
        cy.get("#positions")
            .select("Yard Work")
            .should("have.value", "Yard Work");
        cy.get('[type="checkbox"]').check().should("be.checked");;
        cy.contains("Submit").click();
    });
});