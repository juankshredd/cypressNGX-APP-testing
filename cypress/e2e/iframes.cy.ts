describe('', ()=>{
    const getIframeDocument1 = ()=>{
        return cy.get('#frame1').its('0.contentDocument').should('exist')
    }

    const getIframeDocument2 = ()=>{
        return cy.get('#frame2').its('0.contentDocument').should('exist')
    }

    const getIframeBody1 = ()=>{
        return getIframeDocument1().its('body').should('not.be.undefined').then(cy.wrap)
    }

    const getIframeBody2 = ()=>{
        return getIframeDocument2().its('body').should('not.be.undefined').then(cy.wrap)
    }
    it('',()=>{
        cy.visit('https://demoqa.com/frames')
        getIframeBody1().find('#sampleHeading').should('have.text', 'This is a sample page')
        getIframeBody2().find('#sampleHeading').should('have.text', 'This is a sample page')
        
    })
})
