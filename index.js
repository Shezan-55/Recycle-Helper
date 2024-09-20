require('dotenv').config();
const staticRouter=require("./routes/static")
const userRouter =require("./routes/user")

const path=require("path")
const  express = require('express')
const { connectToMongoB }=require('./connection');

const app = express()

app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

app.use(express.static(path.join(__dirname,'public')))

connectToMongoB(process.env.MONGO_URL)
.then(()=>{console.log("Mongo DB connected")})


app.use(express.urlencoded({extended: false}))
app.use("/",staticRouter)
app.use("/user",userRouter)



app.listen(process.env.PORT, () => console.log(`Server Started at ${process.env.PORT}!`))







