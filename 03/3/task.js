/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i < promises.length; i++) {
      result[i] = {
        isResolved: false,
        value: null
      };
    }

    for (let i = 0; i < promises.length; i++) {
      const currentPromise = promises[i];

      currentPromise.then(value => {
        result[i] = {
          value,
          resolved: true
        };

        if (result.every(element => element.resolved)) {
          resolve(result.map(element => element.value));
        }
      }, reject);
    }
  }
  );
}

module.exports = promiseAll;
