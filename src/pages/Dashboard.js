import React, { useEffect } from 'react';
import StatsCard from '../components/Dashboard/StatsCard';
import ActivityFeed from '../components/Dashboard/ActivityFeed';
import UsageChart from '../components/Dashboard/UsageChart';
import './Dashboard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Mock Data
    const stats = [
        { title: 'Total Extractions', value: '1,248', icon: '⚡', trend: 12, color: '#4CAF50' },
        { title: 'Success Rate', value: '94.2%', icon: '🎯', trend: 2.1, color: '#2196F3' },
        { title: 'Saved Hours', value: '312h', icon: '⏳', trend: 8, color: '#FFC107' },
        { title: 'Active API Keys', value: '3', icon: '🔑', trend: 0, color: '#9C27B0' },
    ];

    const activities = [
        { description: 'Extracted webinar details from linear.app', time: '2 mins ago', status: 'success' },
        { description: 'Failed to parse image from twitter.com', time: '15 mins ago', status: 'failed' },
        { description: 'Batch export completed', time: '1 hour ago', status: 'success' },
        { description: 'New API key generated', time: '3 hours ago', status: 'success' },
        { description: 'Extracted conference info from meetup.com', time: 'Yesterday', status: 'success' },
    ];

    const chartData = [
        { label: 'Mon', value: 45 },
        { label: 'Tue', value: 52 },
        { label: 'Wed', value: 38 },
        { label: 'Thu', value: 65 },
        { label: 'Fri', value: 48 },
        { label: 'Sat', value: 20 },
        { label: 'Sun', value: 15 },
    ];

    return (
        <div className="dashboard-container">
            <header className="dashboard-header" data-aos="fade-down">
                <div>
                    <h1 className="dashboard-title">Dashboard</h1>
                    <p className="dashboard-subtitle">Welcome back, User</p>
                </div>
                <button className="btn btn-primary glow-effect">New Extraction +</button>
            </header>

            <div className="dashboard-grid">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} delay={index * 100} />
                ))}
            </div>

            <div className="dashboard-content-split">
                <UsageChart data={chartData} delay={400} />
                <ActivityFeed activities={activities} delay={500} />
            </div>
        </div>
    );
};

export default Dashboard;
