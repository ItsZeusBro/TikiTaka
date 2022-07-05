# The File Interaction Model (FIM) 0.1
This is a new specification that I am developing to use for TikiTaka and other programs

## We can begin with the 10 Main Concepts:
1. Directionality
2. Quantality
3. Exclusivity
4. Positionality
5. Chaining
6. Pre-actions
7. Post-actions
8. Syncronicity
9. Conditionals (and Mitigation)
10. Looping

### Directionality
Directionality simply means what direction belongs to the flow of data. It is represented by an arrow. This is the most simple idea in the specification and cannot be mistaken because its abstractual. The only things that matter here is the fact that its an arrow. This is because all arrows have a direction, and its direction determines the flow of data. When added the FIM specification, it should come from a node and to another. If you have a bidirectional arrow without constraints, you can mirror one files behavior to that of the other (from left to right).

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/7a46a5a074f1d58712f3777b1dd8c30cac52aa38/Docs/Directionality.jpg" height=245 width=350/>

### Quantality
Quantality defines the constraints upon the flow which defaults to "all data" when not constrained. The quantity of data in the flow matters for all kinds of situations in manipulating files. Different keywords such as All, Half, N, [1, 2, ...N], are used to represent the amount of data (in bits, bytes, or  chunks of arbitrary size) flowing from one file to the other. Don't worry about the other stuff on the diagram here for now.

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/8df5aa08e514060a9f05719e66e973fedc070e43/Docs/Quantality1.png" height=280 width=400/>


### Exclusivity
Exclusivity defines whether the data is shared after its flow, or whether it becomes exclusive to a new owner.

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/0da184363446b48c4672771e5b8dc0924000c15c/Docs/Exclusivity.jpg" height=280 width=400/>


### Positionality
Positionality defines from what position data flows out of a file, and to what position data flows into a file. These can be abstract concepts (like begining or end) or concrete positional integers (like 1 or 20 or 50).

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/352f46409d9d873aeaf20d5522e552e27dc08137/Docs/Positionality.jpg" height=280 width=400/>


### Chaining, Forks, and Junctions
Chaining is a modeling technique that demonstrates a compound flow model, where you have a starting node, and flow the data to other nodes syncronously or asyncronously. Forks are when a file flow syncronously splits into two different asyncronous paths. Two asyncronous paths of execution can only converge on a Junction. They need to terminate on the junction that executes the end result of the flow of a fork. The junction can merge file results in a number of syncronous ways.

### Pre-Actions
These are actions you specify that are to take place on the data before it is inserted into the file at its given position

### Post-Actions
These are actions you specify that are to take place on the file (as a whole) after data is inserted into it at some position

### Syncronicity
If you have a bidriectional flow model, you can use the bidirectional arrow or a second arrow. A bidirectional arrow is evaluated (syncronously) left to right. A second arrow is evaluated top down (syncronously). A biderectional arrow restricts you to the same constraints going in both directions, but left to right flow is evaluated on B first. Then the same constraints are applied in reverse after the first constraints are finished.

### Conditionals and Mitigation

Conditionals are basically IF ELSE blocks with boolean statements on the output of the previous statement or statement block. They require a statement or statement block in order to be executable.

Mitigation specifies what happens to an interaction when the initial interaction tried, but failed for some reason.

### Looping

This is an iterator that runs a statement or statement block until the boolean conditional statement is no longer valid
