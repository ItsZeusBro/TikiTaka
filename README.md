# TikiTaka
## Playing Spanish Futbol with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, with hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

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
A pass at its most basic level is just moving a file's contents (.ball for game mode (with special data inside), any file in productivity mode)

### Passare 
This is a normal pass
![Passare](https://thumbs.gfycat.com/DearestDismalAustraliankelpie-size_restricted.gif)


### "Backwards Pass" 

![BackPass](https://c.tenor.com/J1O91U8m0_YAAAAC/ronaldo-vs-hungary-ronaldo-goal-vs-hungary.gif)


### Blind Pass

![BlindPass](https://c.tenor.com/Is08MWvpkigAAAAC/fifa-soccer.gif)

### Butt Pass


![ButtPass](https://c.tenor.com/i9BI3BV7bf4AAAAC/neymar-passe-neymar.gif)

### Cross

![LongPass](https://i.gifer.com/8Rpb.gif)


### Chapeu (All Chip passes and flick passes overwrite, becareful)

![ChipPass](https://68.media.tumblr.com/25e2d76dfbc9c24b3f27d867cb45d0ec/tumblr_o7pf4jesjf1vrq5lso1_500.gif)


### Rabona Chapeu (All Chip Pass's overwrite, becareful)

![Rabona](https://c.tenor.com/9tH5GAo0jsEAAAAM/robert-lewandowski-lewandowski.gif)


### Rainbow (flick pass to self)

![Rainbow](Gifs/rainbow.gif)

### "Cuauhteminha" 

![Cuahteminha](https://i.makeagif.com/media/10-11-2015/kZ_ZND.gif)

### Faux (fake pass)

![fake pass](https://64.media.tumblr.com/5df3e0260385ea86c22d9dfa5d3255a1/8f68b6b7a4e53f11-52/s540x810/75d40cee9e6ed66149acca81816255c12fac72fd.gifv)

### "Aurelio" 

![Aurelio](https://media4.giphy.com/media/DbCErKp9tO14VpcA8j/giphy.gif)


# Passing Modifiers
## Tikki Takka


### Tikki


![tikki](https://github.com/ItsZeusBro/TikiTaka/blob/d06d4467b709bda2fc3b0c44134ab79ac5eaa7e1/tikki.gif)

### Takka 

![takka](https://github.com/ItsZeusBro/TikiTaka/blob/d06d4467b709bda2fc3b0c44134ab79ac5eaa7e1/takka.gif)


### Chopping

![Chop](https://github.com/ItsZeusBro/TikiTaka/blob/4ed7ebc8375397d99fd1f525611e658a73a85a16/Gifs/chop.gif)

### Marseille Turn 

![Marseille](https://thumbs.gfycat.com/SilentFluidImago-max-1mb.gif)


# Other Moves Not Related to Passing
### Fakey

![fakey](http://25.media.tumblr.com/tumblr_mekqr4Bdjf1rjdfzto1_500.gif)

### Showta (arabish for shot) 

![Showta](https://thumbs.gfycat.com/AgileViciousEastrussiancoursinghounds-size_restricted.gif)

### Bicicleta (bicycle shot in Portuguese)

![Bicicleta](https://i.gifer.com/origin/3b/3b1d9a9ae1ba42041f655cd7925cb0c2.gif)


### Toe'ng the Line (sideline play)

![ToeTheLine](https://github.com/ItsZeusBro/TikiTaka/blob/8e3acf1772a2650658c5725087bcb184f8527310/Gifs/toetheline.gif)





## Pass Descriptions

### If B is an existing file (perfect pass) you can do the following:

1. append a to b, keep a's old file, keep b's file name (passare)
2. append a to b, keep a's old file, rename b's to a's name
3. append a to b, destroy a's old file, keep b's file name
4. append a to b, destroy a's old file, rename b to a's name
5. overwrite b with a, keep a's old file, keep b's file name
6. overwrite b with a, keep a's old file, rename b to a's name
7. overwrite b with a, destroy a's old file, keep b's file name
8. overwrite b with a, destroy a's old file, rename b to a's name
9. append a to b, keep a's old file, rename b's to c's name
10. append a to b, destroy a's old file, rename b to c's name
11. overwrite b with a, keep a's old file, rename b to c's name
12. overwrite b with a, destroy a's old file, rename b to c's name

### Mitigation in case B was not a file (mitigators are flag options)
If b is not an existing file, and you wish to mitigate, you can do the following:
1. move a to b's directory, keep a's old location, change a's name at new destination to b's
2. move a to b's directory, keep a's old location, keep a's name at new destination
3. move a to b's directory, destroy a's old file, change a's name at new destination to b's
4. move a to b's directory, destroy a's old file,  keep a's name at new destination
5. dont move a to b, change a's file name locally to b's name
6. don't move a to b, don't change a's name locally (basically does nothing)

If b is not an existing file, and you wish to break the program, that adds another 6
If a does not exist, and b is an existing file, you can add another 6 for mitigation.
If a does not exist, and b is an existing file, you can add another 6 that break the program.
If a and b do not exist. Then you cant pass anything, but mitigation adds another 1 if the program does nothing
If a and b do not exist. Then you can't pass anything, but a break adds another 1.

All together 8+6+20 = 44. But that's not all! If you do long passes (over a tcp socket) this doubles to 88.

If you add modifiers, which substitute a buffer for a file, then you can add another 8 patterns, leaving us at 96.
If you add modifiers, and b doesn't exist and a is a buffer, then you can add another 20. This leaves us at 116.

This does not include all the things that Tiki Taka does with streams (which is not a touch then pass, they are single touch passes with endless combinations).

If you do dribbling tricks like Chopping, they create the aforementioned buffer replacements on the pass. T buffers allow you to "process the data" before a pass or shot, you still end up in the same pass numbers above, but the combinations of real things you could before the pass are endless. These filters add to the complexity of the game to complete "objectives" and score "goals".


