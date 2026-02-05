import type { User } from '@/types/User.ts';

export async function getUser(): Promise<User> {
  const res = await fetch('/user.json');
  
  return res.json();
}