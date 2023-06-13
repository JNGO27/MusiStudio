CREATE OR REPLACE FUNCTION total_days_practiced()
RETURNS TABLE(student_id BIGINT, date BIGINT) AS $$
BEGIN
  RETURN QUERY 
    SELECT "Practice_Log".student_id, COUNT(DISTINCT "Practice_Log".date) AS days_practiced
    FROM "Practice_Log"
    WHERE "Practice_Log".date BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE
    GROUP BY "Practice_Log".student_id;
END;
$$ LANGUAGE plpgsql;
