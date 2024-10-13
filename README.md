# Saucedemo Test with Playwright

## Overview

This project is a test automation suite for the Saucedemo application using Playwright. The test framework is built on the Page Object Model (POM) design pattern, promoting code reusability and maintainability.

## Features

- Utilizes Playwright for browser automation.
- Implements the Page Object Model for better structure and readability.
- Includes various selectors for interacting with the Saucedemo application.

## Project Structure

- **tests/**: Contains test scripts.
- **pages/**: Contains page object classes.

## Selectors Used

The following selectors are utilized in the test automation, categorized by type:

- **XPath Selector**: 
  - `this.product_list = '//*[@id="inventory_container"]/div/div/div/div/div/div/a';`: XPath for the product list.

- **Data attribute Selectors**:
  - `this.add_to_cart = '[data-test="add-to-cart"]';`: selector for the "Add to Cart" button.
  - `this.remove_from_cart = '[data-test="remove"]';`: selector for the "Remove from Cart" button.
  - `this.cart = '[data-test="shopping-cart-link"]';`: selector for the shopping cart link.
 
- **CSS Selectors**:
  - `this.burger_menu_button = '#react-burger-menu-btn';`: CSS selector for the burger menu button.

- **Role-based Selector**:
  - `this.login_button = page.getByRole("button", { name: "LOGIN" });`: Selector based on the role and accessible name for the login button.

- **Text Selector**:
  - `this.success_message = 'text=Thank you for your order';`: Selector for the success message after an order is placed.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- Playwright

### Installation and Running Tests

1. Clone the repository:
   ```bash
   git clone [https://github.com/BlineraHysenaj/SauceDemo_Task.git]

2. Install Playwright:
   ```bash
   npm i playwright@latest
   
3. Run test:
   ```bash
   npx playwright test

4. Debug test:
   ```bash
   npx playwright test --project=chromium --debug
