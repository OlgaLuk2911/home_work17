const wrap = document.querySelector('.wrap');
let data=[]
class Transport{
  constructor(id,type, price, brand,src){
    this.id = data.length + 1;
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.image = src;
    data.push(this);
  }

  getInfo(){
  return {
      type: this.type,
      brand: this.brand,
    }
  }

  getPrice(){
    return{
      price: this.price
    }
  }
}

class Car extends Transport{
  constructor(id,type, price, brand,doors,src){
    super (id,'car', price, brand,src);
    this.doors = doors;
  }

  getDoorsCount(){
    return{
      doors: this.doors,
    }
  }
}

class Bike extends Transport{
  constructor(id,type, price, brand,maxSpeed,src){
    super (id,'bike', price, brand,src);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed(){
    return{
      maxSpeed: this.maxSpeed,
    }
  }
}
const car1 = new Car('none','none',4300000,'Audi',4, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg');
const car2 = new Car('none','none',2800000,'Mercedes-Benz',4,'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg');
const bike1 = new Bike('none','none', 1300000, 'Harley-Davidson',210,'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg');
const bike2 = new Bike('none','none', 1400000, 'Harley-Davidson',220,'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png');
console.log(data);

console.log(car1.getDoorsCount());
console.log(car1.getInfo());
console.log(bike1.getMaxSpeed());
console.log(bike1.getPrice());

