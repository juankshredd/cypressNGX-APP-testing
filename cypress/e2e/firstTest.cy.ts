/// <reference types='cypress'/>

describe('How to locate objects on DOM and basic assertion', ()=>{

    before('', ()=>{
        cy.visit('http://localhost:4200/')    
        // by tag
        cy.get('a')
        // by attribute name
        cy.get('[title="Modal & Overlays"]').click()
        // by text content
        cy.contains('Forms').click()
        // by class
        cy.get('.size-medium')
        // by attribute name
        cy.get('[title="Form Layouts"]').click()
        // by attribute name and value
        cy.get('[placeholder="Email"]')
        cy.get('a[class="sidebar-toggle"]').click()
          
    })

    it('testing the possibe ways to get objets', ()=>{
    // by class value
        cy.get('[class="ng-tns-c7-7 ng-star-inserted"]').click()
        // by tag name attribute with value
        cy.get('input[placeholder="Email"]')
        // // by two different attributes
        cy.get('[placeholder="Email"][type="text"]').click()
        //by id
        cy.get('#exampleInputEmail1').click()
        // by tag name, attribute with value, id and class name
        cy.get('button[type="submit"].appearance-filled')
        // the most recommended way by cypress // need tchanges to be done in app code
        cy.get('[data-cy="signBtn"]')

})

    it('test 2', ()=>{
        cy.get('button').parents('form').find('button').should('contain', 'Submit')
        cy.get('button').parents('form').find('button').should('contain', 'Sign in').should('be.visible')       
    })

    it('list n dropdowns',()=>{
        cy.get('.select-button').click()
        // 1.
        cy.get('.options-list')
        cy.get('[ng-reflect-value="dark"]').click()
        cy.get('a.ng-tns-c7-15 > .menu-title').click()
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
        cy.contains('Smart Table')       
    })
})
