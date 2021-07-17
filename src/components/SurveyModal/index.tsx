import { BorderRadius, ColorTokens, TypographyTokens, space } from '@/styles';
import { ModalSelect } from '@/components/ModalSelect';
import { QuestionType } from '@/types/api_models';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  questions: QuestionType[];
  handleSave: (params: Answer[]) => void;
  handleSkip: () => void;
  after: boolean;
};

type Answer = {
  question_id: number;
  selection_id: number | null;
};

export const SurveyModal = ({ isOpen, setIsOpen, questions, handleSave, handleSkip, after }: Props) => {
  const [data, setData] = useState<Answer[]>([]);
  const [answerComplete, setAnswerComplete] = useState(false);

  const handleChange = (id: number, value: number) => {
    const result = data.map(item => ({
      question_id: item.question_id,
      selection_id: item.question_id === id ? value : item.selection_id,
    }));
    return setData(result);
  };

  const handleSubmit = () => {
    handleSave(data);
    setAnswerComplete(false);
  };

  useEffect(() => {
    const answers = questions.map(question => {
      return { question_id: question.id, selection_id: null };
    });
    setData(answers);
  }, [questions]);

  useEffect(() => {
    if (data.length > 0) {
      const unAnswers = data.filter(answer => answer.selection_id === null);
      if (unAnswers.length === 0) {
        setAnswerComplete(true);
      }
    }
  }, [data]);

  return (
    <>
      {/* 該当処理は呼び出しもとで行う
        <BasicModal isOpen={surveyComplete} setIsOpen={setSurveyComplete} title="アンケート回答完了" centerTitle>
          <StyledCompleteText>ご回答ありがとうございました。</StyledCompleteText>
        </BasicModal>
      */}
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="アンケート"
        centerContent
        centerButtons
        secondaryButtonLabel="スキップ"
        secondaryButtonWidthStyle="fit"
        mainButtonLabel="回答する"
        mainButtonWidthStyle="fit"
        mainButtonIsDisabled={!answerComplete}
        onClickSecondaryButton={handleSkip}
        onClickMainButton={handleSubmit}
        showBottomSeparationLine
        showTopSeparationLine
        size={{ width: 'wide', height: 'fullscreen' }}
        bodyHeightFull
      >
        <StyledBodyContainer>
          <StyledComment>
            この回答はAI精度向上のために活用させていただきます。社内の方へ展開されることはありません。
            {after && (
              <>
                <br />
                1on1の終了ではなく、一時的に退室される場合には、当アンケートはスキップください
              </>
            )}
          </StyledComment>
          {questions.map(question => (
            <span key={question.id}>
              <StyledQuestion>{question.content}</StyledQuestion>
              <StyledAnswers>
                {question.selections.map(selection => (
                  <StyledSelectContainer key={selection.id}>
                    <input
                      type="radio"
                      name={question.id.toString()}
                      id={`${question.id}-${selection.id}`}
                      value={selection.content}
                      onChange={() => handleChange(question.id, selection.id)}
                      style={{ display: 'none' }}
                    />
                    <StyledSelectButton htmlFor={`${question.id}-${selection.id}`}>
                      {selection.content}
                    </StyledSelectButton>
                  </StyledSelectContainer>
                ))}
              </StyledAnswers>
            </span>
          ))}
        </StyledBodyContainer>
      </ModalSelect>
    </>
  );
};

const StyledBodyContainer = styled.div`
  width: 100%;
  padding: ${space(4)};
`;

const StyledQuestion = styled.p`
  display: inline-block;
  margin: ${space(6)} 0;
  ${TypographyTokens.Label1};
  color: ${ColorTokens.Text01};
`;

const StyledAnswers = styled.div`
  display: flex;
  margin-bottom: ${space(10)};
`;

const StyledSelectContainer = styled.div`
  display: table;
  flex: 1;
  margin-right: ${space(2)};
  &:last-of-type {
    margin-right: 0;
  }
  input[type='radio']:checked + label {
    ${TypographyTokens.Label3};
    line-height: 1.5;
    color: ${ColorTokens.ActiveSelectedUi};
    background-color: ${ColorTokens.ActiveUi};
    border: 1px solid ${ColorTokens.ActiveSelectedUi};
  }
`;

const StyledSelectButton = styled.label`
  display: table-cell;
  min-width: 144px;
  padding: ${space(2)} ${space(1)};
  ${TypographyTokens.Label4};
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  color: ${ColorTokens.Text03};
  cursor: pointer;
  border: 1px solid ${ColorTokens.Ui02Dark};
  border-radius: ${BorderRadius.Default};
`;

const StyledComment = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${TypographyTokens.Label5};
  color: ${ColorTokens.Text02};
  margin: ${space(9)} 0 ${space(2)};
`;

// const StyledCompleteText = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0 auto;
//   ${TypographyTokens.Label2};
//   color: ${ColorTokens.Text01};
// `;
