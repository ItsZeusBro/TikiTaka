# TikiTaka
## Playing Spanish Football with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, and hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

## Some Basic Terminology

### Tiki Taka
The whole process of using a Tiki Taka chain of events

### Pelota 
We mean data

### Goalie 
We mean the file guard that prevents us from overwriting a file

### Getting passed the Defender
Using a function properly, without mistakes, otherwise you could lose the opportunity

## Moves (function primitives that you can chain together)

### First Touch (or just Touch)
Setting up a location for the ball to stop at (file location)
- In Futbol, your first touch needs to be good to make the defender miss

![GreatTouch](http://www.whoateallthepies.tv/wp-content/uploads/2012/06/1339961258914.gif)

### Double Touch 
Take an extra touch to create the path for the play, and then its location

![Double Touch](http://25.media.tumblr.com/049d3b7524f8066b328af64d06bb0bfe/tumblr_mp1qinImn11rdvztso1_500.gif)


### Tikki
Set up an fs Read Stream (Tikki)
![tikki](https://github.com/ItsZeusBro/TikiTaka/blob/d06d4467b709bda2fc3b0c44134ab79ac5eaa7e1/tikki.gif)

### Takka 
Set up a write stream (Takka)
![takka](https://github.com/ItsZeusBro/TikiTaka/blob/d06d4467b709bda2fc3b0c44134ab79ac5eaa7e1/takka.gif)

### Passare 
Normally passing a ball down a path (directory) and to stop at the intended location (file) (append the data)

![Passare](https://thumbs.gfycat.com/DearestDismalAustraliankelpie-size_restricted.gif)

### "Backwards Pass" 
Remove the origin file after passing the data to another file 
- even though this ended up being a shot, it's typically a pass.

![BackPass](https://c.tenor.com/J1O91U8m0_YAAAAC/ronaldo-vs-hungary-ronaldo-goal-vs-hungary.gif)

### Blind Pass
Pass data without looking to see if the recipient (file) is there (only do this if confident)

![BlindPass](https://c.tenor.com/Is08MWvpkigAAAAC/fifa-soccer.gif)


### Chapeu (Chip Pass)
"Pass over" or to "write over" the file from origin (while checking to see if the file exists)

![ChipPass](https://68.media.tumblr.com/25e2d76dfbc9c24b3f27d867cb45d0ec/tumblr_o7pf4jesjf1vrq5lso1_500.gif)


### Rabona
Blind chip pass, we mean to "pass over" or to "write over" the file without checking to see if the file exists (only do this if really confident)

![Rabona](https://c.tenor.com/9tH5GAo0jsEAAAAM/robert-lewandowski-lewandowski.gif)


### Faux (fake pass)
Take the file data, put into buffer, delete the origin

![fake pass](https://64.media.tumblr.com/5df3e0260385ea86c22d9dfa5d3255a1/8f68b6b7a4e53f11-52/s540x810/75d40cee9e6ed66149acca81816255c12fac72fd.gifv)


### Marseille Turn 
To set up a circle file stream

![Marseille](https://thumbs.gfycat.com/SilentFluidImago-max-1mb.gif)



### Showta (arabish for shot) 
To set up a socket or ipc to write to (shoot through)

![Showta](https://thumbs.gfycat.com/AgileViciousEastrussiancoursinghounds-size_restricted.gif)

### Bicicleta (bicycle shot in Portuguese)
To set up a socket or ipc to read from (backwards shot)

![Bicicleta](https://i.gifer.com/origin/3b/3b1d9a9ae1ba42041f655cd7925cb0c2.gif)


### "Cuauhteminha" 
#### we mean a trick pass to self. (moving the file to another location)

![Cuahteminha](https://i.makeagif.com/media/10-11-2015/kZ_ZND.gif)


### "Aurelio" 
#### we mean fakePass in one direction, and dribble to the other (put in buffer and create a writestream)

![Aurelio](https://media4.giphy.com/media/DbCErKp9tO14VpcA8j/giphy.gif)


### "goooal!" or "gooooal!" 
#### is console logged on the difficult play with three passes. "gooooal" for a difficult play with 4 passes, etc

