const nums = [1, 2, 3, 4, 5]

let result = nums.map((element) => {
    return element * 275
})

console.log(result)

const sum10 = element => element + 10

const triplo = element => element * 3

const paraDinheiro = element => `R$${parseFloat(element).toFixed(2).replace('.', ',')}`

result = nums.map(sum10).map(triplo).map(paraDinheiro)
console.log(result)