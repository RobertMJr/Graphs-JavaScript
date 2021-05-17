# Graphs [![](https://img.shields.io/badge/Robert-Muraru-blue)](https://robert-muraru-portfolio.herokuapp.com/)


## Description
In a computer science, a graph is an abstract data type that is meant to implement the undirected graph and directed graph concepts from the field of graph theory within a math.

### [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
- A graph data structure consists of a finite (and possibly mutable) set of __vertices__ (also called __nodes__ or __points__), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph. 
- These pairs are known as __edges__ (also called __links__ or __lines__), and for a directed graph are also known as arrows. The vertices may be part of the graph structure, or may be external entities represented by integer indices or references.
- Graphs can be represented using an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) or an [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list).

### BIG O

__| V |__ - number of vertices

__| E |__ - number of edges


| Operation     | Adjacency List     | Adjacency Matrix |
|---------------|--------------------|------------------|
| Add Vertex    | O(1)               | O( \|V<sup>2</sup>\| )     |
| Add Edge      | O(1)               | O(1)             |
| Remove Vertex | O( \|V\| + \|E\| ) | O( \|V<sup>2</sup>\| )     |
| Remove Edge   | O( \|E\| )         | O(1)             |
| Query         | O( \|V\| + \|E\| ) | O(1)             |
| Storage       | O( \|V\| + \|E\| ) | O( \|V<sup>2</sup>\| )     |


__Adjacency List__
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

__Adjacency Matrix__
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge