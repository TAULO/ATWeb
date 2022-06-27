const express = require("express")
const app = express()

const port = 3000

app.listen(() => {
    console.log("Running server on ", port)
})