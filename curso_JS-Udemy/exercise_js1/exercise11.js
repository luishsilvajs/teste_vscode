function checkBissexto(year) {
    if ((year % 400 === 0 ) || (year % 4 === 0 && year % 100 !== 0)) {
        return `O anor ${year} é bissexto`
    }

    return `O ano ${year} não é bissexto`
}

console.log(checkBissexto(2020));  // true
console.log(checkBissexto(1900))
console.log(checkBissexto(2000))
console.log(checkBissexto(2027))