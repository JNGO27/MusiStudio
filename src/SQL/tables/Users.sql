CREATE TABLE auth.users (
  instance_id UUID NULL,
  id UUID NOT NULL,
  aud CHARACTER VARYING(255) NULL,
  role CHARACTER VARYING(255) NULL,
  email CHARACTER VARYING(255) NULL,
  encrypted_password CHARACTER VARYING(255) NULL,
  email_confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  invited_at TIMESTAMP WITH TIME ZONE NULL,
  confirmation_token CHARACTER VARYING(255) NULL,
  confirmation_sent_at TIMESTAMP WITH TIME ZONE NULL,
  recovery_token CHARACTER VARYING(255) NULL,
  recovery_sent_at TIMESTAMP WITH TIME ZONE NULL,
  email_change_token_new CHARACTER VARYING(255) NULL,
  email_change CHARACTER VARYING(255) NULL,
  email_change_sent_at TIMESTAMP WITH TIME ZONE NULL,
  last_sign_in_at TIMESTAMP WITH TIME ZONE NULL,
  raw_app_meta_data JSONB NULL,
  raw_user_meta_data JSONB NULL,
  is_super_admin BOOLEAN NULL,
  created_at TIMESTAMP WITH TIME ZONE NULL,
  updated_at TIMESTAMP WITH TIME ZONE NULL,
  phone TEXT NULL DEFAULT NULL::CHARACTER VARYING,
  phone_confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  phone_change TEXT NULL DEFAULT ''::CHARACTER VARYING,
  phone_change_token CHARACTER VARYING(255) NULL DEFAULT ''::CHARACTER VARYING,
  phone_change_sent_at TIMESTAMP WITH TIME ZONE NULL,
  confirmed_at TIMESTAMP WITH TIME ZONE NULL,
  email_change_token_current CHARACTER VARYING(255) NULL DEFAULT ''::CHARACTER VARYING,
  email_change_confirm_status SMALLINT NULL DEFAULT 0,
  banned_until TIMESTAMP WITH TIME ZONE NULL,
  reauthentication_token CHARACTER VARYING(255) NULL DEFAULT ''::CHARACTER VARYING,
  reauthentication_sent_at TIMESTAMP WITH TIME ZONE NULL,
  is_sso_user BOOLEAN NOT NULL DEFAULT FALSE,
  deleted_at TIMESTAMP WITH TIME ZONE NULL,
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_phone_key UNIQUE (phone),
  CONSTRAINT users_email_change_confirm_status_check CHECK (
    (email_change_confirm_status >= 0)
    AND (email_change_confirm_status <= 2)
  )
) TABLESPACE pg_default;

CREATE UNIQUE INDEX confirmation_token_idx ON auth.users USING BTREE (confirmation_token)
WHERE (confirmation_token::TEXT !~ '^[0-9 ]*$'::TEXT) TABLESPACE pg_default;

CREATE UNIQUE INDEX email_change_token_current_idx ON auth.users USING BTREE (email_change_token_current)
WHERE (email_change_token_current::TEXT !~ '^[0-9 ]*$'::TEXT) TABLESPACE pg_default;

CREATE UNIQUE INDEX email_change_token_new_idx ON auth.users USING BTREE (email_change_token_new)
WHERE (email_change_token_new::TEXT !~ '^[0-9 ]*$'::TEXT) TABLESPACE pg_default;

CREATE UNIQUE INDEX reauthentication_token_idx ON auth.users USING BTREE (reauthentication_token)
WHERE (reauthentication_token::TEXT !~ '^[0-9 ]*$'::TEXT) TABLESPACE pg_default;

CREATE UNIQUE INDEX recovery_token_idx ON auth.users USING BTREE (recovery_token)
WHERE (recovery_token::TEXT !~ '^[0-9 ]*$'::TEXT) TABLESPACE pg_default;

CREATE UNIQUE INDEX users_email_partial_key ON auth.users USING BTREE (email)
WHERE (is_sso_user = FALSE) TABLESPACE pg_default;

CREATE INDEX IF NOT EXISTS users_instance_id_email_idx ON auth.users USING BTREE (instance_id, LOWER((email)::TEXT)) TABLE
