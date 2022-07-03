export class TikaInterface{
  constructor(file_defender=true, strongLeft=true){
    //Touches
    TikiTaka.prototype.oneTouch = this.oneTouch;
    TikiTaka.prototype.twoTouch = this.twoTouch;
    TikiTaka.prototype.mediumTouch = this.mediumTouch;
    TikiTaka.prototype.longTouch = this.longTouch;
    //Passes or Shots
    TikiTaka.prototype.passare = this.passare;
    TikiTaka.prototype.passagioInverso = this.passagioInverso; //im not sure if my Italian is accurate (im trying to say "reverse pass")
    TikiTaka.prototype.hoherTritt = this.hoherTritt; //im not sure if my German is accurate (im trying to say "high kick")
    TikiTaka.prototype.niedrigerTritt = this.niedrigerTritt; //im not sure if my German is accurate (im trying to say "low kick")
    TikiTaka.prototype.noLookPass = this.noLookPass;
    TikiTaka.prototype.buttPass = this.buttPass;
    TikiTaka.prototype.chapeu = this.chapeuInverso; //im not sure if my portuguese is accurate (im trying to say "inverse chip")
    TikiTaka.prototype.rabona = this.rabona;
    TikiTaka.prototype.bicicleta = this.bicicleta;
    TikiTaka.prototype.cuauhteminha = this.cuauhteminha;
    TikiTaka.prototype.aurelio = aurelio;
    //Dribbling and Tikki Takka
    TikiTaka.prototype.fakey = this.fakey;
    TikiTaka.prototype.marseilleTurn = this.marseilleTurn;
    TikiTaka.prototype.faux = this.fauxPass;
    TikiTaka.prototype.chop = chop;
    TikiTaka.prototype.tikki = this.tikki;
    TikiTaka.prototype.takka = this.takka;
    //these are STACKS if strongLeft is true, otherwise queues
    this.strongLeft=strongLeft;
    this.readstreams = [];
    this.writestreams = [];
  }

  

  //____________________________________________________________________________
  //***Touches***
  oneTouch(){
    return this;
  }
  twoTouch(){
    return this;
  }
  mediumTouch(){
    return this;
  }
  longTouch(){
    return this;
  }
  //____________________________________________________________________________
  //***Passes***
  //pass
  passare(){
    return this;
  }
  //reverse pass
  passagioInverso(){
    return this;
  }
  //____________________________________________________________________________
  //***Passes or Shots***
  //high cross kick
  hoherTritt(){
    return this;
  }
  //low cross kick
  niedrigerTritt(){
    return this;
  }
  noLooker(){
    return this;
  }
  butter(){
    return this;
  }
  //chip
  chapeu(){

  }
  //Backward Chip
  chapeuInverso(){
    return this;
  }
  //rabona kick
  rabona(){
    return this;
  }
  //bicycle kick
  bicicleta(){
    return this;
  }


  //____________________________________________________________________________
  //***Dribble Moves***

  faux(){
    return this;
  }
  shimmy(){
    return this;
  }
  legWiggle(){
    return this;
  }
  marseilleTurn(){
    return this;
  }
  portugueseChop(){
    return this;
  }
  nutmeg(){
    return this;
  }
  //aurelio
  aurelio(){
    return this;
  }
  cruyffTurn(){
    return this;
  }
  elastico(){
    return this;
  }

  okocha(){
    return this;
  }
  rivelino(){
    return this;
  }
  fakePullBack(){
    return this;
  }
  cut(){
    return this;
  }
  cuauhteminha(){
    return this;
  }
  insideHook(){
    return this;
  }
  mathewsCut(){
    return this;
  }
  pullBackV(){
    return this;
  }
  stepOver(){
    return this;
  }
  singleLunge(){
    return this;
  }
  doubleLunge(){
    return this;
  }
  //____________________________________________________________________________
  //***Tikki Takka***
  tikki(){
    return this;
  }
  takka(){
    return this;
  }




}




var options = [create(), rename(), copy(), truncate(), del()]



//var play = new TikiTaka("./sometest/some.test", true, true)



//console.log(play.pass("123", "456").blindPass("653", "lkdsfj"))

