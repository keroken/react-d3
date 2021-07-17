import { SurveyModal } from '.';
import { makeMeta } from '@/helpers/Story';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: SurveyModal,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'SurveyModal',
  },
});

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  const handleSave = () => {
    alert('saved!')
    setIsOpen(false);
    window.location.reload();
  };

  const handleSkip = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <SurveyModal isOpen={isOpen} setIsOpen={setIsOpen} questions={questions} handleSave={handleSave} handleSkip={handleSkip} after={false} />
    </>
  );
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > input {
    -webkit-appearance: checkbox;
    margin: 10px;
  }
`;

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

const questions = [
  {
    id: 1,
    survey_id: 1,
    content: 'ミスをよく批判されますか？',
    position: 1,
    selections: [
      {
        id: 1,
        question_id: 1,
        content: '非常にそう思う',
        position: 1,
      },
      {
        id: 2,
        question_id: 2,
        content: 'そう思う',
        position: 2,
      },
      {
        id: 3,
        question_id: 3,
        content: 'どちらとも思わない',
        position: 3,
      },
      {
        id: 4,
        question_id: 4,
        content: 'あまりそう思わない',
        position: 4,
      },
      {
        id: 5,
        question_id: 5,
        content: '全くそう思わない',
        position: 5,
      },
    ]
  },
  {
    id: 2,
    survey_id: 2,
    content: 'マネージャーとの関係は良好だと思いますか？',
    position: 2,
    selections: [
      {
        id: 1,
        question_id: 1,
        content: '非常にそう思う',
        position: 1,
      },
      {
        id: 2,
        question_id: 2,
        content: 'そう思う',
        position: 2,
      },
      {
        id: 3,
        question_id: 3,
        content: 'どちらとも思わない',
        position: 3,
      },
      {
        id: 4,
        question_id: 4,
        content: 'あまりそう思わない',
        position: 4,
      },
      {
        id: 5,
        question_id: 5,
        content: '全くそう思わない',
        position: 5,
      },
    ]
  },
];
