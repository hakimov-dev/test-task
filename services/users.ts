import { api } from "@/api";

export default class UsersService {
  getUsers() {
    return api.get("/users");
  }

  getUserByID(id: number) {
    return api.get(`/users/${id}`);
  }
}
