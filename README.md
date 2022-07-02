# TikiTaka
WARNING: Please do not invest time in the names of these functions yet, as they are subject to change. Its too early. It's just to give you an idea.
## Playing Spanish Futbol with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, with hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

Or

![TikiTaka1](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/TikiTaka.gif)

## File Operation Primitives:
These are the primitive use cases

### Creation Actions
1. Create file with name x
2. Create file with name y

### Renaming Actions
1. Rename x to y
2. Rename y to x
3. Substitute y name with z
4. Substitute x name with z

### Copy Actions
1. Append Copy x to y (append x data to y file)
2. Append Copy y to x (append y data to x file)
3. Substitute append z (buff or file) to y (append z data to y file)
4. Substitute append z (buff or file) to x (append z data to x file)

### Cleaning Actions
1. Truncate x
2. Truncate y
3. Destroy x
4. Destroy y

## File Operation Function Primitives:
With these primitive functions you can do all the aforementioned patterns. If you wish to do these over a network use an options parameter

1. mkdr(dir)
2. create(newFilePath, options)
3. rename(oldPath, newName, options)
4. copyAppend(a, b, options)
5. truncate(filePath, options)
6. del(filePath, options)



# Touches

### One Touch (or just Touch)
This is basically an independent move from a touch pass which combines the two. You can take a touch to set up a pass later in your move. This touches a file, so that a player moves to that location for the pass.

![GreatTouch](http://www.whoateallthepies.tv/wp-content/uploads/2012/06/1339961258914.gif)


### Two Touch 
This acts like a touch, but it just creates a dir if not present for the file.

![Double Touch](http://25.media.tumblr.com/049d3b7524f8066b328af64d06bb0bfe/tumblr_mp1qinImn11rdvztso1_500.gif)


### Medium Touch (single touch over a network)
This acts like a touch, but over a network.

### Long Touch (double touch over a network)
This acts like a double touch but over a network.

# Passes and Shots
A pass at its most basic level is just moving a file's contents 
- this is an abstract move, don't care too much about it. The following passes have meaning.

![normalPasses](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/normalPass.gif)

A shot at its most basic level is just moving a file's contents without mitigation guards

![shot](https://github.com/ItsZeusBro/TikiTaka/blob/da23304114bbf392486f81f1c3443a42ca1d20d9/Gifs/Showta.gif)

## IF A and B FILES EXISTS, this is a perfect pass or shot:

***Ground Passare or Shot***

![passare](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/Passare.gif)


***Backward Passare or Shot***

![backwardPass](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/BackPass.gif)

***Inside Pass or Shot***

***Outside***

***High Cross or Shot***

![highCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/highCross.gif)

***Low Cross of Shot***

![lowCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/lowcross.gif)

***Blind Pass or Shot***

![blindPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/blindpass.gif)

***Butt Pass or Shot***

![buttPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/buttpass.gif)

***Knee Pass or Shot***

***Head Pass or Shot***

***Right Shoulder Pass or Shot***

***Left Shoulder Pass or Shot***


##### WARNING: Chips and flicks overwrite

***Chapeu Pass or Shot***

![chipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chip.gif)

***Reverse Chapeu Pass or Shot***

![backwardChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chippass.gif)

***Inside Chapeu Pass or Shot***

***Outside Chapeu Pass or Shot***

***High Chapeu Pass or Shot***

***Low Chapeu Pass or Shot***

![lowChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/lowchip.gif)

***Rabona Inside Chip or Shot***

![RabonaFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Rabona.gif)

***Rabona Outside Chip or Shot***

***Bicicleta Pass or Shot***

![Bicileta](https://github.com/ItsZeusBro/TikiTaka/blob/e4d697bb5f478d31c6825c47f8237b9410c30994/Gifs/Bicicleta.gif)

***Rainbow Flick to Self or Shot***

![RainbowFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/rainbow.gif)

***Head Run***

![HeadRun](https://github.com/ItsZeusBro/TikiTaka/blob/9acfca686ec2618131c746c15e8156d3db6e35b4/Gifs/headRun.gif)




## IF A or B FILE DOES NOT EXIST, and you wish to mitigate this, you can do the following "ball spin" options

***Spin Up***

***Spin Up Diagonal Right***

***Spin Up Diagonal Left***

***Spin Down Diagonal Right***

***Spin Down Diagonal Left***


## IF A AND B FILES DO NOT Exist. Then you cant pass anything, Do this instead:

***Cuauhteminha***

![Cuauhteminha](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Cuauhteminha.gif)

## Fake Move Modifiers (Mitigation Substitutions)
These substitute C data or C name as a mitigation in case A or B does not exist


## Productivity mode sometimes forces us to break things, so if you don't mititgate it breaks
If b or a is not an existing file (or both), and you wish to break the program just ***dont add spin options*** to the contexts above.

## Dribbles
These are filter and position/offset logic for buffer substitution on A, if A is a stored buffer in a queue or stack (depending on if your left foot or right foot player)

***Dribble***
This is a pattern matching game to match patterns on a buffer and forward to files

![Dribble](https://github.com/ItsZeusBro/TikiTaka/blob/da23304114bbf392486f81f1c3443a42ca1d20d9/Gifs/dribble.gif)

***Chopping***
This chops files from a position to an offset
![Chopping](https://github.com/ItsZeusBro/TikiTaka/blob/27f5a9c220bd4ea491e1d1326cd32dcd5fee9c72/Gifs/chop.gif)


## TikiTaka
This is advanced subject about substituting streams for files. It uses a stack or queue for advanced moves that are round about pass schemes that are like dynamic plays. Very difficult to reason about and execute.

![TikiTaka](https://github.com/ItsZeusBro/TikiTaka/blob/da23304114bbf392486f81f1c3443a42ca1d20d9/Gifs/TikiTaka.gif)


## In the begning it will be a productivity first tool, then a game SHOULD be made with TikiTaka:

- An ***element*** is defined as a buffer, stream, or file
- Moving data (the ball) from one element to the other with protections is a ***pass***
- Moving data (the ball) from one element to the other without protections is considered a ***shot***
- ***Bad pass or shot*** is when you lose the ball to the other team. (only if your playing against someone) 
- ***A Miss*** can be mitigated with subsequent behavior to further your objectives. It means an exception was not thrown.
- A ***Dribble move*** is a filter on a buffer, before a shot or pass.
- A ***touch*** is an essential element to making sure you don't miss on the pass or the shot. 
  - Buf if you take good touches, you can set yourself up for style points on subsequent shots and passes, that come much later 
    - (which add up to moral victories and real secondary points)
- ***Vertical***  passes and shots are determined by what depth in your file tree you pass or shoot to.
- ***Horizontal*** passes (left or right) are done at the same level in your file tree. If you want to do a long cross you have to specifiy a location in your file tree that is at the same tree depth.  If you don't meet this criteria its a miss (which can be mitigated), but is not considered losing the ball. Losing the ball requires that it go out of bounds (exception), or that you are playing against someone (which is a miss against an oppnent).
