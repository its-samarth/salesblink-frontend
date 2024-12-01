import React from 'react';

const Sidebar: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="sidebar">
      <h3>Nodes</h3>
      <div
        className="node cold-email"
        onDragStart={(event) => onDragStart(event, 'coldEmail')}
        draggable
      >
        Cold Email
      </div>
      <div
        className="node wait-delay"
        onDragStart={(event) => onDragStart(event, 'waitDelay')}
        draggable
      >
        Wait/Delay
      </div>
      <div
        className="node lead-source"
        onDragStart={(event) => onDragStart(event, 'leadSource')}
        draggable
      >
        Lead Source
      </div>
    </div>
  );
};

export default Sidebar;
