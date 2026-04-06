function checValue(value) {
    const type = typeof value

    if (type == 'boolean') {
        return !value
    } else if (type == 'number') {
        return -value
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${type}`
    }
}

console.log(checValue(false))