
import React from 'react';
import type { Community } from '../types';
import { COMMUNITY_DATA } from '../constants';

const CommunityCard: React.FC<{ community: Community }> = ({ community }) => (
    <div className="bg-brand-gray-light rounded-lg overflow-hidden group">
        <img src={community.imageUrl} alt={community.name} className="h-24 w-full object-cover"/>
        <div className="p-4">
            <h4 className="text-sm font-bold text-white truncate">{community.name}</h4>
            <p className="text-xs text-gray-400 truncate mt-1">{community.description}</p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-brand-gray-light" src="https://i.pravatar.cc/150?img=20" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-brand-gray-light" src="https://i.pravatar.cc/150?img=21" alt=""/>
                    <img className="inline-block h-6 w-6 rounded-full ring-2 ring-brand-gray-light" src="https://i.pravatar.cc/150?img=22" alt=""/>
                </div>
                <button className="bg-brand-blue text-white text-xs font-semibold py-1 px-3 rounded-full hover:bg-blue-600 transition-colors">Join</button>
            </div>
        </div>
    </div>
);

const CommunityFinder: React.FC = () => {
    return (
        <div className="bg-brand-gray p-6 rounded-lg border border-brand-gray-light">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Find Your Crew?</h3>
                <div className="flex items-center space-x-2">
                    <button className="bg-brand-blue/20 text-brand-blue text-sm font-semibold py-1 px-3 rounded-full">Explore</button>
                    <button className="bg-brand-gray-light text-gray-300 text-sm font-semibold py-1 px-3 rounded-full">Rust</button>
                    <button className="bg-brand-gray-light text-gray-300 text-sm font-semibold py-1 px-3 rounded-full">Python</button>
                    <button className="bg-brand-gray-light text-gray-300 text-sm font-semibold py-1 px-3 rounded-full">Design</button>
                </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Coles timq OnBlue! & chares.predies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMMUNITY_DATA.map(community => <CommunityCard key={community.name} community={community} />)}
            </div>
        </div>
    );
};

export default CommunityFinder;
