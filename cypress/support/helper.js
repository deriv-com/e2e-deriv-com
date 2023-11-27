Cypress.Commands.add('generateRandomEmail', (domain) => {
    return `user${Math.floor(Math.random() * 100000)}${domain}`
  });
