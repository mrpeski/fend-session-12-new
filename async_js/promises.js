const promise = new Promise(function(resolve, reject){
    const result = 3 * 4;
    if(result){
        resolve(result);
    } else {
        reject(new Error("Something bad happend!"))
    }
})

promise.then((res) => {
    console.log("First then", res)
    return res;}).then(res => console.log("Second then", res*245))

// console.table(promise);