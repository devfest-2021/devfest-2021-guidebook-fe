const asyncFilter = async <T>(arr: T[], predicate: (e: T) => boolean) =>
  Promise.all(arr.map(predicate)).then((results) =>
    arr.filter((_v, index) => results[index]),
  );

export { asyncFilter };
