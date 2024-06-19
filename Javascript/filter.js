const arr1 = [2,4,6,9,7,3,55]

function isOdd(x) {
    return x % 2
}

const op = arr1.filter(isOdd)
console.log(op)

const op1 = arr1.filter((x) => x % 2 === 0) //Arrow function
console.log(op1);