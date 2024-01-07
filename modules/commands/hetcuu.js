const fs = require("fs");
module.exports.config = {
  name: "hetcuu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "trunguwu", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "hetcuu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("Xin") == 0 ||
    event.body.indexOf("xin") == 0 ||
    event.body.indexOf("Xin với") == 0 ||
    event.body.indexOf("khong") == 0
  ) {
    var msg = {
      body: "hong pe oi",
      attachment: fs.createReadStream(__dirname + `/noprefix/cocainit.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("Hết cứu") == 0 ||
    event.body.indexOf("hết cíu") == 0 ||
    event.body.indexOf("Hết Cứu") == 0 ||
    event.body.indexOf("het cuu") == 0
  ) {
    var msg = {
      body: "bot cũng ko cứu nổi",
      attachment: fs.createReadStream(__dirname + `/noprefix/hetcuu.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("ảo") == 0 ||
    event.body.indexOf("Ảo") == 0
  ) {
    var msg = {
      body: "Duma ảo ma canada 🙃",
      attachment: fs.createReadStream(__dirname + `/noprefix/ảo.mp4`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("ngủ") == 0 ||
    event.body.indexOf("ngủ ngon") == 0 ||
    event.body.indexOf("Ngủ ngon") == 0 ||
    event.body.indexOf("pai") == 0
  ) {
    var msg = {
      body: "Ngủ ngon nhó❤️",
      attachment: fs.createReadStream(__dirname + `/noprefix/ngungon.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("cc") == 0 ||
    event.body.indexOf("cmm") == 0 ||
    event.body.indexOf("co cai dai") == 0 ||
    event.body.indexOf("dm") == 0
  ) {
    var msg = {
      body: "m thích chửi thề ko",
      attachment: fs.createReadStream(__dirname + `/noprefix/dmm.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  }
  
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }