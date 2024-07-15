import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import './Plotpage.css'

const PlotPage = () => {
  const [data, setData] = useState([
    { name: 'Point 1', x: 1, y: 2 },
    { name: 'Point 2', x: 2, y: 3 },
    { name: 'Point 3', x: 3, y: 5 },
    { name: 'Point 4', x: 4, y: 7 },
    { name: 'Point 5', x: 5, y: 11 },
  ]);

  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');

  const handleAddDataPoint = () => {
    setData([...data, { name: `Point ${data.length + 1}`, x: parseFloat(xValue), y: parseFloat(yValue) }]);
    setXValue('');
    setYValue('');
  };

  return (
    <div>
      <h1>Plot Page</h1>
      <div>
        <label>
          X-axis:
          <input type="number" value={xValue} onChange={(e) => setXValue(e.target.value)} />
        </label>
        <label>
          Y-axis:
          <input type="number" value={yValue} onChange={(e) => setYValue(e.target.value)} />
        </label>
        <button onClick={handleAddDataPoint}>Add Data Point</button>
      </div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default PlotPage;
