# Spidr Air Fryer Form 🔥

This is a React-based interest form built as part of the coding challenge for the Full-Stack Software Engineer (Entry-Level) role at Spidr Design.

While the form's purpose is fictional (no air fryer is actually for sale 😄), the goal of this challenge was to demonstrate clean UI implementation, attention to brand styling, and thoughtful code design.

## 🚀 Live Demo

🔗 [View the deployed app](https://mpres0408.github.io/spidr-airfryer-form)

## 🧩 Features

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
- Masked PIN in console log on submit (e.g., `****-****-****-****`)
- Auto-clears form after submission

## 🛠️ Technologies Used

- React (CRA)
- CSS (custom, no frameworks)
- GitHub Pages (deployment)

## 🧪 Validation

The form includes client-side validation for:
- Required fields
- Proper email format
- Proper 16-digit PIN format

## 📦 Running Locally

```bash
npm install
npm start