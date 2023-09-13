# Cypress E2E Testing Project

This repository contains End-to-End (E2E) tests using Cypress for various features of the Deriv website in a staging environment.

## Project Structure

The project structure includes the following files and directories:

- `cypress.config.js`: Cypress configuration file.
- `package.json`: Lists project dependencies, including Cypress.
- `cypress/support/e2e.js`: Support file for common configurations and custom commands.
- `cypress/e2e/`: Directory containing E2E test files for different features.

## Getting Started

To set up and run the E2E tests, follow these steps:

1. Clone this repository:

   ```bash
   git clone git@github.com:deriv-com/e2e-deriv-com.git
2. Navigate to the project directory:
    ```bash
    cd e2e-deriv-com
3. Install project dependencies:
    ```bash
    npm i
4. Write e2e tests under `cypress/e2e/`

## Cypress Configuration

In `cypress.config.js`, the Cypress configuration includes settings such as:

- `baseUrl`: The base URL for the staging environment.
- `supportFile`: The support file that contains common configurations and custom commands.
- `env`: Environment variables that can be used in your tests.

Make sure to adapt these settings according to your project's needs.

## Contributing

Feel free to contribute to this project by submitting issues, pull requests, or adding new E2E tests for different features.

## License

This project is licensed under the [MIT License](LICENSE).

