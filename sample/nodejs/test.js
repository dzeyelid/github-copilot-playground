const addTwoTimes = require('./main.js')

// addTwoTimesのテストをする
const testAddTwoTimes = () => {
  const cases = [
    ['24:00:01', '00:59:59', '25:00:00'],
    ['01:00:00', '02:00:00', '03:00:00'],
    ['00:00:59', '00:00:01', '00:01:00'],
  ];

  let failedCount = 0;
  for (const [time1, time2, expected] of cases) {
    const actual = addTwoTimes(time1, time2);
    if (actual !== expected) {
      console.log(`NG: addTwoTimes(${time1}, ${time2}) = ${actual}, expected ${expected}`);
      failedCount += 1;
    }
  }

  if (failedCount > 0) {
    process.exitCode = 1;
    return;
  }

  console.log('OK');
}

testAddTwoTimes()
