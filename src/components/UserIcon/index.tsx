import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  imageUrl: string;
  size: 'small' | 'regular' | 'large';
  isActive: boolean;
};

export const UserIcon = ({ imageUrl, size, isActive }: Props) => {
  return (
    <>
      <StyledMemberIcon imageUrl={imageUrl} size={size}>
        {isActive && <StyledBadge size={size} />}
      </StyledMemberIcon>
    </>
  );
};

const StyledMemberIcon = styled.span<Pick<Props, 'imageUrl' | 'size'>>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 24px;
          height: 24px;
        `;
      case 'large':
        return css`
          width: 64px;
          height: 64px;
        `;
      default:
        return css`
          width: 32px;
          height: 32px;
        `;
    }
  }};
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  border-radius: 999px;
`;

const StyledBadge = styled.span<Pick<Props, 'size'>>`
  position: absolute;
  right: 0;
  bottom: 0;
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 16px;
          height: 16px;
        `;
      default:
        return css`
          width: 10px;
          height: 10px;
        `;
    }
  }};
  border-radius: 999px;
  border: 1px solid white;
  background-color: #17D4E5;
`;
