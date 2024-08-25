import { ApiHeaders } from "./api-utils";
const MSG_ERROR_NO_ID = "User ID is required";
const MSG_ERROR_NO_NAME = "User Name is required";

export const UserApi = {
  async getAllUsers(): Promise<IUser[]> {
    const url: string = `http://localhost:8080/api/v1/user`;
    const response: IUser[] = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
  async getUserById(userId: number): Promise<IUser> {
    const url: string = `http://localhost:8080/api/v1/user/${userId}`;
    const response: IUser = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async postUser(user: IUser): Promise<IUser | null> {
    if (!user.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    const url: string = `http://localhost:8080/api/v1/user`;
    const response: IUser = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },

  async putUser(user: IUser): Promise<IUser | null> {
    if (!user.id) {
      console.error(MSG_ERROR_NO_ID);
      return null;
    }
    if (!user.name) {
      console.error(MSG_ERROR_NO_NAME);
      return null;
    }
    const url: string = `http://localhost:8080/api/v1/user`;
    const response: IUser = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: ApiHeaders.basicPostHeader(),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    return response;
  },
};

export interface IUser {
  id?: number;
  name: string;
}
