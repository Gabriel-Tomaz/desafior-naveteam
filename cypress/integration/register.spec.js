describe("First test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Dever ser possível cadastrar um Naver", () => {
    const userEmail = "jgabrieltomaz2706@gmail.com";
    const userPassword = "umdoistres";

    cy.viewport(1280, 720);
    cy.get("#user-email").type(userEmail);
    cy.get("#user-password").type(userPassword);
    cy.get("#btn-login").click();

    const userName = `Shrek - ${new Date().toString()}`;
    const userJob = "Front-End";
    const userBirthDate = "27062000";
    const userAdmission = "14082019";
    const userProjects = "Navedex";
    const userUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDdmQrTom16eKIldaw7zJ1Y5BR4u6-UtTJs4lmo6Tbq2gwRxNKGR5j_UNIP7I6wIRCPA&usqp=CAU";

    cy.get("#btn-add-naver").click();

    cy.get("#user-name").type(userName);
    cy.get("#user-job").type(userJob);
    cy.get("#user-birthDate").type(userBirthDate);
    cy.get("#user-admission").type(userAdmission);
    cy.get("#user-projects").type(userProjects);
    cy.get("#user-url").type(userUrl);
    cy.get("#btn-save").click();

    cy.get("#modal").contains("Naver criado com sucesso!");
    
    cy.get("#btn-close").click();
    cy.get("#btn-goBack").click();

    cy.get(".naver-name").contains(userName);

  });
});
