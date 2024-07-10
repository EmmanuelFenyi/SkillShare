# Getting Started with Skillshare Web Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Development Report](#development-report)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Description
Skillshare is a full-stack web application that allows users to create profiles, send messages, and give feedback. This project demonstrates a range of skills in web development, including front-end design with React, back-end development with Node.js and Express, and database management with MongoDB.

## Technologies
- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **HTTP Client**: Axios
- **Styling**: CSS
- **Version Control**: GitHub

## Features
- **User Authentication**: Register, login, and manage sessions with JWT.
- **Profile Management**: Create and update user profiles.
- **Messaging**: Send and receive messages.
- **Feedback**: Submit and view feedback.

## Setup
1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/skillshare.git
    cd skillshare
    ```

2. **Install backend dependencies:**
    ```bash
    cd server
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd client
    npm install
    ```

4. **Create a `.env` file in the backend directory with the following variables:**
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the backend server:**
    ```bash
    cd server
    npm run dev
    ```

6. **Run the frontend development server:**
    ```bash
    cd client
    npm start
    ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Usage
- **Register**: Create a new account.
- **Login**: Access your account.
- **Profile**: View and edit your profile information.
- **Messages**: Send and receive messages.
- **Feedback**: Submit feedback about the platform or users.

## API Endpoints

### User Routes
- `POST /api/users`: Register a new user
- `POST /api/users/login`: Login a user
- `GET /api/users/profile`: Get user profile (requires JWT)

### Messages Routes
- `GET /api/messages`: Get all messages
- `POST /api/messages`: Send a new message

### Feedback Routes
- `GET /api/feedback`: Get all feedback
- `POST /api/feedback`: Submit new feedback

## Development Report

### Successes
- Implemented full-stack application with React and Node.js.
- User authentication and authorization with JWT.
- Responsive design with clean UI/UX.

### Challenges
- Debugging API endpoint issues.
- Managing state and props in React efficiently.
- Ensuring proper error handling.

### Lessons Learned
- Deepened understanding of React and state management.
- Improved backend development skills with Node.js and Express.
- Importance of version control and regular commits.

## Future Enhancements
- **Real-time Messaging**: Implement WebSocket for real-time communication.
- **Notifications**: Add user notifications for new messages and feedback.
- **Feedback System**: Enhance with ratings and comments.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.
