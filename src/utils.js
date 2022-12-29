const getRandomIt = (num = 30) => {
  const result = Math.ceil(Math.random() * num);
  return result;
};

export default getRandomIt;
