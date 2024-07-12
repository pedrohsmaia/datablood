ALTER TABLE events
ADD COLUMN user_id uuid REFERENCES users(id) NOT NULL;
