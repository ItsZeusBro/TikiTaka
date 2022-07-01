# TikiTaka
## Playing Spanish Football with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, and hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

### Basic Terminology


### Tiki Taka
#### The whole process of using Tiki Taka call


### Pelota 
#### We mean data


### Defender 
#### We mean the file guard that prevents us from overwriting it

### Touch 
#### we mean setting up a location for the ball to stop at (file location)
![GreatTouch](http://www.whoateallthepies.tv/wp-content/uploads/2012/06/1339961258914.gif)

### Double Touch 
#### we mean take an extra touch to create the path for the play, and then its location
![Double Touch](http://25.media.tumblr.com/049d3b7524f8066b328af64d06bb0bfe/tumblr_mp1qinImn11rdvztso1_500.gif)

### Passare 
#### We mean normally passing a ball down a path (directory) and to stop at the intended location (file) (append the data)
![Passare](https://thumbs.gfycat.com/DearestDismalAustraliankelpie-size_restricted.gif)

### Dribble
#### Set up an fs Read Stream (If you need to read the pitch before knowing what to do with it)
![Dribble](https://i.pinimg.com/originals/60/d9/9e/60d99e9935ea39dd1f84e9e6e58744c6.gif)

### Long Pass 
#### We mean to set up a write stream" (so, if i do a dribble to long pass, its a read to write stream)

![DribbleToLongPass](http://www.whoateallthepies.tv/wp-content/uploads/2013/08/isco-pass.gif)


### Blind Passare
#### We mean pass without looking to see if the recipient (file) is there (only do this if confident)
![BlindPass](https://c.tenor.com/Is08MWvpkigAAAAC/fifa-soccer.gif)


### Chip Pass 
#### We mean to "pass over" or to "write over" the file (while checking to see if the file exists)
![ChipPass](https://68.media.tumblr.com/25e2d76dfbc9c24b3f27d867cb45d0ec/tumblr_o7pf4jesjf1vrq5lso1_500.gif)


### Rabona
#### a blind chip pass, we mean to "pass over" or to "write over" the file without checking to see if the file exists (only do this if really confident)
![Rabona](https://c.tenor.com/9tH5GAo0jsEAAAAM/robert-lewandowski-lewandowski.gif)





### Faux (fake pass)
#### we mean take the file data, put into buffer, delete the origin
![fake pass](https://64.media.tumblr.com/5df3e0260385ea86c22d9dfa5d3255a1/8f68b6b7a4e53f11-52/s540x810/75d40cee9e6ed66149acca81816255c12fac72fd.gifv)


### Marseille Turn 
#### we mean to set up a circle file stream

![Marseille](https://thumbs.gfycat.com/SilentFluidImago-max-1mb.gif)




### Showta (arabish for shot) 
#### we mean to set up a socket or ipc for the data to shoot through

![Showta](https://thumbs.gfycat.com/AgileViciousEastrussiancoursinghounds-size_restricted.gif)



### "Backwards Pass" 
#### we mean remove the origin file after passing the data to another file 
- even though this ended up being a shot, it's typically a pass.

![BackPass](https://c.tenor.com/J1O91U8m0_YAAAAC/ronaldo-vs-hungary-ronaldo-goal-vs-hungary.gif)


### "Cuauhteminha" 
#### we mean a trick pass to self. (moving the file to another location)

![Cuahteminha](https://i.makeagif.com/media/10-11-2015/kZ_ZND.gif)

### "Aurelio" 
#### we mean fakePass in one direction, and dribble to the other (put in buffer and create a writestream)

![Aurelio](https://media4.giphy.com/media/DbCErKp9tO14VpcA8j/giphy.gif)

### "goooal!" or "gooooal!" 
#### is console logged on the difficult play with three passes. "gooooal" for a difficult play with 4 passes, etc

