Online Book Store SB
A full-stack online bookstore application built with Spring Boot (backend) and React (frontend).
This project supports user registration/login, book catalog browsing, adding books to cart, and placing orders that are stored in a MySQL database.

Features
User registration and login
Book catalogue display
Add books to cart
Update cart quantity
Remove items from cart
Place order
Order data stored in MySQL using Spring Data JPA
Tech Stack
Frontend: React.js, Bootstrap, React Router
Backend: Spring Boot, Spring Web, Spring Data JPA
Database: MySQL
Build Tools: Maven, npm
Project Structure

Prerequisites
Before running the project, make sure you have:

Java 17+
Maven
Node.js and npm
MySQL installed and running
Database Setup
Create a MySQL database named:


Update the database credentials in:


Example:


Run Backend
Open a terminal in the backend folder:


On Windows:


Run Frontend
Open a terminal in the frontend folder:


Then open:


Default Flow
Register a new user
Login with the registered account
Browse books in the catalogue
Add books to cart
Open cart and click “Place Order”
Notes
Orders are saved in the MySQL orders table.
Each order item is stored in the order_items table.
The project currently uses local storage for cart persistence on the frontend.
GitHub
This project can be pushed to GitHub using normal Git commands.

License
This project is for academic/demo purposes.

