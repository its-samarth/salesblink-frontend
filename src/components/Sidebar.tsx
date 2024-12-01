import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  // State to store the input values for each node
  const [coldEmail, setColdEmail] = useState('');
  const [waitDelay, setWaitDelay] = useState('');
  const [leadSource, setLeadSource] = useState('');
  const [notification, setNotification] = useState<string | null>(null); // Notification state

  // Handle the drag start event
  const onDragStart = (event: React.DragEvent, nodeType: string, nodeData: string) => {
    const data = {
      type: nodeType,
      data: nodeData,
    };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(data));
    event.dataTransfer.effectAllowed = 'move';
  };

  // Function to handle the save button click and send the data to the API
  const handleSave = async () => {
    const requestData = {
      to: leadSource || 'samarthkasma21@gmail.com', // default email
      subject: coldEmail || 'grd vdxv Email', // default subject
      body: 'This is an email from vercel.', // you can modify if needed
      when: waitDelay || 'in 10 seconds', // default delay
    };
    console.log('Request Data:', requestData); // Debugging log before fetch

    try {
      const response = await fetch('https://salesblink-five.vercel.app/api/schedule-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
        mode: 'no-cors', // Use 'no-cors' mode
      });
      console.log(response);
      

      if (response.ok) {
        const data = await response.json();
        console.log('Email scheduled successfully:', data);
        setNotification('Email scheduled successfully!'); // Success message
      } else {
        console.error('Failed to schedule email:', response.statusText);
        setNotification('Failed to schedule email. Please try again.'); // Error message
      }
    } catch (error) {
      console.error('Error during the API request:', error);
      setNotification('Error during the request. Please try again.'); // Error message
    }

    // Hide notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="sidebar">
      <h3>Nodes</h3>
      
      {/* Cold Email Node */}
      <div
        className="node cold-email"
        onDragStart={(event) => onDragStart(event, 'coldEmail', coldEmail)}
        draggable
      >
        <label>Cold Email</label>
        <input
          type="text"
          placeholder="Enter email subject or message"
          value={coldEmail}
          onChange={(e) => setColdEmail(e.target.value)}
        />
      </div>

      {/* Wait/Delay Node */}
      <div
        className="node wait-delay"
        onDragStart={(event) => onDragStart(event, 'waitDelay', waitDelay)}
        draggable
      >
        <label>Wait/Delay</label>
        <input
          type="text"
          placeholder="Enter delay time (e.g. 'in 10 seconds')"
          value={waitDelay}
          onChange={(e) => setWaitDelay(e.target.value)}
        />
      </div>

      {/* Lead Source Node */}
      <div
        className="node lead-source"
        onDragStart={(event) => onDragStart(event, 'leadSource', leadSource)}
        draggable
      >
        <label>Lead Source</label>
        <input
          type="text"
          placeholder="Enter Email address"
          value={leadSource}
          onChange={(e) => setLeadSource(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <button onClick={handleSave}>Save</button>

      {/* Notification */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
