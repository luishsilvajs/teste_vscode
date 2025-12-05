function filterNumber(array){
    const result = []

    return array.filter(item => typeof item === 'number')
}

console.log(filterNumber(["Javascript", 1, "3", "Web", 20]))