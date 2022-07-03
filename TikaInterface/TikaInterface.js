export class TikaInterface{
  constructor(file_defender=true, strongLeft=true){
    //Touches
    TikaInterface.prototype.oneTouch = this.oneTouch;
    TikaInterface.prototype.twoTouch = this.twoTouch;
    TikaInterface.prototype.mediumTouch = this.mediumTouch;
    TikaInterface.prototype.longTouch = this.longTouch;
    //Passes or Shots
    TikaInterface.prototype.passare = this.passare;
    TikaInterface.prototype.passagioInverso = this.passagioInverso; //im not sure if my Italian is accurate (im trying to say "reverse pass")
    TikaInterface.prototype.hoherTritt = this.hoherTritt; //im not sure if my German is accurate (im trying to say "high kick")
    TikaInterface.prototype.niedrigerTritt = this.niedrigerTritt; //im not sure if my German is accurate (im trying to say "low kick")
    TikaInterface.prototype.noLookPass = this.noLookPass;
    TikaInterface.prototype.buttPass = this.buttPass;
    TikaInterface.prototype.chapeu = this.chapeuInverso; //im not sure if my portuguese is accurate (im trying to say "inverse chip")
    TikaInterface.prototype.rabona = this.rabona;
    TikaInterface.prototype.bicicleta = this.bicicleta;
    TikaInterface.prototype.cuauhteminha = this.cuauhteminha;
    TikaInterface.prototype.aurelio = this.aurelio;
    //Dribbling and Tikki Takka
    TikaInterface.prototype.fakey = this.fakey;
    TikaInterface.prototype.marseilleTurn = this.marseilleTurn;
    TikaInterface.prototype.faux = this.fauxPass;
    TikaInterface.prototype.chop = this.chop;
    TikaInterface.prototype.tikki = this.tikki;
    TikaInterface.prototype.takka = this.takka;
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
