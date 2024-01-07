const axios = require('axios');
const fs = require('fs');
const isURL = u => /^http(|s):\/\//.test(u);
exports.handleEvent = async function(o) {
    try {
        const str = o.event.body;
        const send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);
        const head = app => `==『 AUTODOWN ${app.toUpperCase()} 』==\n────────────────`;
        if (isURL(str)) {
            if (/fb|facebook/.test(str)) {
                const json = await infoPostFb(str);
                const body = `${head('FACEBOOK')}`;
                const fil = type => json.attachment.filter($=>$.__typename == type);
                const photo = fil('Photo');
                const video = fil('Video');

                const attachment = [];
                for (const i of photo) {
                    try {
                        const img = i.photo_image || i.image || {};
                        attachment.push(await streamURL(img.uri, 'jpg'));
                    } catch {
                        continue;
                    }
                }
                if (attachment.length > 0) {
                    await send({
                        body, attachment
                    });
                }

                for (const i of video) {
                    try {
                        send({
                            body, attachment: await streamURL(i.browser_native_hd_url || i.browser_native_sd_url, 'mp4'),
                        });
                    } catch {
                        continue;
                    }
                }
            }           
        }
    } catch(e) {
        console.log('Error', e);
    }
};
exports.run = () => {};
exports.config = {
    name: 'autodown',
    version: '1',
    hasPermssion: 3,
    credits: 'Công Nam',
    description: '',
    commandCategory: 'Hệ Thống',
    usages: [],
    cooldowns: 1
};
function streamURL(url, type) {
    return axios.get(url, {
        responseType: 'arraybuffer'
    }).then(res => {
        const path = __dirname + `/cache/${Date.now()}.${type}`;
        fs.writeFileSync(path, res.data);
        setTimeout(p => fs.unlinkSync(p), 1000 * 60, path);
        return fs.createReadStream(path);
    });
}
function infoPostFb(url) {
    return axios.get(`https://duongkum999.codes/fb/info-post?url=${url}`).then(res => res.data);
          }