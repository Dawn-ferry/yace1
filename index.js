const axios = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');
const proxyUrl = 'socks5://127.0.0.1:9050'; // Tor 代理的地址和端口
const targetUrl = 'http://10.44.60.199:8800/'; // 目标服务器的 URL

const proxyAgent = new HttpsProxyAgent(proxyUrl);

axios
  .get(targetUrl, { httpAgent: proxyAgent })
  .then(response => {
    console.log('请求成功:', response.data);
  })
  .catch(error => {
    console.error('请求失败:', error.message);
  });

// const axios = require('axios');
// // const HttpsProxyAgent = require('https-proxy-agent');
//

// // 代理服务器的地址、端口、用户名和密码
// const proxyHost = '10.44.101.11';
// const proxyPort = 80;
// const proxyUsername = 'root';
// const proxyPassword = 'P@ssw0rdjh';

// // 构造代理 URL
// const proxyUrl = `http://${proxyUsername}:${proxyPassword}@${proxyHost}:${proxyPort}`;
// console.log(proxyUrl);

// // 创建代理代理
// const proxyAgent = new HttpsProxyAgent(proxyUrl);

// // 目标服务器的 URL
// const targetUrl = 'http://10.44.60.199:8800/';

// // 使用代理发送请求
// axios
//   .get(targetUrl, { httpAgent: proxyAgent })
//   .then(response => {
//     console.log('请求成功:', response.data);
//   })
//   .catch(error => {
//     console.error('请求失败:', error.message);
//     if (error.response) {
//       console.error('代理服务器返回的响应:', error.response.data);
//     }
//   });

// // 输出代理服务器的用户名和密码
// console.log(`代理服务器用户名: ${proxyUsername}`);
// console.log(`代理服务器密码: ${proxyPassword}`);
// // const request = require('request');

// // const options = {
// //   uri: 'http://10.44.60.199:8800/', // 目标服务器的 URL
// //   proxy: 'http://10.44.66.14:80', // 代理服务器地址和端口
// //   headers: {
// //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
// //   }
// // };

// // request(options, (error, response, body) => {
// //   if (error) {
// //     console.error('请求失败:', error.message);
// //   } else {
// //     console.log('请求成功:', body);
// //   }
// // });
