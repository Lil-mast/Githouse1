
import React from 'react';
import { MODERATION_USERS_DATA } from '../constants';
import type { ModerationUser } from '../types';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

const ModerationPanel: React.FC = () => {
    return (
        <div className="bg-brand-gray p-6 rounded-lg border border-brand-gray-light">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Project Moderation & Teams</h3>
                <div className="flex items-center space-x-4 text-sm font-medium text-gray-400">
                    <a href="#" className="text-white border-b-2 border-brand-blue pb-1">User Management</a>
                    <a href="#" className="hover:text-white">Community Guidelines</a>
                    <a href="#" className="hover:text-white">Reports</a>
                    <a href="#" className="hover:text-white">Analytics</a>
                </div>
            </div>
             <p className="text-sm text-gray-400 mb-6">Admin Feedlers</p>

            <div className="bg-brand-gray-light rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs text-gray-400 uppercase bg-brand-gray-light/50">
                        <tr>
                            <th scope="col" className="px-6 py-3">User</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Last Activity</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MODERATION_USERS_DATA.map((user) => (
                            <tr key={user.handle} className="border-t border-brand-gray">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <img className="h-8 w-8 rounded-full" src={user.avatarUrl} alt={user.name} />
                                        <div className="ml-3">
                                            <div className="text-sm font-medium text-white">{user.name}</div>
                                            <div className="text-xs text-gray-500">@{user.handle}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{user.lastActivity}</td>
                                <td className="px-6 py-4">
                                    <button className="text-brand-blue hover:underline">Manage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ModerationPanel;
