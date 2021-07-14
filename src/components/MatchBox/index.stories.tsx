import { MatchBox } from '.';
import { makeMeta } from '@/helpers/Story';
import { matchDataType } from '@/components/matchDataType';
import React from 'react';

export default makeMeta({
  component: MatchBox,
  meta: {
    package: 'core',
    type: 'components',
    category: 'layout',
    name: 'MatchBox',
  },
});
export const Basic = () => {
  return <MatchBox matchData={matchData} />;
};

const matchData: matchDataType = {
  id: 1,
  managerName: '松井 麻衣',
  managerColor: 'Orange',
  managerImageUrl: 'images/interview-image02.png',
  memberName: '渋谷 圭佑',
  memberColor: 'RoyalBlue',
  memberImageUrl: '',
  team: 'データアーツ',
  teamColor: 'Aquamarine',
  sessionCount: 10,
  lastSessionDate: '2021-06-15',
  relationValue: 73,
};
