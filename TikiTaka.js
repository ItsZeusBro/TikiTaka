import * as path from "node:path"
const time = new Date();
import * as fs from "node:fs"


export class TikiTaka{
  constructor(file_defender=true){
    this.defender=file_defender //every move should be scrutinized more when there is no defender
    //Primitives
    TikiTaka.prototype.firstTouch = this.firstTouch;
    TikiTaka.prototype.doubleTouch = this.doubleTouch;
    TikiTaka.prototype.dribble = this.dribble;
    TikiTaka.prototype.passare = this.passare;
    TikiTaka.prototype.backwardsPass = this.backwardsPass;
    TikiTaka.prototype.blindPass = this.blindPass;
    TikiTaka.prototype.longPass = this.longPass;
    TikiTaka.prototype.chapeu = this.chapeu;
    TikiTaka.prototype.rabona = this.rabona;
    TikiTaka.prototype.faux = this.faux;
    TikiTaka.prototype.marseilleTurn = this.marseilleTurn;
    TikiTaka.prototype.showta = this.showta;
    TikiTaka.prototype.bicicleta = this.bicicleta;
    TikiTaka.prototype.cuauhteminha = this.cuauhteminha;
    TikiTaka.prototype.aurelio = aurelio;

  }

  firstTouch(somepath, dir=false){
    //this can be on a dir, or a file
    if(this._checkPath(somepath, false, true)){
      if(dir){
        fs.mkdirSync(path.dirname(somepath))
      }else{
        fs.closeSync(fs.openSync(somepath, 'w'));
      }
      return this
    }
    throw Error("firstTouch has a bug, shouldn't be here")
  }

  doubleTouch(somepath){
    if(this._checkPath(somepath, false, true)){
      fs.mkdirSync(path.dirname(somepath))
      fs.closeSync(fs.openSync(somepath, 'w'));
      return this
    }
    throw Error("doubleTouch has a bug, shouldn't be here")
  }

  dribble(){
    return this
  }
  
  passare(a, b){
    //This should mean append to file
    return this
  }
  backwardsPass(){

  }
  blindPass(){

  }
  longPass(){

  }
  chapeu(a, b){
    //this should mean chip over the defender (dont stub your toe--see the docs)
    return this
  }
  rabona(){
    //where we "pass over" (chip-pass) the defender blind
    return this
  }
  faux(){
     return this
  }
  marseilleTurn(){
    return this
  }
  showta(){

  }
  bicicleta(){

  }

  cuauhteminha(){

  }

  aurelio(){

  }

  _checkPath(somepath, rok, wok){
    if (!wok && !rok){
      throw new Error("invalid path, please check permissions or path string")
    }else{
      if(rok){
        try{
          fs.accessSync(somepath, fs.constants.R_OK)
        }catch{
          throw Error("read permissions not granted or your path string sucks")
        }
      }
      if(wok){
        try{
          fs.accessSync(somepath, fs.constants.W_OK)
        }catch{
          throw Error("write permissions not granted or your path string sucks")
        }
      }
    }
    return true
  }
}


var play = new TikiTaka("./sometest/some.test", true, true)

console.log(play.pass("123", "456").blindPass("653", "lkdsfj"))
