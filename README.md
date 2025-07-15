# Spidr Air Fryer Form 

This is a React-based interest form built as part of the coding challenge for the Full-Stack Software Engineer (Entry-Level) role at Spidr Design.

While the form's purpose is fictional, the goal of this challenge was to demonstrate clean UI implementation with attention to brand styling, and thoughtful code design.

## Live Demo

[Link for the deployed app](https://mpres0408.github.io/spidr-airfryer-form)

## Features

- Responsive, single-page layout styled to match [Spidr Design](https://spidr.design/)
- Custom form inputs:
  - First Name
  - Last Name
  - Phone Number
  - Email Address
  - Air Fryer Price Guess ($)
  - 16-digit Spidr Secret PIN (formatted as `####-####-####-####`)
- Live formatting and input validation
- Toggle visibility for the PIN field (Show/Hide)
- PIN in console log can be masked on submit by uncommenting 2 lines of code in app.js (e.g., `****-****-****-****`)
- Auto-clears form after submission

## Technologies Used

- React
- CSS
- GitHub Pages

## Validation

The form includes client-side validation for:
- Required fields
- Proper email format
- Proper 16-digit PIN format

## Running Locally

```bash
npm install
npm start