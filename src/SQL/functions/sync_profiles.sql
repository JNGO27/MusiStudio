CREATE OR REPLACE FUNCTION sync_profiles() 
RETURNS TRIGGER AS
$$
BEGIN
    INSERT INTO public.Profiles (user_id)
    VALUES (NEW.id);
    
    RETURN NEW;
END
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER sync_profiles_trigger 
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION sync_profiles();
