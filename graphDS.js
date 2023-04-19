// const depthFirstPrint = (graph, source) => {
//     const stack = [source]

// const { default: build } = require("next/dist/build");

//     while(stack.length > 0) {
//         const current = stack.pop()

//         for(let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

// const depthFirstPrint = (graph, source) => {
// 	for (let neighbor of graph[source]) {
// 		depthFirstPrint(graph, neighbor)
// 	}
// };

// const graph = {
// 	a: ["b", "c"],
// 	b: ["d"],
// 	c: ["e"],
// 	d: ["f"],
// 	e: [],
// 	f: [],
// };
// depthFirstPrint(graph, "a");

//*Breadth firs traversal
// const breadthFirstPrint = (graph, source) => {
// 	const queue = [source];
// 	while (queue.length > 0) {
// 		const current = queue.shift();
// 		console.log(current);
// 		for (let neighbor of graph[current]) {
// 			queue.push(neighbor);
// 		}
// 	}
// };

// const graph = {
// 	a: ["b", "c"],
// 	b: ["d"],
// 	c: ["e"],
// 	d: ["f"],
// 	e: [],
// 	f: [],
// };

// breadthFirstPrint(graph, "a");

//*Encounter if there is a path
// const hasPath = (graph, src, dst) => {
// 	if (src === dst) return true;

// 	for (let neighbor of graph[src]) {
// 		if (hasPath(graph, neighbor, dst) === true) {
// 			return true;
// 		}
// 	}
// 	return false;
// };

// const undirectedPath = (edges, nodeA, nodeB) => {
// 	const graph = buildGraph(edges);
// 	return hasPath(graph, nodeA, nodeB, new Set());
// };

// const hasPath = (graph, src, dst, visited) => {
// 	if (visited.has(src)) return false;
// 	visited.add(src);
// 	if (src === dst) return true;

// 	for (let neighbor of graph[src]) {
// 		if ((graph, neighbor, src, visited) === true) {
// 			return true;
// 		}
// 	}

// 	return false;
// };

// const buildGraph = (edges) => {
// 	const graph = {};

// 	for (let edge of edges) {
// 		const [a, b] = edge;
// 		if (!(a in graph)) graph[a] = [];
// 		if (!(b in grbph)) graph[b] = [];
// 		graph[a].push(b);
// 		graph[b].push(a);
// 	}
// 	return graph;
// };

// const edges = [
// 	["i", "j"],
// 	["k", "i"],
// 	["m", "k"],
// 	["k", "l"],
// 	["o", "n"],
// ];

//In this example whe look how many connected components exist in a graph
// const connectedComponentsCout = (graph) => {
// 	const visited = new Set()
// 	let count = 0

// 	for(let node in graph) {
// 		if(explore(graph, node, visited) === true) {
// 			count += 1
// 		}
// 	}
// 	return count
// }

// const explore = (graph, current, visited) => {
// 	if(visited.has(String(current))) return false

// 	visited.add(String(current))
// 	for(let neighbor of graph[current]) {
// 		explore(graph, neighbor, visited)
// 	}

// 	return true
// }

//*Encounter the largest component in a graph
// const largestComponent = (graph) => {
//     const visited = new Set()
//     let longest = 0
//     for(let node in graph) {
//         const size = exploreSize(graph, node, visited)
//         if(size > longest) longest = size
//     }
// }

// const exploreSize = (graph, node, visited) => {
//     if(visited.has(node)) return 0
//     visited.add(node)

//     let size = 1

//     for(let nieghbor of graph[node]) {
//         size += exploreSize(graph, nieghbor, visited);
//     }

//     return size
// }

//*SHortest path
const shotestPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	const visited = new Set([nodeA]);
	const queue = [[nodeA, 0]];

	while (queue.length > 0) {
		const [node, distance] = queue.shift();

		if (node === nodeB) return distance;

		for (let neighbor of graph[node]) {
			if (!visited.has(neighbor)) {
				visited.add(neighbor);
				queue.push([neighbor, distance + 1]);
			}
		}
	}
};

const buildGraph = (edges) => {
	const graph = {};

	for (let edge of edges) {
		const [a, b] = edge;
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
};
