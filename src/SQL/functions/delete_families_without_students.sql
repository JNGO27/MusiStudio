CREATE OR REPLACE FUNCTION delete_families_without_students()
RETURNS void AS $$
BEGIN
  DELETE FROM "Families"
  WHERE "Families".id IN (
    SELECT "Families".id
    FROM "Families"
    LEFT JOIN "Students" ON "Families".id = "Students".family_id
    WHERE "Students".id IS NULL
  );
END;
$$ LANGUAGE plpgsql;
