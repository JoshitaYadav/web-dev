// console.log(this.innerWidth)

// function hello(){
//     console.log(this)
// }
// hello()

//IMPLICIT BINDING

// let person={
//     age:22,
//     name:"joshita",
//     email: "joshita@gmail",
//     city: "delhi",

//     printPersonDetails: function(){
//         this.a=300;
//         console.log(this.a) //this method is inside the oject, hence this points to the object
//     }

// }
// person.printPersonDetails()
// this.a=200;
// console.log(this.a)

// function printDetails(city, country){
//     console.log("name",this.name)
//     console.log("age",this.age)
//     console.log("college",this.college)
//     console.log("city",city)
// }



// let p1={
//     name:'joshita',
//     age:22 ,
//     college: 'dtu',
// }
// let p2={
//     name:'dhruv',
//     age:22 ,
//     college: 'mit',
// }
// let p3 ={
//     name:'sana',
//     age:22 ,
//     college: 'bvp',
// }

// // printDetails.call(p3, "delhi", "india")
// // printDetails.apply(p3, ["delhi","india"])

// let fun = printDetails.bind(p1)
// fun("delhi")


// newfunction

function person(n, a, c ){
    this.name=n
    this.age=a
    this.college=c
}


let p1 = new person("Ram", 22, "DTU")

let p2 = new person("Laxman", 25, "BVP")

console.log(p2)