import app from "./controller/app"
import { userRouter } from "./endpoints/Router"

app.use('/user', userRouter)