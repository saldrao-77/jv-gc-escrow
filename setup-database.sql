-- Create jv_gc_e table if it doesn't exist
CREATE TABLE IF NOT EXISTS jv_gc_e (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  properties VARCHAR(255),
  form_source VARCHAR(50) NOT NULL,
  source VARCHAR(50) NOT NULL,
  url TEXT,
  user_agent TEXT,
  ip_address VARCHAR(50),
  utm_source VARCHAR(255),
  utm_medium VARCHAR(255),
  utm_campaign VARCHAR(255),
  device_type VARCHAR(50),
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_jv_gc_e_email ON jv_gc_e(email);

-- Create index on form_source for filtering
CREATE INDEX IF NOT EXISTS idx_jv_gc_e_source ON jv_gc_e(form_source);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_jv_gc_e_date ON jv_gc_e(submitted_at);

-- Create index on device_type for filtering
CREATE INDEX IF NOT EXISTS idx_jv_gc_e_device_type ON jv_gc_e(device_type);
