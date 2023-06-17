CREATE TRIGGER free_tier_limit_students_trigger
AFTER INSERT ON "Students"
FOR EACH ROW EXECUTE PROCEDURE free_tier_limit_trg();

CREATE TRIGGER free_tier_limit_families_trigger
BEFORE INSERT ON "Families"
FOR EACH ROW EXECUTE PROCEDURE free_tier_limit_trg();

CREATE TRIGGER free_tier_limit_students_all_data_trigger
BEFORE INSERT ON "Students_All_Data"
FOR EACH ROW EXECUTE PROCEDURE free_tier_limit_trg();