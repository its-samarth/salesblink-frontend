import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// Define Node type with label explicitly typed as ReactNode
interface CustomNode extends Node {
  data: {
    label: React.ReactNode;
  };
}

const initialNodes: CustomNode[] = [
  {
    id: 'start',
    position: { x: 250, y: 50 },
    data: { label: 'Sequence Start Point' as React.ReactNode },
    type: 'input',
  },
];

const Flowchart: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([] as Edge[]);  // Explicit type definition for edges

  const isFixedNode = (nodeId: string) => nodeId === 'start';

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addNode = (type: 'Cold Email' | 'Wait/Delay' | 'Lead Source') => {
    const newNode: CustomNode = {
      id: `${type}-${Date.now()}`,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: type as React.ReactNode },
      type: 'default',
    };
    setNodes((nds) => [...nds, newNode]);

    // Automatically create an edge from the last node to the new node
    if (nodes.length > 0) {
      const lastNodeId = nodes[nodes.length - 1].id;
      const newEdge: Edge = {
        id: `edge-${Date.now()}`,
        source: lastNodeId,
        target: newNode.id,
      };
      setEdges((eds) => [...eds, newEdge]);
    }
  };

  const deleteNode = (nodeId: string) => {
    if (isFixedNode(nodeId)) {
      alert("The 'Sequence Start Point' node cannot be deleted!");
      return;
    }

    // Find the edges that are connected to the node to be deleted
    const outgoingEdges = edges.filter((edge) => edge.source === nodeId);
    const incomingEdges = edges.filter((edge) => edge.target === nodeId);

    // Reassign connections if necessary
    outgoingEdges.forEach((outgoingEdge) => {
      const nextNodeId = outgoingEdge.target;
      const prevEdge = incomingEdges.find((edge) => edge.target === nodeId);

      if (prevEdge) {
        const newEdge: Edge = {
          id: `edge-${Date.now()}`,
          source: prevEdge.source,
          target: nextNodeId,
        };
        setEdges((eds) => [...eds, newEdge]);
      }
    });

    // Remove the node and its associated edges
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge: Edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => addNode('Cold Email')}>Add Cold Email Node</button>
        <button onClick={() => addNode('Wait/Delay')}>Add Wait/Delay Node</button>
        <button onClick={() => addNode('Lead Source')}>Add Lead Source Node</button>
      </div>
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            label: (
              <div>
                <span>{node.data.label}</span>
                <button onClick={() => deleteNode(node.id)} style={{ marginLeft: 5 }}>
                  Delete
                </button>
              </div>
            ),
          },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
