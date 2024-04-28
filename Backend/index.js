import app from "./server.js"
import mongoose from "mongoose";
import node from "./api/nodes.route.js"


mongoose.connect("mongodb+srv://Sanket:nhp@cluster0.0pyou.mongodb.net/EduBuzz");


app.get('/api/register', (res, req)=> {
    res.json({status: ok})
    console.log(res.body)
    res.send(JSON.stringify({nhp : "nhp"}))
})

app.get('/api', (req, res) => {
    res.send("Done");
})



// port = process.env.PORT || 5000
app.listen(4000, () => {
    console.log('listening on port 4000')
})