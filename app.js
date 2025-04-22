const cron = require('node-cron');
const autocannon = require('autocannon');
const { userAgents } = require('./userAgent');
let userAgent = userAgents[parseInt(Math.random() * userAgents.length)];

// const options = {
//   // url: 'http://10.44.60.30:83',
//   // url: 'http://121.37.177.121/',
//   duration: 60 * 60 * 10,
//   workers: 8,
//   connections: 5000,
//   pipelining: 1000,
//   overallRate: 10000,
//   headers: {
//     'X-Forwarded-For': '192.168.1.1',
//     'User-Agent': userAgent
//   }
// };
// http://10.44.0.5/index.htm
// http://10.44.0.5/index.htm
// http://10.44.60.30:8383
// 123.157.96.58:83
// http://121.37.177.121/k3cloud

const options = {
  url: 'http://10.44.60.199:8800',
  duration: 60 * 60 * 10,
  workers: 12,
  connections: 10000,
  pipelining: 1000,
  overallRate: 10000,
  headers: {
    'X-Forwarded-For': '192.168.1.1',
    'User-Agent': userAgent
  }
};
console.log(options);

function startAutocannon() {
  console.log('开始压力测试...');
  const instance = autocannon(options, (err, result) => {
    if (err) {
      console.error('测试出错：', err);
    } else {
      console.log('测试结果：', result);
    }
    console.log('压力测试完成，自动关闭...');
  });
  autocannon.track(instance, {
    renderProgressBar: true,
    renderResultsTable: true,
    renderLatencyTable: true
  });

  instance.on('done', () => {
    console.log('测试完成，释放资源...');
    instance.stop();
  });
}
startAutocannon();

cron.schedule('0 0 8 * * *', () => {
  console.log(`任务8时执行一次,执行时间:new Date()`);
  startAutocannon();
});
// cron.schedule('* * * * *', async val => {
//   console.log('任务每分钟执行一次', val);
//   // startAutocannon();/
// });
