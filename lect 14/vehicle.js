function vehicle(company,year){
    this.company = company
    this.year = year
    }
    function car(name,price,company,year){
      vehicle.call(this,company,year)
      this.name = name
      this.price = price
    }
    
    function bike(name,price,cc,company,year){
      vehicle.call(this,company,year)
      this.name = name
      this.price = price
      this.cc = cc
    }
    // bike.prototype._proto_ = vehicle.prototype
    // car.prototype._proto_ = vehicle.prototype
    let car1 = new car("Alto","v8","Maruti Suzuki",2000)
    
    