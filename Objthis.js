function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

console.log( user.ref().name ); // John


//Create a calculator

let calculator={
	a:2,
	b:3,
	sum(){
		console.log(this.a+this.b);
	},
	mul(){
		console.log(this.a*this.b);
	}
};


calculator.sum()

//Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
     return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
     return this;
  }
};

ladder.up().up().down().showStep().down().showStep();