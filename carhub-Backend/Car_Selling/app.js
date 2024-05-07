const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors());

const userRoute = require("./routes/user")
const adminRoute = require("./routes/admin")
const carRoute = require("./routes/car")
const imageRoute = require("./routes/image")
const checkoutRoute = require("./routes/checkout")

app.use(bodyParser.json())

app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.use('/car',carRoute)
app.use('/image',imageRoute)
app.use('/checkout',checkoutRoute)

const port = 3000
app.listen(port,()=>{
            console.log(`Port is running on http://localhost:${port}`);
})