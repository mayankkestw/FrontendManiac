// Polyfill for Promise.all
const p1 = new Promise((resolve) => resolve(10));
const p2 = new Promise((resolve) => resolve(15));
const p3 = new Promise((resolve) => reject(19));

const listPromise = [p1, p2, p3];

promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const res = [];
    let c = 0;
    promises.forEach((p, idx) => {
      p.then((resp) => {
        c++;
        res.push(resp);
        if (c === promises.length - 1) resolve(res);
      }).catch((err) => reject(err));
    });
  });
};

const promiseAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let c = 0;

    promises.forEach((p) => {
      p.then((value) => {
        res.push({ status: "fulfilled", value: value });
      })
        .catch((reason) => {
          res.push({ status: "rejected", reason: reason });
        })
        .finally(() => {
          c++;
          if (c == promises.length) {
            resolve(res);
          }
        });
    });
  });
};

const PromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    let resolved = false;

    promises.forEach((p) => {
      p.then((resp) => {
        if (!resolved) {
          resolved = true;
          resolve(resp);
        }
      }).catch((err) => {
        if (!resolved) {
          resolved = true;
          reject(err);
        }
      });
    });
  });
};

promiseAll(listPromise)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
