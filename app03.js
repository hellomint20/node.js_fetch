const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let members = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길똥", addr:"마포구"},
];    

app.set("views", __dirname+"/views");
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/get_members", (req, res) => {
    res.json(members)
})

app.use(bodyParser.json());
app.post("/register", (req, res) => {
    console.log("register post : ", req.body); //터미널 { id: '1', pwd: '2', name: '3', addr: '4' } 출력
    members = members.concat(req.body);
    res.json(1);
})

app.delete("/register", (req, res) => {
    console.log("register delete : ", req.body);
    members = members.filter(mem => mem.id !== req.body.id);
    res.json(1);
})

app.get("/search", (req, res) => {
    console.log(req.query); //?로 보냈을 때
    res.json(members.filter(mem => mem.id === req.query.id));
})

app.get("/search/:id", (req, res) => {
    console.log(req.params);    //경로로 보냈을 때
    res.json(members.filter(mem => mem.id === req.params.id));
})

app.listen(3000, console.log("fetch server success~~"))