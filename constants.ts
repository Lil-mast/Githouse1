
import { User, Community, Stat, ModerationUser, ActivityData } from './types';

export const STATS_DATA: Stat[] = [
  { value: '500', label: 'Followers', color: 'blue' },
  { value: '500', label: 'Stars', color: 'green' },
  { value: '500', label: 'Following', color: 'orange' },
];

export const RECOMMENDED_USERS: User[] = [
  { name: 'Jane Smith', handle: 'janesmith', avatarUrl: 'https://i.pravatar.cc/150?img=1', role: 'UX Designer' },
  { name: 'Olet Fapohunda', handle: 'oletf', avatarUrl: 'https://i.pravatar.cc/150?img=2', role: 'Frontend Dev' },
];

export const COMMUNITY_DATA: Community[] = [
  { name: 'JaneSmith - "NauraNat"', description: 'Lead Designer at Vercel', imageUrl: 'https://picsum.photos/seed/community1/400/200', members: 1289 },
  { name: 'Trendi: New Quantum..', description: 'Exploring the future of computing', imageUrl: 'https://picsum.photos/seed/community2/400/200', members: 4289 },
  { name: 'Pytho X', description: 'Python for AI and Data Science', imageUrl: 'https://picsum.photos/seed/community3/400/200', members: 815 },
  { name: 'BlueStack X', description: 'Next-gen cloud infrastructure', imageUrl: 'https://picsum.photos/seed/community4/400/200', members: 2300 },
];

export const MEMBER_DATA: User[] = [
  { name: 'Festus Pro', handle: 'festuspro', avatarUrl: 'https://i.pravatar.cc/150?img=5', role: 'DevOps Engineer' },
  { name: 'BlockChainVault', handle: 'bcvault', avatarUrl: 'https://i.pravatar.cc/150?img=6', role: 'Solidity Dev' },
  { name: 'Visite Adidas', handle: 'visiteadidas', avatarUrl: 'https://i.pravatar.cc/150?img=7', role: 'AI Researcher' },
  { name: 'BlockChain Yao X', handle: 'yaox', avatarUrl: 'https://i.pravatar.cc/150?img=8', role: 'Rust Developer' },
];

export const MODERATION_USERS_DATA: ModerationUser[] = [
  { name: 'John Doe', handle: 'johndoe', avatarUrl: 'https://i.pravatar.cc/150?img=9', role: 'User', status: 'Active', lastActivity: '2 hours ago' },
  { name: 'Jane Smith', handle: 'janesmith', avatarUrl: 'https://i.pravatar.cc/150?img=1', role: 'Admin', status: 'Active', lastActivity: '5 minutes ago' },
  { name: 'Mike Johnson', handle: 'mikej', avatarUrl: 'https://i.pravatar.cc/150?img=10', role: 'User', status: 'Suspended', lastActivity: '1 day ago' },
  { name: 'Sarah Adams', handle: 'saraha', avatarUrl: 'https://i.pravatar.cc/150?img=11', role: 'Moderator', status: 'Active', lastActivity: '30 minutes ago' },
];

export const ACTIVITY_CHART_DATA: ActivityData[] = [
  { name: 'Mon', actions: 120 },
  { name: 'Tue', actions: 200 },
  { name: 'Wed', actions: 150 },
  { name: 'Thu', actions: 280 },
  { name: 'Fri', actions: 180 },
  { name: 'Sat', actions: 230 },
  { name: 'Sun', actions: 300 },
];
