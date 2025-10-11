
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ACTIVITY_CHART_DATA } from '../constants';

const ActivityChart: React.FC = () => {
    return (
        <div className="bg-brand-gray p-6 rounded-lg border border-brand-gray-light">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Feed & Activity Tools</h3>
                <div className="flex items-center space-x-2">
                  <button className="text-sm text-gray-400 hover:text-white">Feeds</button>
                  <button className="text-sm text-white border-b-2 border-brand-blue pb-1">Stats</button>
                  <button className="text-sm text-gray-400 hover:text-white">Accounts</button>
                </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Admin & Moderation Dashboard</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 h-72 bg-brand-gray-light p-4 rounded-lg">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={ACTIVITY_CHART_DATA} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#21262D" />
                            <XAxis dataKey="name" tick={{ fill: '#8B949E' }} axisLine={{ stroke: '#21262D' }} tickLine={false} />
                            <YAxis tick={{ fill: '#8B949E' }} axisLine={{ stroke: '#21262D' }} tickLine={false} />
                            <Tooltip
                                cursor={{ fill: 'rgba(47, 129, 247, 0.1)' }}
                                contentStyle={{
                                    backgroundColor: '#0D1117',
                                    borderColor: '#21262D',
                                    color: '#C9D1D9'
                                }}
                            />
                            <Bar dataKey="actions" name="Actions">
                                {ACTIVITY_CHART_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 3 ? '#2F81F7' : '#30363D'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                    <div className="bg-brand-gray-light p-4 rounded-lg">
                        <h4 className="font-semibold text-white">New Members</h4>
                        <p className="text-2xl font-bold text-brand-green mt-1">+125</p>
                        <p className="text-xs text-gray-400">in the last 7 days</p>
                    </div>
                     <div className="bg-brand-gray-light p-4 rounded-lg">
                        <h4 className="font-semibold text-white">Reports</h4>
                        <p className="text-2xl font-bold text-brand-orange mt-1">12</p>
                        <p className="text-xs text-gray-400">pending review</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivityChart;
