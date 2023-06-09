const addTwoTimes = require('./main.js')

// addTwoTimesのテストをする
const testAddTwoTimes = () => {
  const time1 = '24:00:01';
  const time2 = '00:59:59';
  const expected = '25:00:00';
  const actual = addTwoTimes(time1, time2);
  console.log(`time1: ${time1}, time2: ${time2}, expected: ${expected}, actual: ${actual}`);
  if (actual !== expected) {
    console.log('NG');
  } else {
    console.log('OK');
  }
}

testAddTwoTimes()
