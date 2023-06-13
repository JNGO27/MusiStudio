CREATE POLICY "Enable actions for users based on user_id" ON "public"."Families"
AS PERMISSIVE FOR ALL
TO public
USING (auth.uid() = user_id)
WITH CHECK ((auth.uid() = user_id))

CREATE POLICY "Enable actions for users based on user_id" ON "public"."Students"
AS PERMISSIVE FOR ALL
TO public
USING (auth.uid() = user_id)
WITH CHECK ((auth.uid() = user_id))

CREATE POLICY "Enable actions for users based on user_id" ON "public"."Students_All_Data"
AS PERMISSIVE FOR ALL
TO public
USING (auth.uid() = user_id)
WITH CHECK ((auth.uid() = user_id))