
context("context manager E2E test cases",()=>{

    beforeEach(()=>{
        
        cy.visit("/");
    })

    it("should check for incorrect user aurhorization",()=>{
        cy.get("#username").type("TestUser");
        cy.get("#password").type("password");
        cy.get("#loginButton").click();
        cy.get(".MuiSnackbarContent-message").should("have.text", "Unauthorized");
        })

    it("should check for incorrect user credential",()=>{
        cy.get("#username").type("admin");
        cy.get("#password").type("pass");
        cy.get("#loginButton").click();
        cy.get(".MuiSnackbarContent-message").should("have.text", "Unauthorized");
        })
    it("should check for user login",()=>{
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#loginButton").click();
       
        }) 
        
        it("create a token in local storage",()=>{
            cy.get("#username").type("admin");
            cy.get("#password").type("password");
            cy.get("#loginButton").click().should(()=>{
                cy.wait(2000);
                expect(localStorage.getItem('token')).
                to.exist  
              })
        })
    it("Should check for wrong password", () => {
        cy.get("#username").type("Peter");
        cy.get("#password").type("123456789");
        cy.get("#loginButton").click();
        cy.get(".MuiSnackbarContent-message").should("have.text", "Unauthorized");
    });

    it("Should go to Register page after Login", ()=>{
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#loginButton").click();
        cy.get("#RegisterBtn").click();
        cy.contains('Already Registered? Login Here');
    });

    it("Should go to Read Later in Display Card", ()=>{
        cy.get("#username").type("admin");
        cy.get("#password").type("password");
        cy.get("#loginButton").click();
        cy.get("#RegisterBtn").click();
        cy.get("#readLaterButton").click();
        cy.get("#ReadLtr").click();
        });
    
})