
import * as path from "node:path"
const time = new Date();
import * as fs from "node:fs"

export class TikiTaka{
    //this is a blind pass, it assumes the recipient file is ready to recieve it
    blindPass(origin, dest){
    }
    //this is a blind chip pass, it assumes the recipient file is ready to recieve
    //the ball and passes the ball over the defender (overwrites the file)
    blindChipPass(origin, dest){

    }
    //creates a file assumes file doesn't exist
    touch(filepath){
        fs.closeSync(fs.openSync(filepath, 'w'));
    }
    //touch a file, if the dir doesn't exist touch that first
    touchTouch(somepath, file=false, overwrite=false){
      //make the dir irrespective of the mode, because its always needed
      //for the intended result
      this.somepath=somepath
      console.log(somepath)
      try{
          fs.mkdirSync(this.somepath)
      } catch(err){
          console.log("dir already exists")
      }
      if (file){
      //In File mode
      //only call these if we are in file mode as somepath is defined as
      //a directory
      this.filename = path.basename(this.somepath)
      this.extension = this.filename.split('.').pop()
      this.dirname = path.dirname(this.somepath)+'/'

      //-->(tikitaka will create file if needed)
          if(!fs.existsSync(this.somepath)){
              //File mode and dir exists, but the file does not
              //-->just create it, overwrite is irrelevant
              return this.touch(this.somepath)
          }else if(overwrite){
              //File mode, dir exists, file exists, overwrite option is
              //true
              //-->create the file again to erase it
              return this.touchChipPass(this.somepath)
          }else{
              //File mode, dir exists, file exists, overwrite is false
              //-->do nothing
              return
          }
      }
    }
    //creates file and whatever path is needed, if it already existed,
    //don't overwrite it, just append origin data
    touchTouchPass(orgin, dest, file=false){
      //this does a touchTouchPath, then passes origin contents to the path
      this.touchTouch(dest, false, false)
      //mv contents from one file to the next
      this.pass(origin, dest)
    }
    //creates file and whatever path is needed, if it already existed, overwrite
    //it with data from origin
    touchTouchChipPass(origin, dest, file=false){
      this.touchTouch(dest, file, true)
      this.chipPass(origin, dest)
    }

    //touch file if it doesnt exist and overwrite if it does exist
    touchChipPass(filepath){
      try {                                           //fs.utimesSync is used here to prevent existing
          fs.utimesSync(filepath, time, time);        //file contents from being overwritten.                                                        //It also updates the last modification timestamp
        } catch (err) {                               //of the file, which is consistent with what POSIX
          fs.closeSync(fs.openSync(filepath, 'w'));   //touch does. (Thanks Remarkable Mark!)
        }
    }
    fakePass(){

    }
}

new TikiTaka("./sometest/some.test", true, true)
