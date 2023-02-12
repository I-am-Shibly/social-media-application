const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require("cors")
const multer = require('multer')
const path = require("path")

const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/posts')

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5001

require('dotenv').config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));

// middlewares
app.use(express.json())
// app.use(helmet())
// app.use(morgan('common'))
app.use(cors())
app.use("/images", express.static(path.join(__dirname, "public/images")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        const fileName = req.body.name || file.originalname;
        cb(null, fileName);
    }
})

const upload = multer({storage}) 
app.post('/api/upload', upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File was uploaded successfully.")
    } catch (err) {
        console.log(err);
    }
})

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(PORT, ()=> {console.log(`Server running on port ${PORT}`);})