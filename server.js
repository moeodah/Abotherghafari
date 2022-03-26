const express = require("express");
const servicStatic = require("serve-static");
const path = require("path");
const serveStatic = require("serve-static");
const app = express();

const client = require("twilio")();

client.messages
  .create({
    from: "whatsapp:++17572948749",
    body: "Ahoy world!",
    to: "whatsapp:+3439983864",
  })
  .then((message) => console.log(message.sid));

app.use("/", serveStatic(path.join(__dirname, "/dist/spa")));
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/spa/index.html"));
});
const port = process.env.PORT || 4000;
app.listen(port);

console.log("listening on port : " + port);
