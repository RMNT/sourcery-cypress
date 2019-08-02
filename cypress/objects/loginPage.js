class LoginPage {
  visit() {
    cy.visit('/');
  }

  getUserValidationIndicator() {
    return cy.get('.Select.not-valid');
  }

  getSubmitButton() {
    return cy.get('[type="submit"]');
  }

  getSpecificUserFromDropDown(userName) {
    return cy.get(`[aria-label="${userName}"]`);
  }

  getUserId() {
    return cy.get('[id="loginForm.userId"]');
  }

  getUserRole() {
    return cy.get('[id="loginForm.role"]');
  }

  getSpecificRoleFromDropDown(role) {
    return cy.get(`[aria-label="${role}"]`);
  }
}

export default LoginPage;
