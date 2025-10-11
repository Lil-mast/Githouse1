
import React from 'react';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';
import { BellIcon } from './icons/BellIcon';
import { MessageIcon } from './icons/MessageIcon';

const Header: React.FC = () => {
    return (
        <header className="flex-shrink-0 bg-brand-gray border-b border-brand-gray-light">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search with filters..."
                        className="w-full bg-brand-gray-dark border border-brand-gray-light rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full hover:bg-brand-gray-light text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-gray focus:ring-white">
                        <BellIcon className="h-6 w-6" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-brand-gray-light text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-gray focus:ring-white">
                        <MessageIcon className="h-6 w-6" />
                    </button>
                    <img
                        className="h-9 w-9 rounded-full"
                        src="https://i.pravatar.cc/150?img=12"
                        alt="User avatar"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
