import * as path from "node:path"
import * as fs from "node:fs"
import {Comet} from "../Comet/Comet.js"
export class TikaPrims extends Comet{

    mkdr(...dirs){
      this.comet('TikaPrims.mkdr')
      for (const dir of dirs) {
        try{
          if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
          }
        }catch{
          return false
        }
      }
    }

    create(...paths){
      this.comet('TikaPrims.create')
      for (const p of paths) {
        try{
          fs.closeSync(fs.openSync(p, 'w'))
        }catch{
          return false
        }
      }
    }

    rename(olP, newP){
      this.comet('TikaPrims.rename')
      try{
        fs.renameSync(olP, newP)
      }catch{
        return false
      }
    }

    copyAppend(a, b){
      this.comet('TikaPrims.copyAppend')
      try{
        if(fs.existsSync(a)&&fs.existsSync(b)){
          var buff = fs.readFileSync(a)
          fs.appendFileSync(b, buff)
        }
      }catch{
        return false
      }
    }

    truncate(p, n){
      this.comet('TikaPrims.truncate')
        try{
          if(fs.existsSync(p)){
            fs.truncateSync(p, n)
          }
        }catch{
          return p
        }
    }

    del(p){
      this.comet('TikaPrims.del')
        try{
          if(fs.lstatSync(p).isDirectory()){
            fs.rmSync(p, {recursive:true})
          }else{
            fs.unlinkSync(p)
          }
        }catch{
          return false
        }
    }

    write(p, data){
      this.comet('TikaPrims.write')
      if(Buffer.isBuffer(data)){
          fs.writeSync(fs.openSync(p, 'a'), data)
      }else{
          fs.writeSync(fs.openSync(p, 'a'), Buffer.from(data))
      }
    }

    overwrite(p, data){
      this.comet('TikaPrims.overwrite')
      if(Buffer.isBuffer(data)){
          fs.writeSync(fs.openSync(p, 'w'), data)
      }else{
          fs.writeSync(fs.openSync(p, 'w'), Buffer.from(data))
      }
    }

    read(p){
      this.comet('TikaPrims.read')
      return fs.readFileSync(p)
    }

    isObject(a){
      this.comet('TikaPrims.isObject')
      return (!!a) && (a.constructor === Object);
    };
}