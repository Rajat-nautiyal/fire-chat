# ChatApp

A real-time chat application built using React and Firebase, deployed using Firebase hosting.

## Features

- **Real-time Messaging:** real-time communications
- **User Authentication:** Secure sign-in and sign-out functionality using Firebase Authentication techniques.
  
## Demo

Check out the live demo https://fir-chatapp-82a43.web.app/

## Getting Started

### Prerequisites

- Node.js
- Firebase Account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Rajat-nautiyal/ChatApp.git
    cd ChatApp
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a Firebase project and set up Firebase Authentication and Firestore.

4. Configure Firebase in your project:
    - Create a file named `.env` in the root directory.
    - Add your Firebase configuration to the `.env` file:
        ```
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

### Running the App

1. Start the development server:
    ```bash
    npm start
    ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project is deployed using Firebase Hosting. Follow these steps to deploy your own version:

1. Install Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```

2. Log in to Firebase:
    ```bash
    firebase login
    ```

3. Initialize Firebase in your project:
    ```bash
    firebase init
    ```

4. Build the project:
    ```bash
    npm run build
    ```

5. Deploy to Firebase:
    ```bash
    firebase deploy
    ```

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

Open Source
