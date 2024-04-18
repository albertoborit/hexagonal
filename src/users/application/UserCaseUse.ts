import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";


export class UserUseCase{
    constructor(private userRepository:UserRepository){
    }

    saveUser(): User {
        return this.userRepository.saveUser()
    }
    findUserById(id:String): User | {} {
        return this.userRepository.findUserById(id)
    }
    
}