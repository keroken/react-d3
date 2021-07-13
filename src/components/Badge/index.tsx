/* eslint-disable react/require-default-props */
import { BorderRadius, ColorTokens, ZIndexes, square } from '@/styles';
import React, { useMemo } from 'react';
import styled from 'styled-components';

type Props = {
  number: number;
  max?: number; // number がこの値より大きくなると n+ 表示となる
  isDisabled?: boolean;
};

export const Badge = ({ number, max = 99, isDisabled = false }: Props) => {
  const numberLabel = useMemo(() => (number > max ? `${max}+` : number.toString()), [number, max]);

  return <StyledBadge isDisabled={isDisabled}>{numberLabel}</StyledBadge>;
};

const StyledBadge = styled.span<{ isDisabled: boolean }>`
  z-index: ${ZIndexes.Badge};
  display: inline-block;
  ${square(15)}
  font-size: 10px;
  line-height: 14px;
  color: ${ColorTokens.Text05};
  text-align: center;
  background-color: ${props => (props.isDisabled ? ColorTokens.Icon02 : ColorTokens.Support01)};
  border-radius: ${BorderRadius.Circle};
`;
