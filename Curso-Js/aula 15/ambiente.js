let num = [5, 8, 2, 9, 3]

console.log (`O arrey tem ${num.length} valores`)
console.log (`O primeiro valor do vetor é ${num[0]}`)
num.sort()
let pos = num.indexOf(8)
if (pos == -1) {
    console.log (`O valor não foi encontrado`)
} else {
    console.log (`O valor está na posição ${pos}`)
}
console.log (num)