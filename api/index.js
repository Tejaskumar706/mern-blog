import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('mongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })

const app = express();
app.use(express.json())
const PORT = 3000;

app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`)
})

app.get('/test', (req, res) => {
    res.json({ message: 'API is working' })
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRoutes)