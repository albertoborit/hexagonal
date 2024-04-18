import { UserUseCase } from "@src/users/application/UserCaseUse"
import { MySqlORM } from "@src/users/infraestructure/MySqlORM"

const relationalORM: MySqlORM  = new MySqlORM()
const getUserById = async (id:string) => {
    const userUseCase: UserUseCase = new UserUseCase(relationalORM)
    const response = await userUseCase.findUserById(id)
    return response
}

export {
    getUserById
}