function delayOrReject(ms, shouldReject, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(`Promise rejected ${num}`);
            } else {
                resolve(`Promise resolved ${num}`);
            }
        }, ms);
    });
}

// An array of promises, including one that resolves and one that rejects
const promises = [
    delayOrReject(2000, false, 1),
    delayOrReject(3000, true, 2),
    delayOrReject(1500, false, 3)
];

const promiseAll = function(promises){
    return new Promise((resolve, reject) => {
        let results = [];
        let c = 0;
        promises.forEach((pr, idx) => {
            pr.then((res) => {
                c++
                results.push(res)
                if(c == promises.length) resolve(results)
            }).catch((err) => reject(err))
        })
    })
}

const promiseAllSettled = function(promises){
    return new Promise((resolve, reject) => {
        let results = [];
        let c = 0;
        promises.forEach((pr, idx) => {
            // idx to maintain order
            Promise.resolve(pr).then((res) => {
                results[idx] = { value: res, status: "fulfilled" }
            }).catch((err) => {
                results[idx] = { reason: err, status: "rejected" }
            }).finally(() => {
                c++;
                if(c==promises.length) resolve(results)
            })
        })
    })
}

const promiseRace = function(promises){
    return new Promise((resolve, reject) => {
        let resolved = false;
        
        promises.forEach((pr) => {
            pr.then((res) => {
                if(!resolved){
                    resolved = true
                    resolve(res)
                }
            }).catch((err) => {
                if(!resolved){
                    resolved = true
                    reject(err)
                }
            })
        })
    })
}
