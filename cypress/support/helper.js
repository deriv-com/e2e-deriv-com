Cypress.Commands.add('c_generateRandomEmail', (domain) => {
    return `user${Math.floor(Math.random() * 100000)}${domain}`
  });
