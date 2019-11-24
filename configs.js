/**
 * @File   : configs.js
 * @Author : Richard (xiaowei.hsueh@gmail.com)
 * @Link   : http://www.gistop.com/
 * @Date   : 2018-6-14 19:55:43
 */

module.exports = {
    secret: 'test',
    db: 'wechat',
    mongodb: {
        url:'mongodb+srv://sccc:cloverphp@cluster0-tgrcy.gcp.mongodb.net/wechat?retryWrites=true&w=majority',
        host: 'localhost',
        port: 27017,
        db: 'wechat',
        max: 2,
        min: 1
    }
};
