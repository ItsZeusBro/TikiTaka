# TikiTaka
## Playing Spanish Futbol with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, with hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

Or

![TikiTaka1](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/TikiTaka.gif)

## In the begning it will be a productivity first tool, then this game should be made with TikiTaka:

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


# Touches

### First Touch (or just Touch)
This is basically an independent move from a touch pass which combines the two. You can take a touch to set up a pass later in your move. This touches a file, so that a player moves to that location for the pass.

![GreatTouch](http://www.whoateallthepies.tv/wp-content/uploads/2012/06/1339961258914.gif)


### Double Touch 
This acts like a touch, but it just creates a dir if not present for the file.

![Double Touch](http://25.media.tumblr.com/049d3b7524f8066b328af64d06bb0bfe/tumblr_mp1qinImn11rdvztso1_500.gif)


### Medium Touch (single touch over a network)
This acts like a touch, but over a network.

### Long Touch (double touch over a network)
This acts like a double touch but over a network.

# Passes
A pass at its most basic level is just moving a file's contents 
- this is an abstract move, don't care too much about it. The following passes have meaning.

![normalPasses](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/normalPass.gif)

## If B is an existing file (perfect pass) you can do the following:

1. append a to b, keep a's old file, keep b's file name (passare)

![passare](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/Passare.gif)


2. append a to b, keep a's old file, rename b's to a's name (backward pass)

![backwardPass](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/BackPass.gif)

3. append a to b, destroy a's old file, keep b's file name (high cross pass)

![highCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/highCross.gif)

4. append a to b, destroy a's old file, rename b to a's name (low cross pass)

![lowCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/lowcross.gif)

5. append a to b, keep a's old file, rename b's to c's name (blind pass)

![blindPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/blindpass.gif)

6. append a to b, destroy a's old file, rename b to c's name (butt pass)

![buttPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/buttpass.gif)

##### WARNING: Chips and flicks overwrite

7. overwrite b with a, keep a's old file, keep b's file name (Chapeu pass)

![chipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chip.gif)


8. overwrite b with a, keep a's old file, rename b to a's name (backward chip pass)

![backwardChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chippass.gif)

9. overwrite b with a, destroy a's old file, keep b's file name (high chip pass)

10. overwrite b with a, destroy a's old file, rename b to a's name (low chip pass)

![lowChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/lowchip.gif)

11. overwrite b with a, keep a's old file, rename b to c's name (rabona flick)

![RabonaFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Rabona.gif)

12. overwrite b with a, destroy a's old file, rename b to c's name (rainbow)

![RainbowFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/rainbow.gif)

## If a and b do not exist. Then you cant pass anything.

1. does almost nothing except mitigate (Cuauhteminha)

![Cuauhteminha](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Cuauhteminha.gif)


## Pass Mitigation in case A or B was not a file (spin options)
### If b is not an existing file, and you wish to mitigate it, you can do the following option flags

1. move a to b's directory, keep a's old location, change a's name at new destination to b's (spin up)


2. move a to b's directory, keep a's old location, keep a's name at new destination (spin down)


3. move a to b's directory, destroy a's old file, change a's name at new destination to b's (spin right)


4. move a to b's directory, destroy a's old file,  keep a's name at new destination (spin left)


5. dont move a to b, change a's file name locally to b's name (spin diagonal left)


6. don't move a to b, don't change a's name locally (basically does nothing) (spin diagonal right)

### If a is not an existing file, and you wish to mitigate it, you can do the following option flags:

7. move b to a's directory, keep b's old location, change b's name at new destination to a's (spin up)


8. move b to a's directory, keep b's old location, keep b's name at new destination (spin down)


9. move b to a's directory, destroy b's old file, change b's name at new destination to a's (spin right)


10. move b to a's directory, destroy b's old file,  keep b's name at new destination (spin left)


11. dont move b to a, change b's file name locally to a's name (spin diagonal left)


12. don't move b to a, don't change b's name locally (basically does nothing) (spin diagonal right)


## Productivity mode sometimes forces us to break things
If b or a is not an existing file, and you wish to break the program just ***dont add spin options*** to the 12 contexts above.
If a and b do not exist. Then you can't pass anything, but a break adds another 1.



## other advanced topics
This does not include all the things that Tiki Taka does with streams (which is not a touch then pass, they are single touch passes with endless combinations).

If you do dribbling tricks like Chopping, they create the aforementioned buffer replacements on the pass. Buffers allow you to "process the data" before a pass or shot, you still end up in the same pass numbers above, but the combinations of real things you could before the pass are endless. These filters add to the complexity of the game to complete "objectives" and score "goals".


