import { useEffect, useCallback } from "react";

import type { User } from "@supabase/gotrue-js";

import { useAppDispatch } from "@src/redux";
import {
  setUserEmail,
  setUserAvatarUrl,
} from "@src/redux/features/generalGlobalData";

type Props = { user: User } | undefined;

const useSetProfileData = (data: Props) => {
  const dispatch = useAppDispatch();

  const getUserData = useCallback(async () => {
    const email = data?.user?.email;
    const avatarUrl = data?.user?.user_metadata?.avatar_url;

    dispatch(setUserEmail(email));

    if (avatarUrl) {
      dispatch(setUserAvatarUrl(avatarUrl));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (data) {
      getUserData();
    }

    return () => {};
  }, [data, getUserData]);
};

export default useSetProfileData;
