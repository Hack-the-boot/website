# Hack The Boot - Backend Setup Guide

## 🚀 Production Setup Steps

### 1. **Vercel Postgres Database Setup**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Create Postgres database
vercel storage create postgres --name hacktheboot-db
```

### 2. **Database Schema Setup**
Run the SQL commands from `lib/schema.sql` in your Vercel Postgres database:
- Go to Vercel Dashboard → Storage → Your Database → Query
- Copy and paste the contents of `lib/schema.sql`

### 3. **Environment Variables**
Add these to your Vercel project settings:
```
POSTGRES_URL=your_postgres_connection_string
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url
POSTGRES_USER=your_username
POSTGRES_HOST=your_host
POSTGRES_PASSWORD=your_password
POSTGRES_DATABASE=your_database
```

### 4. **Domain Setup (hacktheboot.it)**
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `hacktheboot.it` as a custom domain
3. Update your DNS records as instructed by Vercel
4. SSL certificate will be automatically provisioned

### 5. **Deploy**
```bash
# Deploy to production
vercel --prod

# Or push to main branch (if connected to GitHub)
git push origin main
```

## 🔧 Local Development

### Install Dependencies
```bash
npm install
```

### Run Database Locally (Optional)
```bash
# Install Vercel CLI
npm i -g vercel

# Start local development
vercel dev
```

## 📊 Data Management

### View Submissions
- Access Vercel Dashboard → Storage → Your Database
- Query: `SELECT * FROM pre_registrations ORDER BY created_at DESC;`

### Export Data
```sql
-- Export all pre-registrations
SELECT full_name, email, created_at 
FROM pre_registrations 
ORDER BY created_at DESC;
```

## 🛡️ Security Features

- ✅ Email validation
- ✅ Duplicate email prevention
- ✅ Input sanitization
- ✅ Error handling
- ✅ Rate limiting (Vercel handles this)

## 📈 Analytics

The API also provides a GET endpoint to check total registrations:
```
GET /api/pre-register
```

Returns: `{"total": 123}`
