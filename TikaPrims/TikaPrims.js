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
    //This deletes your file contents if you run this on an existing file 
    create(...paths){
      //just creates a file at path with fileName
      for (const p of paths) {
        try{
          fs.closeSync(fs.openSync(p, 'w'))
        }catch{
          return false
        }
      }
    }

    rename(olP, newP){
      //renames a filepath to newName if filepath exists
      //else returns false
      try{
        fs.renameSync(olP, newP)
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
    //takes object with paths associated with n numbers of bytes to truncate to
    truncate(paths){
      //truncates file at filePath if it exists to n number of bytes
      //else returns false
      var failures = []

      for (const [key, value] of Object.entries(paths)){   
        try{
          if(fs.existsSync(key)){
            fs.truncateSync(key, value)
          }
        }catch{
          //this is a mitigation technique. Offensive programming
          //does not tolerate failures, but encourages mitigation.
          failures.push(key)
        }
      }
      return failures
    }

    del(recurse=false, ...paths){
      //node variadic paramter paths accepts file or dir paths
      for (const p of paths) {
        //check if is directory or file, then delete
        try{
          if(fs.lstatSync(p).isDirectory()){
            fs.rmSync(p, {recursive:recurse})
          }else{
            fs.unlinkSync(p)
          }
        }catch{
          return false
        }
      }
    }

    write(paths){
      //if files don't exist, create and append
      //if they do, append
      for (const [path, data] of Object.entries(paths)){   
        //a flag appends or creates file and appends if it doesn't exist
        if(Buffer.isBuffer(data)){
            fs.writeSync(fs.openSync(path, 'a'), data)
        }else{
            fs.writeSync(fs.openSync(path, 'a'), Buffer.from(data))
        }
      }
    }
    overwrite(paths){
      //if files don't exist, create and write
      //if they do, writeover
      for (const [path, data] of Object.entries(paths)){   
        if(Buffer.isBuffer(data)){
            fs.writeSync(fs.openSync(path, 'w'), data)
        }else{
            fs.writeSync(fs.openSync(path, 'w'), Buffer.from(data))
        }
      }
    }
    read(){
       
    }
}

