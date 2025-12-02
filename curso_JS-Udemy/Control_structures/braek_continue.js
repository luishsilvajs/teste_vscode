const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in number) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${number[x]}`)
}

for (let y in number) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${number[y]}`)
}

externo: for (let a in number) {
    for (let b in number) {
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`Par = ${a}, ${b}`)

    }
}