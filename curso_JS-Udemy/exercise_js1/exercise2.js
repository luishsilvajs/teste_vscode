function triangleClassification(sideA, sideB, sideC){
    if(sideA == sideB && sideB == sideC){
        return 'Este triângulo é um Equilátero'
    }else if(sideA == sideB || sideB == sideC){
        return 'Este triângulo é um Isósceles'
    }else{
        return 'Estr triângulo é um Escaleno'
    }
}

console.log(triangleClassification(2, 2, 2));
console.log(triangleClassification(2, 3, 3));
console.log(triangleClassification(2, 3, 4));