let hashMap = new Map()
let numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++) {
    hashMap.set(numbers[i], i)
}

console.log(hashMap)
