
export interface User {
  name: string;
  handle: string;
  avatarUrl: string;
  role: string;
}

export interface Community {
  name: string;
  description: string;
  imageUrl: string;
  members: number;
}

export interface Stat {
  value: string;
  label: string;
  color: 'blue' | 'green' | 'orange';
}

export interface ModerationUser extends User {
  status: 'Active' | 'Suspended';
  lastActivity: string;
}

export interface ActivityData {
  name: string;
  actions: number;
}
