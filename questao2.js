ladosTriangulo(3, 3, 6)
function ladosTriangulo(l1, l2, l3){
    if (l1 == l2 && l2 ==l3) {
    console.log(`Triângulo equilátero`)
    } else if (l1 == l2 || l2 == l3 || l3 == l1) {
    console.log(`Triângulo isóceles`)
    } else {
    console.log(`Triângulo escaleno`)
    }
}