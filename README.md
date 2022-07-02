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
These are the primitive use cases that can be performed locally or over a network

### Creation Actions (ball touches)
1. Create file with name x
2. Create file with name y

### Renaming Actions (a path run)
1. Rename x to y
2. Rename y to x
3. Substitute y name with z
4. Substitute x name with z

### Copy Actions (Basic Pass Types or Basic Shot Types, depending on modifiers used and exception possibilities)
1. Append Copy x to y (append x data to y file)
2. Append Copy y to x (append y data to x file)
3. Substitute append z (buff or file) to y (append z data to y file)
4. Substitute append z (buff or file) to x (append z data to x file)

### Streaming and buffer Actions (TikiTaka plays, Dribbles, and Passes, into shots) 
1. Stream from a directly to b
2. Stream from a, filter the buffer or truncate b, stream to b
3. Stream from a, push streamable on stack or queue, pop [optionally read and filter], then stream to b [optionally truncate first]
4. Read a, place in buffer, push buffer on stack, pop later [optionally read and filter], then write to b [optionally truncate first]
5. Read a, place in buffer, push to queue, pop queue immediately [optionally read and filter], write to a or b [optionally truncate first]

### Cleaning Actions (Pass or Shot modifiers)
1. Truncate x
2. Truncate y
3. Destroy x
4. Destroy y


## File Operation Function Primitives:
With these primitive functions you can do all the aforementioned patterns. If you wish to do these over a network use an options parameter

1. mkdr(dir)
2. create(newFilePath, [options])
4. rename(oldPath, newName, [options])
5. copyAppend(a, b, [options])
6. stream(a, [b], [options]) //grabs a read stream, or streams from a to b, options can contain filter actions
7. wstream(a, [options]) //grabs a write stream, and can attach pre-write filter actions
9. truncate(filePath, [options])
10. del(filePath, [options])


# Compound actions 
## (These are TikiTaka and Futbol moves, that we want to hook up to a graphical physics replay engine oneday)
I believe that using this type of scheme we would eventually see terminals with graphical replays one day (just for fun)

| **Touches**                      | Parameters | Fs Explanation                                                         | Futbol Explanation | Gifs |
|----------------------------------|------------|------------------------------------------------------------------------|--------------------|------|
| oneTouch(a, options)             |            |                                                                        |                    |      |
| twoTouch(a, b, [options])        |            |                                                                        |                    |      |
| **Passes and Shots**             |            |                                                                        |                    |      |
| passare(a, b [options])          |            |                                                                        |                    |      |
| passagioInverso(a, b, [options]) |            |                                                                        |                    |      |
| hoherTritt(a, b, [options])      |            |                                                                        |                    |      |
| niedrigerTritt(a, b, [options])  |            |                                                                        |                    |      |
| noLooker(a, b, [options])        |            |                                                                        |                    |      |
| butter(a, b, [options])          |            |                                                                        |                    |      |
| chapeu(a, b, [options])          |            |                                                                        |                    |      |
| chapeuInverso(a, b, [options])   |            |                                                                        |                    |      |
| rabona(a, b, [options])          |            |                                                                        |                    |      |
| bicicleta(a, b, [options])       |            |                                                                        |                    |      |
| **Dribbles**                     |            | All Dribbles are basically special purpose filters on a buffer         |                    |      |
| dribble(a, [options])            |            | Meant to be used to push data into buffer for filtering and processing |                    |      |
| faux((result)=>{})               |            |                                                                        |                    |      |
| shimmy((result)=>{})             |            |                                                                        |                    |      |
| legWiggle((result)=>{})          |            |                                                                        |                    |      |
| marseilleTurn((result)=>{})      |            |                                                                        |                    |      |
| ronaldoChop((result)=>{})        |            |                                                                        |                    |      |
| nutmeg((result)=>{})             |            |                                                                        |                    |      |
| aurelio((result)=>{})            |            |                                                                        |                    |      |
| cruyffTurn((result)=>{})         |            |                                                                        |                    |      |
| elastico((result)=>{})           |            |                                                                        |                    |      |
| okocha((result)=>{})             |            |                                                                        |                    |      |
| revelino((result)=>{})           |            |                                                                        |                    |      |
| fakePullBack((result)=>{})       |            |                                                                        |                    |      |
| cut((result)=>{})                |            |                                                                        |                    |      |
| cuauhteminha((result)=>{})       |            |                                                                        |                    |      |
| insideHook((result)=>{})         |            |                                                                        |                    |      |
| mathewsCut((result)=>{})         |            |                                                                        |                    |      |
| pullBackV((result)=>{})          |            |                                                                        |                    |      |
| stepOver((result)=>{})           |            |                                                                        |                    |      |
| singleLunge((result)=>{})        |            |                                                                        |                    |      |
| doubleLunge((result)=>{})        |            |                                                                        |                    |      |
| **Tiki Taka**                    |            |                                                                        |                    |      |
| tiki()                           |            |                                                                        |                    |      |
| taka()                           |            |                                                                        |                    |      |

## In the begning it will be a productivity first tool, then a game SHOULD be made with TikiTaka:

- An ***element*** is defined as a buffer, stream, or file
- Moving data (the ball) from one element to the other with protections is a ***pass***
- Moving data (the ball) from one element to the other without protections is considered a ***shot***
- ***Bad pass or shot*** is when you lose the ball to the other team. (only if your playing against someone) 
- ***A Miss*** can be mitigated with subsequent behavior to further your objectives. It means an exception was not thrown because you knew how to use mitigators.
- A ***Dribble move*** is a filter on a buffer, before a shot or pass.
- A ***touch*** is an essential element to making sure you don't miss on the pass or the shot. 
  - Buf if you take good touches, you can set yourself up for style points on subsequent shots and passes, that come much later 
    - (which add up to moral victories and real secondary points)
- ***Vertical***  passes and shots are determined by what depth in your file tree you pass or shoot to.
- ***Horizontal*** passes (left or right) are done at the same level in your file tree. If you want to do a long cross you have to specifiy a location in your file tree that is at the same tree depth.  If you don't meet this criteria its a miss (which can be mitigated), but is not considered losing the ball. Losing the ball requires that it go out of bounds (exception), or that you are playing against someone (which is a miss against an oppnent).
