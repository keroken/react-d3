import { UserColorType } from '@/styles';

export type matchDataType = {
  id: number;
  managerName: string;
  managerColor: UserColorType;
  managerNameForIcon?: string;
  managerImageUrl?: string;
  memberName: string;
  memberColor: UserColorType;
  memberNameForIcon?: string;
  memberImageUrl?: string;
  team: string;
  teamColor: UserColorType;
  sessionCount: number;
  lastSessionDate: string;
  relationValue: number;
};
