

# Tally Counter App

The Tally Counter App is a simple web application built with React and Redux Toolkit. It allows users to create and manage counters, increment or decrement their values, and log in using Google authentication.

## Features

- Add counters with customizable names and start values.
- Increment, decrement, and reset the values of each counter.
- Log in using Google authentication.
- View and manage counters based on user authentication.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Firebase Authentication](#firebase-authentication)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- Firebase project with Google authentication enabled

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GauravTheBeginner/tally-counter-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tally-counter-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a Firebase project and configure authentication.
   - Visit the [Firebase Console](https://console.firebase.google.com/).
   - Add a new project and configure it.
   - Enable Google authentication in the "Authentication" section.


5. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Add a counter by entering its name and start value, then click "Add Counter."
- Manage counters by incrementing, decrementing, or resetting their values.
- Log in using the "Sign In with Google" button. You can see your email address once logged in.
- Log out using the "Logout" button.

## Firebase Authentication

To enable Firebase Authentication, follow these steps:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. In the "Authentication" section, enable Google sign-in.
3. Obtain and Update your Firebase configuration (API key, authDomain, projectId, etc.) from the project settings.


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to add more sections or details based on your project's needs.