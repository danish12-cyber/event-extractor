import React from 'react';

const UsageChart = ({ data, delay }) => {
  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="usage-chart glass-panel" data-aos="fade-up" data-aos-delay={delay}>
      <div className="panel-header">
        <h3 className="panel-title">Extraction Usage</h3>
        <select className="chart-select">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>
      <div className="chart-container">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-group">
            <div 
              className="chart-bar" 
              style={{ 
                height: `${(item.value / maxVal) * 100}%`,
                backgroundColor: 'var(--primary-color)' 
              }}
            >
              <div className="tooltip">{item.value} Events</div>
            </div>
            <span className="chart-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsageChart;
