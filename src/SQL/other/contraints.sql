ALTER TABLE "Students" ADD CONSTRAINT student_name_length CHECK (length(first_name) >= 1 AND length(last_name) >= 1);

ALTER TABLE "Students" ADD CONSTRAINT rate_not_empty_string CHECK (length(rate) >= 1);

ALTER TABLE "Families" ADD CONSTRAINT family_name_length CHECK (length(parent_guardian_first_name_1) >= 1 AND length(parent_guardian_last_name_1) >= 1);