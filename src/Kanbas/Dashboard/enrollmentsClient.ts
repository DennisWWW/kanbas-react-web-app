import axios from "axios";
import { USERS_API } from "../Account/client";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
 };
 export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}/courses/${courseId}`);
  return response.data;
 };
 export const findMyEnrollments = async (userId: any) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/${userId}`)
  return data;
};