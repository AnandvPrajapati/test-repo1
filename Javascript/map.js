const arr = [2,5,4,2,3,6]
function double(x) {
    return x * 2
}

function tripple(x) {
    return x * 3
}

function binary(x) {
    return x.toString(2)
}

const output = arr.map(double);
console.log(output)


const output1 = arr.map(tripple);
console.log(output1)

const output2 = arr.map(binary);
console.log(output2)