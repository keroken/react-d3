export type dimensionsType = {
  width: number;
  height: number;
  chartWidth: number;
  chartHeight: number;
  marginTop: number;
  marginLeft: number;
};

export type coordinatesType = {
  x: number;
  y: number;
};

export type sessionDataType = {
  sessionId: number;
  memberId: number;
  name: string;
  iconName: string;
  date: string;
  memberSpeech: number;
  mentorSpeech: number;
  sessionDuration: number;
};
