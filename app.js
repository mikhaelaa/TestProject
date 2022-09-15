const express = require('express')

const app = express();

app.get("/test/:student/:age", (req, res) => {
    res.send(req.params.student + req.params.age)
})

/* app.get("/numbers", (req, res, next) => {
    console.log("executed the middleware")
    next;
})

app.get("/numbers", (req, res) => {
    console.log("executed the handler...")
}) */

app.listen(3000, (err) => {
    if(!err) console.log("Server is running at port 3000...")

})