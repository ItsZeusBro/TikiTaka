import * as path from "node:path"
const time = new Date();
import * as fs from "node:fs"



export class TikiTaka{
  constructor(file_defender=true, strongLeft=true){
    this.defender=file_defender //every move should be scrutinized more when there is no defender
    //Primitives
    TikiTaka.prototype.oneTouch = this.oneTouch;
    TikiTaka.prototype.twoTouch = this.twoTouch;
    TikiTaka.prototype.mediumTouch = this.mediumTouch;
    TikiTaka.prototype.longTouch = this.longTouch;
    TikiTaka.prototype.passare = this.passare;
    TikiTaka.prototype.passagioInverso = this.passagioInverso; //im not sure if my Italian is accurate (im trying to say "reverse pass")
    TikiTaka.prototype.hoherTritt = this.hoherTritt; //im not sure if my German is accurate (im trying to say "high kick")
    TikiTaka.prototype.niedrigerTritt = this.niedrigerTritt; //im not sure if my German is accurate (im trying to say "low kick")
    TikiTaka.prototype.noLookPass = this.noLookPass;
    TikiTaka.prototype.buttPass = this.buttPass;
    TikiTaka.prototype.chapeu = this.chapeuInverso; //im not sure if my portuguese is accurate (im trying to say "inverse chip")
    TikiTaka.prototype.rabona = this.rabona;
    TikiTaka.prototype.faux = this.fauxPass;

    TikiTaka.prototype.fakey = this.fakey;
    TikiTaka.prototype.marseilleTurn = this.marseilleTurn;
    TikiTaka.prototype.showta = this.showta;
    TikiTaka.prototype.bicicleta = this.bicicleta;
    TikiTaka.prototype.cuauhteminha = this.cuauhteminha;
    TikiTaka.prototype.aurelio = aurelio;
    TikiTaka.prototype.chop = chop;
    TikiTaka.prototype.tikki = this.tikki;
    TikiTaka.prototype.takka = this.takka;
    //these are STACKS if strongLeft is true, otherwise queues
    this.strongLeft=strongLeft
    this.readstreams = []
    this.writestreams = []
  }




}



var play = new TikiTaka("./sometest/some.test", true, true)



console.log(play.pass("123", "456").blindPass("653", "lkdsfj"))
