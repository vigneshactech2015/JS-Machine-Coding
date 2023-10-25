//Implement chaining calculator

const calc = {
    total : 0,
    sum(a){
        this.total += a
        return this
    },
    multiply(a){
        this.total *= a
        return this
    },
    subtract(a){
        this.total -= a
        return this
    }

}

const result = calc.sum(10).multiply(5).subtract(30).sum(10)
console.log(result.total)
