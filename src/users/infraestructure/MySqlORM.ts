import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

export class MySqlORM implements UserRepository{

    saveUser(): User {
        return {
            id:"sdq13413434",
            username: "user",
            password: "hash",
            isActive: true,
            timestamp: new Date()
        }
    }
    findUserById(id:String): User | {}{
        if (id=="111") return  {
            id:"sdq13413434",
            username: "user",
            password: "hash",
            isActive: true,
            timestamp: new Date()
        }
        else return {}
    }
}