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
    TikiTaka.prototype.longPass = this.longPass;
    TikiTaka.prototype.chapeu = this.chapeu;
    TikiTaka.prototype.rabona = this.rabona;
    TikiTaka.prototype.fakey = this.fakey;
    TikiTaka.prototype.faux = this.faux;
    TikiTaka.prototype.marseilleTurn = this.marseilleTurn;
    TikiTaka.prototype.showta = this.showta;
    TikiTaka.prototype.bicicleta = this.bicicleta;
    TikiTaka.prototype.cuauhteminha = this.cuauhteminha;
    TikiTaka.prototype.aurelio = aurelio;
    TikiTaka.prototype.chop = chop;
    //these are STACKS if strongLeft is true, otherwise queues
    this.strongLeft=strongLeft
    this.readstreams = []
    this.writestreams = []
  }
//All of the write functions should allow you to use the buffer stack (or queue)
//if you don't have an origin file.
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

  passare(a, b, blind=false){
    //just a simple touch and pass from a to b
    if (!blind){
      this.firstTouch(b)
      var buffer = fs.readFileSync(a)
      fs.appendFileSync(b, buffer)

    }else{
        if(fs.existsSync(b)){
          var buffer = fs.readFileSync(a)
          fs.appendFileSync(b, buffer)
        }else{
          throw new Error("Cant do a blind pass if there is no recipient, your team will lose the ball!")
        }
    }

    return this
  }
  blindPass(a, b){
    //without checking if b exists, append a's content to b's file (should fail if b is not present)
    this.passare(a, b, true)
  }
  backwardsPass(a, b){
    //This is a touch and pass(append to dest), remove origin solution
    //this means we need to make sure a exists, if it doesn't, we cant use it.
    fs.existsSync(a)
    //remove the origin file after passing a to b (append a to b, do not overwrite)
    this.passare(a, b)

    this.fakey(a)
    return this
  }

  longPass(a,b){
    //IF b exists...Copy data from local filesystem's a to remote filesystem's b and
    //append a's contents to end of b file,
    //ELSE move a to b's location (have it take on b's name). delete a's origin location
  }
  //fake pass
  faux(){
     return this
  }

  fakey(a){
    //this creates a file if it does not exist, or deletes if it does.
      if(fs.existsSync(a)){
        fs.unlinkSync(a)
      }else{
        this.firstTouch(a)
      }
    return this
  }
  toeTheLine(a){
    //just deletes a file if it exists, otherwise throws an error
    try{
      fs.unlinkSync(a)
    }catch(err){
      //try not to err
      throw new Error("Don't go out of bounds with the ball!")
    }
  }

  chapeu(a, b){
    //IF b exists...overwrite b with a's contents
    //changing b's name to the a's name.
    //ELSE, move a's contents and its name
    //to that directory. delete a's origin location
    fs.copyFileSync(a, b);
    return this
  }
  rabona(a,b){
    //IF b exists...overwrite b with a's contents
    //changing b's name to a's name.
    //ELSE, move a to b's location taking on
    //b's name. delete a's origin location
    if(fs.existsSync(b)){
      this.chapeu(a, b)
    }else{

    }

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

  chop(){

  }
  //how do we do a replay of what happened? Some sort of animation that helps us debug?

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
  createBall(somepath){

  }
  createPitch(somepath){

  }
}


var play = new TikiTaka("./sometest/some.test", true, true)

console.log(play.pass("123", "456").blindPass("653", "lkdsfj"))
