
import React from 'react';
import { HomeIcon } from './icons/HomeIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';
import { UsersIcon } from './icons/UsersIcon';
import { DocumentReportIcon } from './icons/DocumentReportIcon';
import { CogIcon } from './icons/CogIcon';
import { LogoutIcon } from './icons/LogoutIcon';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 flex-shrink-0 bg-brand-gray-dark border-r border-brand-gray-light hidden md:flex flex-col">
            <div className="h-16 flex items-center px-6 border-b border-brand-gray-light">
                 <div className="flex items-center space-x-3">
                    <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
                    <div>
                        <p className="text-sm font-semibold text-white">JohnDo's Hub</p>
                        <p className="text-xs text-brand-green">Open to work</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <HomeIcon className="h-5 w-5 mr-3" />
                    Dashboard
                </a>
                 <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-gray-light rounded-md">
                    <img className="h-5 w-5 mr-3 rounded-full" src="https://i.pravatar.cc/150?img=12" alt="Community logo"/>
                    JohnDo's Hub
                </a>
                <p className="px-4 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Connect with DevBlue</p>
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <UserGroupIcon className="h-5 w-5 mr-3" />
                    Communities
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <UsersIcon className="h-5 w-5 mr-3" />
                    Members
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <DocumentReportIcon className="h-5 w-5 mr-3" />
                    Projects
                </a>
            </nav>

            <div className="px-4 py-6 border-t border-brand-gray-light">
                 <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <CogIcon className="h-5 w-5 mr-3" />
                    Settings
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-brand-gray-light">
                    <LogoutIcon className="h-5 w-5 mr-3" />
                    Logout
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
