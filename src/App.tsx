import React from 'react';
import './styles/flowchart.css';
import Flowchart from './components/Flowchart';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Flowchart />
    </div>
  );
};

export default App;
