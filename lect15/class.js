// class = person {
//     constructor(name,age, email, country)
//     this.name= name,
//     this.country = country,
//     this.age=function(){
//         return age>18
//     }

//     updateName(name){
//         return this.name = name
//     }

//     set updateCountry (country){
//         this.country = country
//     }
//     get updateName()
// }


p1.updateName('laxman')
p1.updateCountry = 'USA'
console.log(p1.country)

console.log(p1.isAdult)
person.greet()


class vehicle{
    // constructor (company){
    //     this.
    // }

    get companyNmae(){
        return this.companyNmae;
    }
}

class car extends vehicle{
    constructor(company,topspeed){
        super.company
        this.topspeed= topspeed
    }
}
let c1 = new car (500, 'mercedes')

console.log(car.prototype._proto===vehicle.prototype)
console.log(typeof(car))