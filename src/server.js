import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();

// Espress 로 할 일은 views를 설정해주고
//render 하고

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
