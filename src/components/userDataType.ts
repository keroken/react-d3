import { UserColorType } from '@/styles';

export type userDataType = {
  id: number;
  name: string;
  nameForIcon?: string;
  userColor: UserColorType;
  role: string;
  team: string;
  sessionCount: number;
  lastSessionDate: string;
  imageUrl?: string;
  value_a?: number;
  value_b?: number;
  isActive?: boolean;
};
