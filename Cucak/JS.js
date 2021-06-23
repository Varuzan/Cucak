class UFC {
  constructor(name, age, voncaXaxum) {
    this.name = name;
    this.age = age;
    this.voncaXaxum = voncaXaxum;
  }
}

var Narek = new UFC("Narek", 17, "Lava xaxum");
var Gago = new UFC("Gago", 17, "Lava xaxum");
var Rob = new UFC("Rob", 17, "Normala xaxum");
var Armen = new UFC("Armen", 16, "Vata xaxum");
var Samo = new UFC("Samo", 16, "Vata xaxum");
var Varuzh = new UFC("Varuzh", 16, "Normala xaxum");

var InputIn = document.querySelector(".input-in");
const button = document.querySelector("button");

button.onclick = () => {
  var value = InputIn.value;
  if (value == "Narek") {
    console.log(Narek.name);
    console.log(Narek.age);
    console.log(Narek.voncaXaxum);
  }
  else if (value == "Gago") {
    console.log(Gago.name);
    console.log(Gago.age);
    console.log(Gago.voncaXaxum);
  }
  else if (value == "Rob") {
    console.log(Rob.name);
    console.log(Rob.age);
    console.log(Rob.voncaXaxum);
  }
  else if (value == "Armen") {
    console.log(Armen.name);
    console.log(Armen.age);
    console.log(Armen.voncaXaxum);
  }
  else if (value == "Samo") {
    console.log(Samo.name);
    console.log(Samo.age);
    console.log(Samo.voncaXaxum);
    }
  else if (value == "Varuzh") {
    console.log(Varuzh.name);
    console.log(Varuzh.age);
    console.log(Varuzh.voncaXaxum);
      }
  else  {
    console.log("Chka aydpisi mard");
  }
}
