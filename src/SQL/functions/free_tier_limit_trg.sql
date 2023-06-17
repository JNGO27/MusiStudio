CREATE OR REPLACE FUNCTION check_student_limit_trg() RETURNS TRIGGER AS $$
BEGIN
  IF (public.check_student_limit_server()) THEN
      RAISE EXCEPTION 'TIER LIMIT: Cannot insert new data';
    END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

