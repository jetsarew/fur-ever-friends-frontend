"use client";

import { UpdateUserWithRoleDto } from "@/dto/auth.dto";
import { userService } from "@/services/user.service";
import { setAuthUser } from "@/store/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser } from "@/store/user/user.slice";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const userRecommendStore = useAppSelector((state) => state.user.user);
  const [hasFetched, setHasFetched] = useState<boolean>(false);


  const fetchAllUsers = async () => {
    return await userService.getAllUser();
  };

  const {
    data: userListQueryData,
    isLoading,
    refetch,
  } = useQuery("users", fetchAllUsers, {
    refetchOnWindowFocus: false,
    enabled: !hasFetched,
  });

  useEffect(() => {
    if (userListQueryData) {
      dispatch(setUser(userListQueryData));
      setHasFetched(true);
    }
  }, [userListQueryData, dispatch]);
  const updateUserMutation = useMutation(
    async (updateUserRequest: UpdateUserWithRoleDto) => {
      const { userId, ...rest } = updateUserRequest;
    
      if(!userId) return;

      const response = await userService.updateUser(userId, rest);
      dispatch(setAuthUser(response));
      return response;
    },
  );

  return {
    user,
    updateUserMutation,
    isLoading,
    refetch,
    userRecommendStore,
  };
};
