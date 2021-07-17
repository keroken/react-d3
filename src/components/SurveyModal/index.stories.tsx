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

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <SurveyModal isOpen={isOpen} setIsOpen={setIsOpen} questions={questions} />
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

const questions = [
  {
    id: 1,
    text: 'ミスをよく批判されますか？',
    choices: [
      { value: 5, label: '非常にそう思う' },
      { value: 4, label: 'そう思う' },
      { value: 3, label: 'どちらとも思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 1, label: '全くそう思わない' },
    ],
    answer: null,
  },
  {
    id: 2,
    text: 'マネージャーとの関係は良好だと思いますか？',
    choices: [
      { value: 5, label: '非常にそう思う' },
      { value: 4, label: 'そう思う' },
      { value: 3, label: 'どちらとも思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 1, label: '全くそう思わない' },
    ],
    answer: null,
  },
  {
    id: 3,
    text: 'ミスをよく批判されますか？',
    choices: [
      { value: 5, label: '非常にそう思う非常にそう思うああ' },
      { value: 4, label: 'そう思う' },
      { value: 3, label: 'どちらとも思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 1, label: '全くそう思わない' },
    ],
    answer: null,
  },
  {
    id: 4,
    text: 'ミスをよく批判されますか？',
    choices: [
      { value: 5, label: '非常にそう思う' },
      { value: 4, label: 'そう思う' },
      { value: 3, label: 'どちらとも思わない' },
      { value: 2, label: 'あまりそう思わない' },
      { value: 1, label: '全くそう思わない' },
    ],
    answer: null,
  },
];
