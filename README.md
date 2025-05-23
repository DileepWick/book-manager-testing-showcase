# Book Management System

This project is a full-stack web application built primarily to **showcase comprehensive testing skills**. While it provides a functional book management system with a user interface to view, add, and potentially update or delete books, the core focus is on demonstrating a robust testing strategy across both the frontend and backend.

## Features

*   View a list of existing books.
*   Add new books to the system.
*   (Potentially) Edit book details.
*   (Potentially) Delete books from the system.

## Emphasis on Testing

A key aspect of this project is the extensive test suite designed to ensure the reliability and quality of the application. Various types of testing are implemented to cover different layers of the application.

## Technologies Used

**Frontend:**

*   React
*   Vite
*   CSS

**Backend:**

*   Node.js
*   Express
*   (Database - specify which one, e.g., MongoDB, PostgreSQL)

**Other:**

*   Jest (for testing)

## Setup Instructions

1.  **Clone the repository:**
```
bash
    git clone <repository_url>
    cd book-management-system
    
```
2.  **Install dependencies for the backend:**
```
bash
    cd server
    npm install
    
```
3.  **Install dependencies for the frontend:**

```
bash
    cd ../client
    npm install
    
```
4.  **Set up the database:**

    *   Ensure you have the required database installed and running.
    *   Update the database configuration in `server/config/db.js` with your database credentials and connection details.
    *   (If applicable) Run any database migration scripts.

5.  **Start the backend server:**
```
bash
    cd ../server
    npm start
    
```
6.  **Start the frontend development server:**
```
bash
    cd ../client
    npm run dev
    
```
7.  Open your web browser and navigate to `http://localhost:5173` (or the address provided by Vite).

## Testing

The project includes comprehensive tests for both the frontend and backend.

**Backend Tests:**

To run backend tests:
```
bash
cd server
npm test
```
This will execute performance tests, database integration tests, and functional API tests located in the `server/tests` directory.

**Frontend Tests:**

To run frontend tests:
```
bash
cd client
npm test
```
This will execute tests for the React components located in the `client/src/components/tests` directory.
