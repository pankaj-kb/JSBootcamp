var myHeroes = ["Superman", "Spiderman", "Hulk"];


String.prototype.truelength = function(){
    // console.log(`${this.trim().length}`);
    console.log(this.trim().length);
}

myName = "Pankaj   ";

console.log(myName.length);
myName.truelength();
// console.log(myName.truelength());