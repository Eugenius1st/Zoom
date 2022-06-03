import http from "http"; //install 할 필요 없다, 이미 node.js에 설치 되어있다.
import WebSocket, { WebSocketServer } from "ws";
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
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on ws://localhost:3000`);
// app.listen(3000, handleListen);

const server = http.createServer(app);
// express application 으로부터 서버 만들기
const wss = new WebSocketServer({ server });
// 새로운 WebSocket Server 만들기
//여기서 하고 있는 것은 같은 서버에서 http, sebSocket 둘 다 작동 시키는 것이다

server.listen(3000, handleListen);
