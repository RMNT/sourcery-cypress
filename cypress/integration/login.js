describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    })

    let role = 'Team Lead';
    //console.log(role);
    var today = new Date();
    it('Should be able to login with role ' + role, function () {
        

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Demo User"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get(`[aria-label="${role}"]`).click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('.calendar__day.calendar--today.calendar--selected').contains(2); //(today.getDate());
    })
})