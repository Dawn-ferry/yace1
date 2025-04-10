const cron = require('node-cron')
const autocannon = require('autocannon');

const options = {
  url: 'https://www.4399.com/',
  duration: 60 * 60 * 10,
  workers: 8,
  connections: 10000,
  pipelining: 1000,
  overallRate: 10000,

};
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
// cron.schedule('0 0 8 * * *', () => {
//   console.log(`任务8时执行一次,执行时间:new Date()`);
// });
// cron.schedule('* * * * *', async val => {
//   console.log('任务每分钟执行一次', val);
//   startAutocannon();
// });




