import * as path from "node:path"
import * as fs from "node:fs"

export class TikiTakaPrims{
  //atomic functions
    mkdr(dir){
      //is able to make directory or returns false
      try{
        if(!fs.existsSync(dir)){
          fs.mkdirSync(dir)
        }
      }catch{
        return false
      }
    }
    create(newFilePath){
      //just creates a file at path with fileName
      try{
        if(!fs.existsSync(newFilePath)){
          fs.closeSync(fs.openSync(newFilePath, 'w'))
        }
      }catch{
        return false
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

    truncate(filePath){
      //truncates file at filePath if it exists
      //else returns false
      try{
        fs.truncateSync(filePath, 0)
      }catch{
        return false
      }
    }

    del(filePath){
      //del file at filePath
      //else returns false
      try{
        fs.unlinkSync(filePath)
      }catch{
        return false
      }
    }
}

