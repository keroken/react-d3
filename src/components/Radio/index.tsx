import { ColorTokens, TransitionSpeeds, TypographyTokens, space, square } from '@/styles';
import React, { ChangeEvent, useCallback } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  name?: string;
  id?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({ name = '', id, label = '', checked = false, disabled = false, value, onChange }: Props) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => !disabled && onChange?.(e), [
    disabled,
    onChange,
  ]);

  return (
    <StyledBase id={id} disabled={disabled} onClick={e => e.stopPropagation()}>
      <input type="checkbox" name={name} value={value} checked={checked} disabled={disabled} onChange={handleChange} />
      <StyledIndicator checked={checked} disabled={disabled} />
      {label !== '' ? <StyledLabel>{label}</StyledLabel> : null}
    </StyledBase>
  );
};

const StyledBase = styled.label<Required<Pick<Props, 'disabled'>>>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${ColorTokens.Disabled01};
      cursor: not-allowed;
    `}

  > input[type='checkbox'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

const StyledIndicator = styled.span<Required<Pick<Props, 'checked' | 'disabled'>>>`
  ${square(20)}
  position: relative;
  display: inline-block;
  flex: 0 0 auto;
  background-color: white;
  border: 2px solid ${ColorTokens.Ui02};
  border-radius: 20px;
  transition: border ${TransitionSpeeds.Fast};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${ColorTokens.Disabled01};
    `}

  ${({ checked }) =>
    checked &&
    css`
      border-color: ${ColorTokens.Ui02};
    `}

  &::after {
    ${square(12)}
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    content: '';
    background-color: ${ColorTokens.Support02};
    border-radius: 12px;
    transition: transform ${TransitionSpeeds.Fast};
    transform: scale3d(0, 0, 1);

    ${({ checked }) =>
      checked &&
      css`
        transform: scale3d(1, 1, 1);
      `}
  }
`;

const StyledLabel = styled.span`
  flex: 1 0 0;
  margin-left: ${space(2)};
  ${TypographyTokens.Label2}
  color: ${ColorTokens.Text01};
  word-break: break-all;
  user-select: none;

  &:empty {
    padding-left: ${space(5)};
  }
`;
