# The File Interaction Model (FIM) 0.1
This is a new specification that I am developing to use for TikiTaka and other programs

## We can begin with the 10 Main Concepts:
1. Directionality
2. Quantality
3. Exclusivity
4. Positionality
5. Mitigation
6. Chaining
7. Pre-actions
8. Post-actions
9. Syncronicity
10. Mirroring

### Directionality
Directionality simply means what direction belongs to the flow of data. It is represented by an arrow. This is the most simple idea in the specification and cannot be mistaken because its abstractual. The only things that matter here is the fact that its an arrow. This is because all arrows have a direction, and its direction determines the flow of data. When added the FIM specification, it should come from a node and to another.

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/7a46a5a074f1d58712f3777b1dd8c30cac52aa38/Docs/Directionality.jpg" height=245 width=350/>

### Quantality
Quantality defines the constraints upon the flow which defaults to "all data" when not constrained. The quantity of data in the flow matters for all kinds of situations in manipulating files.

<img src="https://github.com/ItsZeusBro/TikiTaka/blob/6059eb2b845604e5ed930264b453303ea2c04b8d/Docs/Quantality.jpg" height=280 width=400/>


### Exclusivity
Exclusivity defines whether the data is shared after its flow, or whether it becomes exclusive to a new owner.

### Positionality
Positionality defines from what position data flows out of a file, and to what position data flows into a file. These can be abstract concepts (like begining or end) or concrete positional integers (like 1 or 20 or 50).

### Mitigation
Mitigation specifies what happens to an interaction when the initial interaction was too specific and wrong (when you specify the positionality of a read and the file is too small for the value) , or when it is not relevant (when files don't exist). Mitigation is a compound model, where one takes the place of another in case one fails.

### Chaining
Chaining is a modeling technique that demonstrates a compound flow model, where you have a starting node, and flow the data to other nodes, and eventually a terminal representing the end of the interaction.

### Pre-Actions
These are actions you specify that are to take place on the data before it is inserted into the file at its given position

### Post-Actions
These are actions you specify that are to take place on the file (as a whole) after data is inserted into it at some position

### Syncronicity
If you have a bidriectional flow model, you can use the bidirectional arrow or a second arrow. A bidirectional arrow is evaluated (syncronously) left to right. A second arrow is evaluated top down (syncronously). A biderectional arrow restricts you to the same constraints going in both directions, but left to right flow is evaluated on B first. Then the same constraints are applied in reverse after the first constraints are finished.

### Mirroring
If you have a bidirectional arrow without constraints, you can mirror one files behavior to that of the other (from left to right).
