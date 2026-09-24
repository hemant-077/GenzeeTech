# GenzeeTech Spring Boot backend

The API accepts the frontend contact form at `POST /contact`, saves it to MySQL, and sends a notification email.

## Configure

1. Create a MySQL user/database, or retain `createDatabaseIfNotExist=true` in `DB_URL`.
2. Copy `.env.example` values into your shell/environment. Do not commit credentials.
3. For Gmail, enable 2-Step Verification and create an App Password for `MAIL_PASSWORD`.

## Run

```bash
cd backend
mvn spring-boot:run
```

Set the frontend's `VITE_API_URL=http://localhost:8080`. For production, set this to the deployed backend URL and set `CORS_ALLOWED_ORIGINS` to the frontend origin.

Example request:

```bash
curl -X POST http://localhost:8080/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"I would like a quote."}'
```
