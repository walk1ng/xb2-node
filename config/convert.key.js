const fs = require('fs');
const path = require('path');

/**
 * 读取密钥文件
 */
const privateKey = fs.readFileSync(path.join('config', 'private.key'));
const publicKey = fs.readFileSync(path.join('config', 'public.key'));

/**
 * 将密钥文件转换为base64格式字符串
 */
const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
const publicKeyBase64 = Buffer.from(publicKey).toString('base64');

/**
 * 输出转换后的结果
 */
console.log('\nPrivate Key Base64:');
console.log(privateKeyBase64);

console.log('\nPublic Key Base64:');
console.log(publicKeyBase64);