import * as fs from "node:fs"
import {Comet} from "../Comet/Comet.js"

//TikTak are TikaTaka primitive functions
export class TikTak extends Comet{
    mkdr(...paths){
      this.comet('TikTak.mkdr')
      for (const dir of paths) {
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
      this.comet('TikTak.create')
      for (const p of paths) {
        try{
          fs.closeSync(fs.openSync(p, 'w'))
        }catch{
          return false
        }
      }
    }

    rename(olP, newP){
      this.comet('TikTak.rename')
      try{
        fs.renameSync(olP, newP)
      }catch{
        return false
      }
    }

    copyAppend(a, b){
      this.comet('TikTak.copyAppend')
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
      this.comet('TikTak.truncate')
        try{
          if(fs.existsSync(p)){
            fs.truncateSync(p, n)
          }
        }catch{
          return p
        }
    }

    del(p){
      this.comet('TikTak.del')
        try{
          if(fs.lstatSync(p).isDirectory()){
            fs.rmSync(p, {recursive:true})
          }else{
            if (fs.existsSync(p)){
              fs.unlinkSync(p)
            }
          }
        }catch{
          return false
        }
    }

    write(p, data){
      this.comet('TikTak.write')
      if(Buffer.isBuffer(data)){
          fs.writeSync(fs.openSync(p, 'a'), data)
      }else{
          fs.writeSync(fs.openSync(p, 'a'), Buffer.from(data))
      }
    }

    overwrite(p, data){
      this.comet('TikTak.overwrite')
      if(Buffer.isBuffer(data)){
        if (fs.existsSync(p)){
            fs.writeSync(fs.openSync(p, 'w'), data)
        }
      }else{
        if(fs.existsSync(p)){
          fs.writeSync(fs.openSync(p, 'w'), Buffer.from(data))
        }
      }
    }

    read(p){
      this.comet('TikTak.read')
      if(fs.existsSync(p)){
        return fs.readFileSync(p)
      }
    }

    isObject(a){
      this.comet('TikTak.isObject')
      return (!!a) && (a.constructor === Object);
    };
}