import { BorderRadius, ColorTokens, TypographyTokens, UserColorTokens, UserColorType, space, square } from '@/styles';
import { HorizontalBarUnit } from '@/components/HorizontalBarUnit';
import { UserIcon } from '@/components//UserIcon';
import { format } from 'date-fns';
import { matchDataType } from '@/components/matchDataType';
import React from 'react';
import styled from 'styled-components';

type Props = {
  matchData: matchDataType;
};

export const MatchBox = ({ matchData }: Props) => {
  return (
    <StyledBox>
      <StyledHeader>
        <StyledTeamName>
          <StyledCircle color={matchData.teamColor}>
            <circle cx={12} cy={12} r={5} />
          </StyledCircle>
          {matchData.team}
        </StyledTeamName>
        <StyledLastSessionDate>
          {format(new Date(matchData.lastSessionDate), "MM'月'dd'日' h:mm")}
        </StyledLastSessionDate>
      </StyledHeader>
      <StyledUserGroup>
        <StyledUserCell>
          <UserIcon
            name={matchData.managerName}
            nameForIcon={matchData.managerNameForIcon}
            bgColor={matchData.managerColor}
            imageUrl={matchData.managerImageUrl}
            size="regular"
          />
          <StyledNameContainer>
            <StyledMemberName>{matchData.managerName}</StyledMemberName>
          </StyledNameContainer>
        </StyledUserCell>
        <StyledUserCell>
          <UserIcon
            name={matchData.memberName}
            nameForIcon={matchData.memberNameForIcon}
            bgColor={matchData.memberColor}
            imageUrl={matchData.memberImageUrl}
            size="regular"
          />
          <StyledNameContainer>
            <StyledMemberName>{matchData.memberName}</StyledMemberName>
          </StyledNameContainer>
        </StyledUserCell>
      </StyledUserGroup>
      <StyledBarUnit>
        <StyledLabel>関係値</StyledLabel>
        <HorizontalBarUnit unitValue={64} graphRatio={96} color="#69AEF8" />
      </StyledBarUnit>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 136px;
  padding: ${space(3)} ${space(4)} ${space(4)};
  border: 1px solid lightGray;
  border-radius: ${BorderRadius.Default};
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space(2)};
`;

const StyledUserGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircle = styled.svg<{ color: UserColorType }>`
  ${square(24)};
  & circle {
    fill: ${props => UserColorTokens[props.color]};
  }
  margin-right: ${space(1)};
`;

const StyledUserCell = styled.td`
  display: flex;
  align-items: flex-start;
  min-width: 168px;
`;

const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${space(2)};
`;

const StyledMemberName = styled.span`
  display: flex;
  align-items: center;
  width: 120px;
  margin-bottom: ${space(1)};
  ${TypographyTokens.Label3};
`;

const StyledTeamName = styled.span`
  display: flex;
  align-items: center;
  min-width: 196px;
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text03};
`;

const StyledBarUnit = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-top: ${space(5)};
`;

const StyledLabel = styled.span`
  margin-right: ${space(6)};
  ${TypographyTokens.Label5};
  color: ${ColorTokens.Text02};
`;

const StyledLastSessionDate = styled.div`
  display: flex;
  align-items: center;
  ${TypographyTokens.Label4};
  color: ${ColorTokens.Text02};
  text-align: right;
`;
