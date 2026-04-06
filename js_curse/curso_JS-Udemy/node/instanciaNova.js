// Usando factory para acessar o cache
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}  