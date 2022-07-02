# TikiTaka
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
1. create()
2. rename()
3. copy()
4. truncate()
5. delete()



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

## IF A and B FILES EXISTS, this is a perfect pass and you can do the following:

1. keep b's file name, append a data to b file, keep a's old file in tact  (***Passare***)

![passare](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/Passare.gif)


2. rename b's file name to a's name,  append a data to b file, keep a's old file in tact  (***Backward Pass***)

![backwardPass](https://github.com/ItsZeusBro/TikiTaka/blob/be3c654df1625a48a4a05243d1d990ca0b2bd812/Gifs/BackPass.gif)

3. keep b's file name, append a data to b file, truncate a's old file  (***Inside Pass***)


4. rename b's file name to a's name,  append a data to b file, truncate a's old file  (***Outside Pass***)


5. keep b's file name, append a data to b file, then destroy a's old file,  (***High Cross***)

![highCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/highCross.gif)

6. rename b to a's name, append a data to b file, destroy a's old file  (***Low Cross***)

![lowCross](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/lowcross.gif)

7. rename b's to some c name, append a data to new b named file, keep a's old file (***Blind Pass***)

![blindPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/blindpass.gif)

8. rename b's to some c name, append a data to new b named file, destroy a's old file (***Butt Pass***)

![buttPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/buttpass.gif)

9. rename b's to some c name, append a data to new b named file, truncate a's old file (***Knee Pass***)


10. rename b's to some c name, append a data to new b named file, truncate a's old file (***Head Pass***)


##### WARNING: Chips and flicks overwrite

11. keep b's file name, overwrite b file with a data, keep a's old file in tact (***Chapeu Pass*** [chip pass] is an abstract pass) 
  - Ignore the fact that this displays the rabona trick. The actual rabona trick is down below)

![chipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chip.gif)

12. rename b to a's name, overwrite b file with a data, keep a's old file in tact, (***Backward Chapeu Pass***)

![backwardChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/chippass.gif)

13. keep b's file name, overwrite b file with a data, truncate a's old file (***Inside Chapeu Pass*** ) 

14. rename b to a's name, overwrite b file with a data, truncate a's old file (***Outside Chapeu Pass***)

13. keep b's file name, overwrite b file with a data, destroy a's old file,  (***High Chapeu Pass***)

14. rename b to a's name, overwrite b file with a data, destroy a's old file,  (***Low Chapeu Pass***)

![lowChipPass](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/lowchip.gif)

15. rename b to c name, overwrite b file with a data, keep a's old file  (***Rabona Inside Chip Pass***)

![RabonaFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Rabona.gif)

16. rename b to c name, overwrite b file with a data, truncate a file  (***Rabona Outside Chip Pass***)


17. rename b to c name, overwrite b file with a data, destroy a's old file,  (***Rainbow Flick Pass***)

![RainbowFlick](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/rainbow.gif)



## IF B FILE DOES NOT EXIST, and you wish to mitigate this, you can do the following "ball spin" or "Faux" options

1. touch b, move a to b's directory, keep a's old location, (spin up)

2. touch b, move a to b's directory, truncate a file, (spin up diagonal)

3. touch a at b location, move a data to "new a", keep a's old file as well, (spin down)

4. touch a at b location, move a data to "new a", truncate a file, (spin down diagonal)

5. touch b, move a data to "new b", destroy a's old file (spin right)

6. touch a at b location, move a data to "new a", destroy a's old file, (spin left)


7. rename a file name with b name, touch b, move a data to would b file location, replace b's name with a's name (spin diagonal left)

8. rename a file name with b name, touch b, move a data to would b file location, dont replace b's name with a's name (spin diagonal right)

9. rename a file name with b name, touch b, move a data to would b file location, truncate a


10. substitute would b name with a mitigation name c, pass a data to new c file at would b location (Faux Pass)


### IF A FILE DOES NOT EXIST, and you wish to mitigate this, you can do the following "ball spin" options

11. touch b's name at would a location, move b file data to a directory, keep b old file in tact, (spin up)


12. touch b's name at would a location, move b to a's directory, destroy b's old location (spin down)


13. touch a, move b to a's directory, destroy b's old file,  (spin right)


14. touch a, move b to a's directory, keep b's old file (spin left)


15. touch b's name at would a location, touch a's name at would b location, copy b data to a (spin diagonal left)


16. touch b's name at would a location, touch a's name at would b location, move b data to a, truncate b file (spin diagonal left)

17. touch a's name at would a location, Substitute would be A data with a mitigation string C or file B data (Faux Pass)


## IF A AND B FILES DO NOT Exist. Then you cant pass anything, pass a Cuahteminha flag to mitigate this

1. does nothing except mitigate the problem (***Cuauhteminha***)

![Cuauhteminha](https://github.com/ItsZeusBro/TikiTaka/blob/786ef0f0dc08a2572688cf82b39153e4fff5b177/Gifs/Cuauhteminha.gif)

## Productivity mode sometimes forces us to break things, so if you don't mititgate it breaks
If b or a is not an existing file, and you wish to break the program just ***dont add spin options*** to the 12 contexts above.
If a and b do not exist. Then you can't pass anything, but a break adds another 1.


## other advanced topics
This does not include all the things that Tiki Taka does with streams (which is not a touch then pass, they are single touch passes with endless combinations).

If you do dribbling tricks like Chopping, they create the aforementioned buffer replacements on the pass. Buffers allow you to "process the data" before a pass or shot, you still end up in the same pass numbers above, but the combinations of real things you could before the pass are endless. These filters add to the complexity of the game to complete "objectives" and score "goals".



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
