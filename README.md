# GenzeeTech

GenzeeTech is a modern business website built with React + Vite on the frontend and Spring Boot on the backend. It includes a marketing landing page, service pages, blog and technology sections, contact form submission, and email notifications.

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion
- Backend: Java, Spring Boot, MySQL
- Email: SMTP via Gmail App Password

## Project Structure

- `src/` – frontend application
- `backend/` – Java Spring Boot API
- `public/` – static public assets
- `backend/.env.example` – backend environment variable template

## Local Development

### 1) Install frontend dependencies

```bash
npm install
```

### 2) Configure backend environment

Copy the example file and fill in your real local values:

```bash
cp backend/.env.example backend/.env
```

Then update the values in `backend/.env` with your own MySQL and Gmail credentials. Do not commit `.env` files.

### 3) Start frontend

```bash
npm run dev
```

### 4) Start backend

```bash
cd backend
mvn spring-boot:run
```

## Security

- Never commit real credentials to Git
- Use `.env` files only locally
- For Gmail, use an App Password instead of your normal account password
- Keep secrets in environment variables or your deployment platform secret manager

## Production Notes

Set the frontend API URL and backend CORS origin according to your deployment environment, and keep database and email credentials in a secure hosting environment.

## License

This project is for GenzeeTech website development and internal business use.
