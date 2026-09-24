# GenzeeTech

GenzeeTech is a business website built with a React frontend and a Java Spring Boot backend. The project includes a landing page, service pages, blog and technology sections, contact form handling, and email notifications.

## What this project does

This website is designed to present GenzeeTech as a digital services company. It shows company information, services, case studies, technology stack, blog content, and a contact section where visitors can send inquiries.

When a user submits the contact form:

1. The frontend collects the form data
2. The backend receives the request
3. The message is saved in MySQL
4. An email is sent through Gmail SMTP
5. The frontend receives a success or error response

## Tech Stack

- Frontend: React, Vite, JavaScript, CSS
- Backend: Java, Spring Boot
- Database: MySQL
- Email: Gmail SMTP using App Password

## Project Structure

- `frontend/` – React + Vite frontend app
- `frontend/src/` – page and component files
- `frontend/public/` – static assets and public files
- `frontend/index.html` – Vite entry file
- `backend/` – Spring Boot backend project
- `backend/src/main/java/` – Java source code
- `backend/src/main/resources/` – application configuration
- `backend/.env.example` – example environment variables for backend secrets
- `README.md` – project overview and setup

## Frontend overview

The frontend is responsible for the part users see and interact with. It contains:

- landing page sections
- service descriptions
- technology showcase
- blog links
- testimonials and pricing blocks
- contact form UI

The frontend communicates with the backend through API requests.

## Backend overview

The backend handles the server-side logic. It includes:

- API endpoints for contact submission
- data validation
- database storage
- email sending logic
- CORS configuration for frontend access

## Local setup

### 1) Install frontend dependencies

```bash
cd frontend
npm install
```

### 2) Run the frontend

```bash
cd frontend
npm run dev
```

### 3) Configure backend environment variables

Create a local backend environment file:

```bash
cd backend
cp .env.example .env
```

Then update the values in `backend/.env` with your own MySQL and Gmail information. Do not commit real credentials to Git.

### 4) Run the backend

```bash
cd backend
mvn spring-boot:run
```

## Security

This project keeps sensitive values out of the repository.

- Never commit real passwords or API secrets
- Keep credentials in local `.env` files
- Use Gmail App Password instead of the normal Google password
- Store production values in environment variables or a secret manager

## Production note

For deployment, set the proper frontend API URL and backend CORS allowed origins. Keep database and email credentials in a secure hosting environment rather than in code.

## License

This project is intended for GenzeeTech website development and business use.
