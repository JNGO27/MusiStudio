import { useState, useEffect } from "react";

import { supabaseConfig } from "@src/lib/supabaseConfig";

const useIsAtLimit = () => {
  const [isAtLimit, setIsAtLimit] = useState(false);

  useEffect(() => {
    async function checkIsAtLimit() {
      const { data: limit } = await supabaseConfig.rpc(
        "check_student_limit_client",
      );
      setIsAtLimit(limit);
    }

    checkIsAtLimit();
  }, []);

  return isAtLimit;
};

export default useIsAtLimit;
