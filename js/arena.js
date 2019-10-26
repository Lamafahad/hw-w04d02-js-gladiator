
class Arena{
    constructor(name, gladiators){
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
    this.gladiators = [];
    }

    addGladiators(name){
        if(this.gladiators.length <= 2){
            this.gladiators.push(name);
        }
  else{
      console.log('Sorry SArena should nothave more than 2 gladiators');
  }
    }

    fight(){

}

}

const colosseum = new Arena('Colosseum');
console.log(colosseum.name);

const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");