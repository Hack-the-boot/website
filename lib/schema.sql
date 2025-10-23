-- Create pre_registrations table
CREATE TABLE IF NOT EXISTS pre_registrations (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_pre_registrations_email ON pre_registrations(email);

-- Create index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_pre_registrations_created_at ON pre_registrations(created_at);
