///<reference types = "cypress"/>

import { waitForDebugger } from "inspector"

describe('Log in to marketronNXT web page', function()
{
   /*it('launch url', function()
    {
        
        cy.visit('https://test.qa.mktnxt.com')
        cy.title().should('eq', '')
    }) */
    it('log in', function()
    {
        cy.visit('https://test.qa.mktnxt.com')
        cy.get("#user_email").type('yashawanthtest@gmail.com')
        cy.get("#user_password").type('Welcome@1')
        cy.get('.btn'). click()
        cy.wait(16000);
        cy.get('[data-cy=report-nav-link]').should('contain', 'Reports');
        cy.get('[data-cy=report-nav-link]').click()
    
    }
    )

}
)
