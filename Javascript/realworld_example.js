const data = [
    {firstName : "Anand", lastName : "Prajapati", age : 23},
    {firstName : "Yash", lastName : "Raval", age : 22},
    {firstName : "Dhruv", lastName : "Patel", age : 24},
    {firstName : "Akshit", lastName : "Kumar", age : 25},
    {firstName : "Vaibhaw", lastName : "kori", age : 23},
    {firstName : "Aum", lastName : "Pathak", age : 22}
]

const fullname = data.map((x) => x.firstName + " " + x.lastName)

console.log(fullname)

const agemap = data.reduce(function(acc, curr){
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
    }
    else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log(agemap)

const agefilter = data.filter((x) => x.age > 23).map((x) => x.firstName + " " + x.lastName)

console.log(agefilter)