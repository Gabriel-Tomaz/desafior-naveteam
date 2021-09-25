describe("First test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Deve ser possivel fazer login", () => {
    const userEmail = "jgabrieltomaz2706@gmail.com";
    const userPassword = "umdoistres";

    cy.viewport(1280, 720)
    cy.get("#user-email").type(userEmail);
    cy.get("#user-password").type(userPassword);
    cy.get("#btn-login").click(); 
    
    cy.get("#btn-add-naver").contains("Adicionar Naver");
  });
});
