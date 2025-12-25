import React from 'react';

const StatsCard = ({ title, value, icon, trend, color, delay }) => {
  return (
    <div 
      className="stats-card glass-panel"
      data-aos="fade-up" 
      data-aos-delay={delay}
      style={{ borderTop: `4px solid ${color}` }}
    >
      <div className="stats-header">
        <h3 className="stats-title">{title}</h3>
        <div className="stats-icon" style={{ backgroundColor: `${color}20`, color: color }}>
          {icon}
        </div>
      </div>
      <div className="stats-body">
        <div className="stats-value">{value}</div>
        {trend && (
          <div className={`stats-trend ${trend > 0 ? 'positive' : 'negative'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
