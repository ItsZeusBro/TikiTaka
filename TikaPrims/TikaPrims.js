import * as path from "node:path"
import * as fs from "node:fs"

export class TikaPrims{
  //atomic functions
    mkdr(...dirs){
      //is able to make directory or returns false
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
      //just creates a file at path with fileName
      for (const p of paths) {
        try{
          if(!fs.existsSync(p)){
            fs.closeSync(fs.openSync(p, 'w'))
          }
        }catch{
          return false
        }
      }
    }
    rename(oldPath, newName){
      //renames a filepath to newName if filepath exists
      //else returns false
      try{
        var newPath = path.dirname(oldPath)+'/'+newName
        fs.renameSync(oldPath, newPath)
      }catch{
        return false
      }
    }

    copyAppend(a, b){
      //just copies a data to b location if both exists
      //else returns false
      try{
        if(fs.existsSync(a)&&fs.existsSync(b)){
          var buff = fs.readFileSync(a)
          fs.appendFileSync(b, buff)
        }
      }catch{
        return false
      }
    }

    truncate(...paths){
      //truncates file at filePath if it exists
      //else returns false
      for (const p of paths) {
        //check if is directory or file, then delete
        try{
          if(!fs.lstatSync(p).isDirectory()){
            fs.truncateSync(p, 0)
          }
        }catch{
          return false
        }
      }
    }

    del(recursive=false, ...paths){
      //node variadic paramter paths accepts file or dir paths
      for (const p of paths) {
        //check if is directory or file, then delete
        try{
          if(fs.lstatSync(p).isDirectory()){
            fs.rmSync(p, {recursive:recursive})
          }else{
            fs.unlinkSync(p)
          }
        }catch{
          return false
        }
      }
     
    }
}

