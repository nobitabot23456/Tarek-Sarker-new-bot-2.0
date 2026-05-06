const request = require("request");
const fs = require("fs");
const axios = require("axios");

module.exports.config = {
  name: "dud",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "🔰𝐑𝐀𝐇𝐀𝐓 𝐈𝐒𝐋𝐀𝐌🔰",
  description: "Squeeze the breast of the tagged user",
  commandCategory: "18+ Command",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var links = [
    "https://i.postimg.cc/tC2BTrmF/3.gif",
    "https://i.postimg.cc/pLrqnDg4/78d07b6be53bea612b6891724c1a23660102a7c4.gif",
    "https://i.postimg.cc/gJFD51nb/detail.gif",
    "https://i.postimg.cc/xjPRxxQB/GiC86RK.gif",
    "https://i.postimg.cc/L8J3smPM/tumblr-myzq44-Hv7-G1rat3p6o1-500.gif",
  ];

  var mention = Object.keys(event.mentions);
  let tag = event.mentions[mention].replace("@", "");

  if (!mention) return api.sendMessage("Please tag 1 person", event.threadID, event.messageID);

  var callback = () => 
    api.sendMessage(
      {
        body: `${tag} 𝗬𝗼𝘂 𝗚𝗲𝘁 𝗬𝗼𝘂𝗿 𝗕𝗿𝗲𝗮𝘀𝘁 𝗦𝗾𝘂𝗲𝗲𝘇𝗲𝗱 😝`,
        mentions: [{ tag: tag, id: Object.keys(event.mentions)[0] }],
        attachment: fs.createReadStream(__dirname + "/cache/bopvu.gif")
      }, 
      event.threadID, 
      () => fs.unlinkSync(__dirname + "/cache/bopvu.gif")
    );

  return request(encodeURI(links[Math.floor(Math.random() * links.length)]))
    .pipe(fs.createWriteStream(__dirname + "/cache/bopvu.gif"))
    .on("close", () => callback());
};
