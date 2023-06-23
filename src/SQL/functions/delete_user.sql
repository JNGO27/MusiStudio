CREATE OR REPLACE FUNCTION delete_user() RETURNS void as $$
  BEGIN
    DELETE FROM "auth".users WHERE id = auth.uid();
  END;
$$ LANGUAGE plpgsql SECURITY DEFINER;