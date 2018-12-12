const getChunks = (arr, chunk = 12) => {
  let results = [];
  while (arr.length) {
    results.push(arr.splice(0, chunk));
  }
  return results;
};

export default getChunks;
