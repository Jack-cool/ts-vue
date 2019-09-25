import { getData, postData } from "@/utils/request";

export const getUserInfo = (data: any) => postData("/users/info", data);

export const login = (data: any) => postData("/users/login", data);

export const logout = () => postData("/users/logout");