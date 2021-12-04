describe("This test", () => {
  it("is working fine!", () => {
    cy.visit("/")
    cy.get("header").should("have.class", "App-header")
  })
})
