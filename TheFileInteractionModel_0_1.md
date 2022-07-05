# The File Interaction Model (FIM) 0.1
This is a new specification that I am developing to use for TikiTaka and other programs

## We can begin with the 7 Main Concepts:
1. Directionality
2. Quantality
3. Exclusivity
4. Positionality
5. Mitigation
6. Chaining
7. Pre-actions
8. Post-actions

### Directionality
Directionality simply means what direction belongs to the flow of data. It is represented by an arrow. This is the most simple idea in the specification and cannot be mistaken because its abstractual. The only things that matter here is the fact that its an arrow. This is because all arrows have a direction, and its direction determines the flow of data. When added the FIM specification, it should come from a node and to another.

### Quantality
Quantality defines the constraints upon the flow which defaults to "all data" when not constrained. The quantity of data in the flow matters for all kinds of situations in manipulating files.

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

