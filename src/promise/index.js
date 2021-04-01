const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve("hey!");
        } else {
            reject("Whooops!");
        }
    });
}
const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hello resolve");
            }, 3000)
        } else {
            const error = new Error("Oh shit.");
            return reject(error);
        }
    });
}
// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// somethingWillHappen()
//     .then (response => console.log(response))
//     .catch (err => console.error(err));
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log("Array of result: ", response))
    .catch(err => console.log(err))