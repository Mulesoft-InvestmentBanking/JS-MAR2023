const noMondays = new Promise((resolve, reject) => {
    if (new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!"); // fulfill the promise
    } else {
        reject("Someone has a case of the Mondays!"); // reject the promise
    }
});


// noMondays
//     .then(res => console.log("THEN: " + res)) // if the promise is fulfilled
//     .catch(err => console.log("CATCH: " + err)); // if the promise is rejected


const apiCall = () => { // a function that takes time to run
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("finish api call")
        }, 2000)
    })
}


// OPTION 1: .then
console.log("start") // a
apiCall()  // start running apiCall
    .then(response => {
        console.log("THEN.... Inside response : " + response)  // b
        console.log("end") // c
    })
    .catch(error => console.log("CATCH.... Inside error : " + error))


// OPTION 2: await/ async
const asyncFunc = async () => {
    console.log("start")
    const response = await apiCall()
    console.log("Inside response : " + response)  // b
    console.log("end") // c    
}
asyncFunc()