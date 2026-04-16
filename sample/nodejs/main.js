const TIME_PATTERN = /^(\d{2}):(\d{2}):(\d{2})$/;

const parseTime = (time) => {
  const match = TIME_PATTERN.exec(time);
  if (!match) {
    throw new Error(`Invalid time format: ${time}`);
  }

  const [, hours, minutes, seconds] = match;
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

const formatTime = (totalSeconds) => {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const addTwoTimes = (timeFirst, timeSecond) => {
  return formatTime(parseTime(timeFirst) + parseTime(timeSecond));
};

module.exports = addTwoTimes;
