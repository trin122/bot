module.exports.config = {
  name: "gadit",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "MAVERICK",
  description: "Gạ địt 1 ai đó <3",
  commandCategory: "Nhóm",
  usages: "gadit @mention",
  cooldowns: 10,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
  if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gạ địt.", event.threadID);
let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention, tag: name});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("» Nứng quá hả em sao lại dùng lệnh này.");
setTimeout(() => {a({body: "Chào em nhé." + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Vú em đẹp quá, em lại xinh nữa." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Em cho anh địt 1 cái nhé." + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Em bú cu anh 1 chút thôi không sao đâu." + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Nhìn em làm anh nứng cặc quá." + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Cho anh địt 1 cái thôi mà." + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Đồng ý cho anh địt tung lồn em nhé." + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Anh hứa là anh sẽ làm em sung sướng." + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Chỉ một đêm nay thôi em nhé." + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Cho anh nhét cặc vô lồn em đi." + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Anh yêu em, nên cho anh địt lật buồng trứng em nhé." + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Địt 1 phát là em nghiện luôn." + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Đảm bảo anh sẽ làm cho em mê con cu của anh." + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Nên cho anh địt 1 cái nhé." + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Chờ anh một chút nhé, Anh lấy bao cao su ra để địt em." + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Oce bao cao su đây rồi." + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Lên giường banh lồn ra đi em." + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Em cởi đồ ra đi." + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Anh cởi nốt cái quần sịp đã nhé." + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Để anh đưa cặc vô lồn em nhé." + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Lồn đéo gì rộng thế hả em.")} , 90000);
setTimeout(() => {a({body: "Thôi để anh làm nốt." + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Anh yêu em nhưng lồn em rộng quá." + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Anh xin lỗi nhưng có gì mình coi nhau như người dưng nha." + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Xin lỗi em vì anh địt em sướng nhưng cu anh không sướng.")} , 110000);



}