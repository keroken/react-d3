// TODO: openAPI から自動生成するように変更する
export type SurveyType = {
  id: number;
  name: string;
  survey_type: 'before_mentee' | 'before_menter' | 'after_mentee' | 'after_menter';
  questions: Array<QuestionType>;
};

export type QuestionType = {
  id: number;
  survey_id: number;
  content: string;
  position: number;
  selections: Array<SelectionType>;
};

export type SelectionType = {
  id: number;
  question_id: number;
  content: string;
  position: number;
};

export type RoomType = {
  id: number;
  current_interview: InterviewType | null;
};

export type InterviewType = {
  id: number;
  status: string;
  recording_id: string;
  user_interviews: Array<UserInterviewType>;
  current_user_interview: UserInterviewType | null;
};

export type UserInterviewType = {
  id: number;
  user_id: number;
  interview_id: number;
  after_survey_completed: boolean;
  before_survey_completed: boolean;
};
