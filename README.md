# TikiTaka
WARNINGS: 
1. Please do not invest time in the names of these functions yet, as they are subject to change. Its too early. It's just to give you an idea.
2. TikiTaka takes an "Offensive Programming" style. Meaning, a lot of safeguards are removed in an otherwise defensive programming world. This also means we don't return feedback from functions to let you know if your move succeeds. This is designed to enforce player performance and sport like behavior.
3. TikiTaka is a sport first and foremost. However, we think (with time) you might end up more productive when you get really good at it.


## Playing Spanish Futbol with Files and Data
- Tiki Taka is a Spanish Football Style that is dynamic and unpredictable
characterized by small pelota touches in small spaces, with hard to reason about
passes.

![TikiTaka](https://media.balls.ie/uploads/2013/09/barcatikitaka.gif)

Or

![TikiTaka1](https://github.com/ItsZeusBro/TikiTaka/blob/7ac57e42d912adeb70d8160b4dea3887d6b46c16/Gifs/TikiTaka.gif)

## File Operation Function Primitives:
| Function           | params                                                                  | returns        | explanation                                                                                    |
|--------------------|-------------------------------------------------------------------------|----------------|------------------------------------------------------------------------------------------------|
| mkdir(...paths)    | takes n number of path arguments of type string                         | null           | creates empty directories with names specified in variadic arguments                           |
| create(...paths)   | takes n number of path arguments of type string                         | null           | creates empty files with names specified in variadic arguments                                 |
| rename(olP, newP)  | takes the old path that you wish to rename to the new path              | null           | renames a files name represented by argument a to argument b's file name                       |
| copyAppend(a, b)   | takes two paths.                                                        | null           | 'a' is read from and a copy of its data is appended to 'b'                                     |
| truncate(p, n)     | takes a path and n representing the number of bytes desired in the file | null           | truncates a file to the specified number of bytes n                                            |
| del(p)             | a path to file                                                          | null           | deletes a directory or a file of a valid path                                                  |
| write(p, data)     | takes a file path and some data you wish to write to it.                | null           | This function appends to the file by default.The file created if it doesn't exist              |
| overwrite(p, data) | takes a file path and some data you wish to write over the file         | null           | If file does not exist, this doesn't overwrite, otherwise it truncates then writes to the file |
| read(p)            | takes a file path that you want to read from                            | data from file | and reads from it                                                                              |
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
