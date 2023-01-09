const getRandomNumber = (max = 0, min = 30) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

export default getRandomNumber;
