import express from 'express';
import userRoutes from "./subRoutes/UserRoutes"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/users", userRoutes)
app.listen(3000,()=>{
    console.log("runing on 3000")
})
export default app