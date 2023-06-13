CREATE OR REPLACE FUNCTION total_hours_practiced()
RETURNS TABLE(student_id BIGINT, minutes_practiced BIGINT) AS $$
BEGIN
  RETURN QUERY 
    SELECT "Practice_Log".student_id, SUM("Practice_Log".minutes_practiced)
    FROM "Practice_Log"
    WHERE "Practice_Log".date BETWEEN CURRENT_DATE - INTERVAL '7 days' AND CURRENT_DATE
    GROUP BY "Practice_Log".student_id;
END;
$$ LANGUAGE plpgsql;
