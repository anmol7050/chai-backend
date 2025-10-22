import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})
connectDB()
.then( ()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(` Server is running at port : ${process.env.PORT}`)
  })
})
.catch((error)=>{
  console.log("MONGO DB connection failed !!! ", error)
})






// Always use ; before the eef function line 3
/*
;( async ()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
  } catch (error) {
    console.error("ERROR: ", error)
    throw error
  }
})()
  */