import { useDispatch, useSelector } from "react-redux";

import type { TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "@src/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
