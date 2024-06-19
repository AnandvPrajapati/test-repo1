const sumarr = [222,5,4,3,6]

function findsum(acc, curr) {
    acc = acc + curr
    return acc
}

const oput = sumarr.reduce(function (acc, curr) {
    acc = acc + curr
    return acc
}, 0)

const oput1 = sumarr.reduce(findsum)
console.log("sum : ", oput1)
console.log("sum : ", oput)

const oput2 = sumarr.reduce(function (max, curr) {
    if(curr > max) {
        max = curr
    }
    return max
}, 0)

console.log(oput2)