## Task Manager Backend

Task Manager

## Description

Task Manager is a web application designed to help users manage their tasks efficiently. It allows users to create, update, delete, and view tasks. The application is built using Node.js, Express, Sequelize, and MySQL.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MySQL (v5.7 or later)

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/hemkeshkantawala11/task-manager.git
    cd task-manager
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up the database:**

    - Create a MySQL database named `Task_Manager`.
    - Update the `.env` file with your MySQL root password and other environment variables.

4. **Run database migrations:**

    ```sh
    npx sequelize-cli db:migrate
    ```

## Configuration

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```dotenv
JWT_SECRET="ThisSecretNeedsToBeSecret"
MYSQLROOTPASSWORD="your_mysql_root_password"
DB_USER="root"
DB_PASSWORD="your_mysql_root_password"
DB_NAME="Task_Manager"
DB_HOST="localhost" 
PORT=3000
```
## Usage

### Running the Application Locally

- **Start the server:**

    ```sh
    npm start
    ```

- **Access the application:** Open your browser and navigate to `http://localhost:3000`.

### Using the Application

- **Register a new user:** Use the `/api/register` endpoint to create a new user account.
- **Login:** Use the `/api/login` endpoint to authenticate and receive a JWT token.
- **Manage tasks:** Use the provided API endpoints to create, read, update, and delete tasks.

## API Endpoints

### Authentication

- **POST /api/register:** Register a new user.
    - **Request Body:** `{ "username": "your_username", "password": "your_password" }`
    - **Response:** `{ "message": "User registered successfully" }`

- **POST /api/login:** Login a user and get a JWT token.
    - **Request Body:** `{ "username": "your_username", "password": "your_password" }`
    - **Response:** `{ "token": "your_jwt_token" }`

### Tasks

- **GET /api/tasks:** Get all tasks.
    - **Headers:** `{ "Authorization": "Bearer your_jwt_token" }`
    - **Response:** `[ { "id": 1, "title": "Task 1", "description": "Description 1", "status": "Pending" }, ... ]`

- **POST /api/tasks:** Create a new task.
    - **Headers:** `{ "Authorization": "Bearer your_jwt_token" }`
    - **Request Body:** `{ "title": "New Task", "description": "Task description", "status": "Pending" }`
    - **Response:** `{ "message": "Task created successfully", "task": { "id": 1, "title": "New Task", "description": "Task description", "status": "Pending" } }`

- **GET /api/tasks/:id:** Get a task by ID.
    - **Headers:** `{ "Authorization": "Bearer your_jwt_token" }`
    - **Response:** `{ "id": 1, "title": "Task 1", "description": "Description 1", "status": "Pending" }`

- **PUT /api/tasks/:id:** Update a task by ID.
    - **Headers:** `{ "Authorization": "Bearer your_jwt_token" }`
    - **Request Body:** `{ "title": "Updated Task", "description": "Updated description", "status": "Completed" }`
    - **Response:** `{ "message": "Task updated successfully", "task": { "id": 1, "title": "Updated Task", "description": "Updated description", "status": "Completed" } }`

- **DELETE /api/tasks/:id:** Delete a task by ID.
    - **Headers:** `{ "Authorization": "Bearer your_jwt_token" }`
    - **Response:** `{ "message": "Task deleted successfully" }`

## Testing

### Running Tests

- **Run integration tests:**

    ```sh
    npm test
    ```

### Writing Tests

- **Unit Tests:** Write unit tests for individual functions and modules.
- **Integration Tests:** Write integration tests to test the interaction between different modules and components.
- **End-to-End Tests:** Write end-to-end tests to test the entire application flow from the user's perspective.
