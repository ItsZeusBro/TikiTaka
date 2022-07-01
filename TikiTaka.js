import * as path from "node:path"
const time = new Date();
import * as fs from "node:fs"


export class TikiTaka{
  constructor(file_defender=true, strongLeft=true){
    this.defender=file_defender //every move should be scrutinized more when there is no defender
    //Primitives
    TikiTaka.prototype.firstTouch = this.firstTouch;
    TikiTaka.prototype.doubleTouch = this.doubleTouch;
    TikiTaka.prototype.tikki = this.tikki;
    TikiTaka.prototype.takka = this.takka;
    TikiTaka.prototype.passare = this.passare;
    TikiTaka.prototype.backwardsPass = this.backwardsPass;
    TikiTaka.prototype.blindPass = this.blindPass;
    TikiTaka.prototype.chapeu = this.chapeu;
    TikiTaka.prototype.rabona = this.rabona;
    TikiTaka.prototype.faux = this.faux;
    TikiTaka.prototype.marseilleTurn = this.marseilleTurn;
    TikiTaka.prototype.showta = this.showta;
    TikiTaka.prototype.bicicleta = this.bicicleta;
    TikiTaka.prototype.cuauhteminha = this.cuauhteminha;
    TikiTaka.prototype.aurelio = aurelio;
    //these are STACKS if strongLeft is true, otherwise queues
    this.strongLeft=strongLeft
    this.readstreams = []
    this.writestreams = []

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

  tikki(somepath){
    if(this.strongLeft && this.writestreams.length){
      //if player is strong left, and takka was already performed, tikki the last takka
      //(pass it to the last takka passer)
        this.fs.createReadStream(somepath).pipe(this.writestreams.pop(0))
    }else if((!this.strongLeft) && this.writestreams.length){
      //if player is not strong left, and takka was already performed, tikki the first takka
      //(pass it to the first takka passer)
        this.fs.createReadStream(somepath).pipe(this.writestreams.pop())
    }else{
      //there was no takka to tikki, only a tikki that needs a takka, remember the tikki
      this.readstreams.push(fs.createReadStream(somepath))
    }
    return this
  }
  takka(somepath){
    if(this.strongLeft && this.readstreams.length){
      //if player is strong left, and tikki was already performed, takka the last tikki
      //(pass it to the last tikki passer)
        this.readstreams.pop(0).pipe(this.fs.createWriteStream(somepath))
    }else if((!this.strongLeft) && this.readstreams.length){
      //if player is not strong left, and tikki was already performed, takka the first tikki
      //(pass it to the first tikki passer)
        this.readstreams.pop().pipe(this.fs.createWriteStream(somepath))
    }else{
      //there was no tikki to takka, only a takka that needs a tikki, remember the takka
      this.writestreams.push(fs.createWriteStream(somepath))
    }
    return this
  }

  passare(a, b){
    //just a simple touch and pass from a to b
    return this
  }
  backwardsPass(a, b){
    //remove the origin file after passing a to b
    this.passare(a, b)
    this.remove(a)
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
