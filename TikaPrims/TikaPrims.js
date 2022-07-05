import * as path from "node:path"
import * as fs from "node:fs"

export class TikaPrims{

    mkdr(...dirs){
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
      for (const p of paths) {
        try{
          fs.closeSync(fs.openSync(p, 'w'))
        }catch{
          return false
        }
      }
    }

    rename(olP, newP){
      try{
        fs.renameSync(olP, newP)
      }catch{
        return false
      }
    }

    copyAppend(a, b){
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
        try{
          if(fs.existsSync(p)){
            fs.truncateSync(p, n)
          }
        }catch{
          return p
        }
    }

    del(p){
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
      if(Buffer.isBuffer(data)){
          fs.writeSync(fs.openSync(p, 'a'), data)
      }else{
          fs.writeSync(fs.openSync(p, 'a'), Buffer.from(data))
      }
    }

    overwrite(p, data){
      if(Buffer.isBuffer(data)){
          fs.writeSync(fs.openSync(p, 'w'), data)
      }else{
          fs.writeSync(fs.openSync(p, 'w'), Buffer.from(data))
      }
    }

    read(p){
      return fs.readFileSync(p)
    }

    isObject(a){
      return (!!a) && (a.constructor === Object);
    };
}