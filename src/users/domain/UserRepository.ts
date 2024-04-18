import { User } from "./User";

export interface UserRepository {
    saveUser(): User,
    findUserById(id:String): User | {}
}