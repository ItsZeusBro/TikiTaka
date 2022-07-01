import * as path from "node:path"
const time = new Date();
import * as fs from "node:fs"

export class TikiTaka{
  constructor(){
    TikiTaka.prototype.pass = function(){
      console.log("pass...")
      return this
    }
    TikiTaka.prototype.blindPass = function(){
      console.log("blind pass...")
      return this
    }
    TikiTaka.prototype.rabona = function(){
      console.log("rabona...")
      return this
    }
    TikiTaka.prototype.fakePass = function(){
      console.log("fake pass...")
      return this
    }
    TikiTaka.prototype.touch = function(){
      console.log("touch...")
      return this
    }
    TikiTaka.prototype.touchTouch = function(){
      console.log("touch touch...")
      return this
    }
    TikiTaka.prototype.touchTouchPass = function(){
      console.log("touch touch...")
      return this
    }

    TikiTaka.prototype.touchTouchChipPass = function(){
      console.log("touch touch chip pass...")
      return this
    }

    TikiTaka.prototype.touchChipPass = function(){
      console.log("touch chip pass...")
      return this
    }

    TikiTaka.prototype.dribble = function(){
      console.log("dribble...")
      return this
    }


  }

    // //this is a blind pass, it assumes the recipient file is ready to recieve it
    // pass(origin, dest){
    //
    // }
    // blindPass(origin, dest){
    // }
    //
    // rabona(origin, dest){
    //
    // }
    // fakePass(){
    //
    // }
    // touch(filepath){
    //     fs.closeSync(fs.openSync(filepath, 'w'));
    // }
    // touchTouch(somepath, file=false, overwrite=false){
    //
    //   this.somepath=somepath
    //   console.log(somepath)
    //   try{
    //       fs.mkdirSync(this.somepath)
    //   } catch(err){
    //       console.log("dir already exists")
    //   }
    //   if (file){
    //
    //   this.filename = path.basename(this.somepath)
    //   this.extension = this.filename.split('.').pop()
    //   this.dirname = path.dirname(this.somepath)+'/'
    //
    //       if(!fs.existsSync(this.somepath)){
    //
    //           return this.touch(this.somepath)
    //       }else if(overwrite){
    //
    //           return this.touchChipPass(this.somepath)
    //       }else{
    //
    //           return
    //       }
    //   }
    // }
    //
    // touchTouchPass(orgin, dest, file=false){
    //   this.touchTouch(dest, false, false)
    //   this.pass(origin, dest)
    // }
    //
    // touchTouchChipPass(origin, dest, file=false){
    //   this.touchTouch(dest, file, true)
    //   this.chipPass(origin, dest)
    // }
    //
    // touchChipPass(filepath){
    //   try {                                           //fs.utimesSync is used here to prevent existing
    //       fs.utimesSync(filepath, time, time);        //file contents from being overwritten.                                                        //It also updates the last modification timestamp
    //     } catch (err) {                               //of the file, which is consistent with what POSIX
    //       fs.closeSync(fs.openSync(filepath, 'w'));   //touch does. (Thanks Remarkable Mark!)
    //     }
    // }

}


var play = new TikiTaka("./sometest/some.test", true, true)

console.log(play.pass().touchChipPass().touchTouchChipPass().rabona())
