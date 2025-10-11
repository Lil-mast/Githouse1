
import React from 'react';
import type { Stat, User } from '../types';
import { STATS_DATA, RECOMMENDED_USERS } from '../constants';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-400',
    green: 'bg-green-500/20 text-green-400',
    orange: 'bg-orange-500/20 text-orange-400',
  };
  return (
    <div className={`p-4 rounded-lg ${colorClasses[stat.color]}`}>
      <p className="text-2xl font-bold text-white">{stat.value}</p>
      <p className="text-sm">{stat.label}</p>
    </div>
  );
};

const ProfileSetup: React.FC = () => {
  return (
    <div className="bg-brand-gray p-6 rounded-lg border border-brand-gray-light">
      <h2 className="text-xl font-bold text-white mb-1">Find Your Filter Profile</h2>
      <p className="text-sm text-gray-400 mb-6">Tell us about yourself</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side: Stats and About */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {STATS_DATA.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
          <div>
            <label className="text-sm font-medium text-gray-400">About Me</label>
            <textarea className="mt-1 w-full bg-brand-gray-dark border border-brand-gray-light rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue" rows={3} placeholder="Software Engineer specializing in React..."></textarea>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-400">Location</label>
            <input type="text" className="mt-1 w-full bg-brand-gray-dark border border-brand-gray-light rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue" placeholder="Remote" />
          </div>
          <button className="w-full sm:w-auto bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            Complete Profile
          </button>
        </div>

        {/* Right Side: Recommendations */}
        <div className="bg-brand-gray-dark p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-white">Recommended for You</h3>
                <button className="text-xs text-brand-blue hover:underline">Follow</button>
            </div>
            <div className="space-y-1 text-sm text-gray-400 mb-4">
              <p>3.2k Followers</p>
              <p>1.5k Following</p>
            </div>

            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Follow Their Crowds</h4>
            <div className="flex space-x-2">
                 {RECOMMENDED_USERS.map(user => (
                    <div key={user.handle} className="text-center">
                        <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full mx-auto" />
                        <span className="text-xs text-gray-400 block mt-1">{user.name}</span>
                    </div>
                ))}
                <div className="h-10 w-10 rounded-full bg-brand-gray-light flex items-center justify-center text-xs font-bold text-white">+8</div>
            </div>
            <button className="mt-4 w-full bg-brand-gray-light text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm">
                Follow
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
