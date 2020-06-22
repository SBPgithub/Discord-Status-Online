// Tip: Add a 2 slashes infront of a code if you want ot disable it.

// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
var Client = require("uptime-robot");
const app = express();


// Twitch Streaming Status
client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Login successful")

client.user.setActivity(`TEXT HERE`, {
type: "STREAMING",
url: "https://twitch.tv/YVNGPEDOtv6000"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login(process.env.DISCORD_TOKEN)
//Put 2 slashes infront of "client.login" to disable Twitch Streaming Status

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}`);
  console.log ("Open source for the world to use.")
  console.log ("Made by YVNGPEDO6000")
  console.log ("Copyright © YVNGPEDO6000, a diivision of Yvng Pedo, LLC.")
});


// this is the code for the guides
app.use(require('./guides'));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
