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
    write(){

    }
    read(){

    }

    rename(oldPath, newPath){
      //renames a filepath to newName if filepath exists
      //else returns false
      try{
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
    //takes object with paths associated with n numbers of bytes to truncate to
    truncate(paths, n_s){
      //truncates file at filePath if it exists to n number of bytes
      //else returns false
      var failures = []
      var zipped = paths.map(function(e, i) {return [e, n_s[i]]});
      zipped.forEach((element)=>{
        try{
          if(fs.existsSync(element[0])){
            fs.truncateSync(element[0], element[1])
          }
        }catch{
          //this is a mitigation technique. Offensive programming
          //does not tolerate failures, but encourages mitigation.
          failures.push(element[0])
        }
      })
      return failures
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

