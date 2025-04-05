const mongoosh = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs")

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.get("/chats", async (req, res) => {

     let chats = await chat.find();
     console.log(chats);
     // res.send("all chats are working")
     res.render("allchats.ejs", { chats })
})


async function main() {
     await mongoosh.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
     .then((res) => {
          console.log("connection established of mongodb");
     })
     .catch((err) => {
          console.log(err);
     })

app.get("", (req, res) => {

     res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.get("/addchats", (req, res) => {
     res.render('add.ejs');
})

app.post("/chats", (req, res) => {
     let { from, to, msg, } = req.body;
     let newChat = new chat(
          {
               from: from,
               to: to,
               msg: msg,
               created_at: new Date()
          }
     )
     console.log(newChat);
     res.redirect("/chats")
     newChat.save()
          .then((ree) => console.log("data saved")).catch((err) => console.log(err))
})


app.delete("/chat/:id", async (req, res) => {
     let { id } = req.params;
     let deletedChat = await chat.findByIdAndDelete(id);
     console.log("data deleted");
     res.redirect("/chats");
})

app.listen(port, () => {
     console.log(`http://localhost:${port}`);
});