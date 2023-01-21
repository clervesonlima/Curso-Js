let amigo = {
    nome:'Clerveson',
    altura:1.69,
    peso: 69,
    engordar(p=0){
        this.peso += p
}}
amigo.engordar(2)
console.log (`${amigo.nome} pesa ${amigo.peso}Kg e tem ${amigo.altura} de altura.`)