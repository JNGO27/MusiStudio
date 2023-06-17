CREATE OR REPLACE FUNCTION check_student_limit_client() RETURNS BOOLEAN AS $$
BEGIN
 RETURN ((
   (SELECT COUNT(*) FROM "Students" WHERE user_id = auth.uid())
   = 
   (SELECT max_students FROM "Tiers" WHERE id = (SELECT tier FROM "Profiles" WHERE user_id = auth.uid()))
 ));
END;
$$ LANGUAGE plpgsql;
