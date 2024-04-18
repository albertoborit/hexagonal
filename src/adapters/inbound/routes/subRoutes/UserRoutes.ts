import express from "express"
const userRoutes = express.Router()
import { getUserById } from "../../controllers/userController"
userRoutes.get("/:id", async (req: express.Request, res: express.Response) => {
    const response = await getUserById(req.params.id)
    res.json(response)
})
export default userRoutes