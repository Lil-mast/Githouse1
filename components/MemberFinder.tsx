
import React from 'react';
import type { User } from '../types';
import { MEMBER_DATA } from '../constants';

const MemberCard: React.FC<{ user: User }> = ({ user }) => (
    <div className="bg-brand-gray-light rounded-lg overflow-hidden group text-center p-4">
        <img src={user.avatarUrl} alt={user.name} className="h-16 w-16 rounded-full mx-auto mb-3 ring-2 ring-brand-gray"/>
        <h4 className="text-sm font-bold text-white truncate">{user.name}</h4>
        <p className="text-xs text-gray-400 truncate mt-1">{user.role}</p>
        <button className="mt-4 bg-brand-green/20 text-brand-green w-full text-xs font-semibold py-1.5 px-3 rounded-full hover:bg-brand-green/40 transition-colors">Follow</button>
    </div>
);

const MemberFinder: React.FC = () => {
    return (
        <div className="bg-brand-gray p-6 rounded-lg border border-brand-gray-light">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Project & Filter Members</h3>
                 <div className="flex items-center space-x-2">
                    <button className="bg-brand-blue/20 text-brand-blue text-sm font-semibold py-1 px-3 rounded-full">UI/UX</button>
                    <button className="bg-brand-purple/20 text-brand-purple text-sm font-semibold py-1 px-3 rounded-full">Backend</button>
                    <button className="bg-brand-gray-light text-gray-300 text-sm font-semibold py-1 px-3 rounded-full">+11</button>
                </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Ritavi per piamed as regies</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {MEMBER_DATA.map(user => <MemberCard key={user.handle} user={user} />)}
            </div>
        </div>
    );
};

export default MemberFinder;
