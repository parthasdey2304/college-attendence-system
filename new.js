const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Express App is Running! HOMEPAGE </h1>")
})

app.get('/admin/dashboard', (req, res) => {
    res.send("<h1>Dashboard</h1>")
})

app.listen(3000, () => {
    console.log("[INFO] Express app running on port 3000!")
})