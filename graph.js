// Undirected Graph - no error handling - kept it simple
class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(name) {
		if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
	}

	addEdge(v1, v2) {
		if (!this.adjacencyList[v1].includes(v2))
			this.adjacencyList[v1].push(v2);
		if (!this.adjacencyList[v2].includes(v1))
			this.adjacencyList[v2].push(v1);
	}
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter(
			(vertex) => vertex !== v2
		);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(
			(vertex) => vertex !== v1
		);
	}
	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}

const g = new Graph();
g.addVertex('Bucharest');
g.addVertex('Tokyo');
g.addVertex('Amsterdam');
g.addVertex('Budapest');
g.addEdge('Bucharest', 'Tokyo');
g.addEdge('Bucharest', 'Amsterdam');
g.addEdge('Bucharest', 'Budapest');
g.addEdge('Amsterdam', 'Budapest');
g.addEdge('Tokyo', 'Bucharest');
g.removeVertex('Bucharest');

console.log(g.adjacencyList);
