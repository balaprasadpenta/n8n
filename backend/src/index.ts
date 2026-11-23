import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

const app = express()
app.use(express.json())

async function main(){
    await mongoose.connect(process.env.MONGODB_URI!)
 console.log("mongodb connected")

    app.listen(process.env.PORT || 3000, () => {
    console.log("server is listening on port 3000")
})
}

main().catch(console.error)