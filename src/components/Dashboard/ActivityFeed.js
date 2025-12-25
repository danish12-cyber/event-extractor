import React from 'react';

const ActivityFeed = ({ activities, delay }) => {
  return (
    <div className="activity-feed glass-panel" data-aos="fade-up" data-aos-delay={delay}>
      <h3 className="panel-title">Recent Activity</h3>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-dot" style={{ backgroundColor: activity.status === 'success' ? '#4CAF50' : '#FF5252' }}></div>
            <div className="activity-content">
              <p className="activity-text">{activity.description}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
