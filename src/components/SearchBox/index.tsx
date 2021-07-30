import { BorderRadius, ColorTokens, TypographyTokens, space } from '@/styles';
import { Icon } from '@/components/Icon';
import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

type BackgroundColor = 'white' | 'gray';

type Props = {
  text?: string;
  onChange?: (text: string) => void;
  placeholder: string;
  width?: CSSProperties['width'];
  backgroundColor?: BackgroundColor;
  onSubmit?: () => void;
  showDetailsIcon?: boolean;
  onClickDetailsIcon?: () => void;
  showDeleteIcon?: boolean;
  onClickDeleteIcon?: () => void;
};

export const SearchBox = ({
  text,
  onChange,
  placeholder,
  onSubmit,
  width,
  showDetailsIcon = false,
  onClickDetailsIcon,
  showDeleteIcon = false,
  onClickDeleteIcon,
  backgroundColor = 'gray',
}: Props) => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit !== undefined) {
      onSubmit();
    }
  };

  return (
    <StyledSearchBox width={width} backgroundColor={backgroundColor}>
      <form onSubmit={handleOnSubmit}>
        <div className="search-area">
          <Icon name="search" color="Icon01" />
          <input
            type="text"
            className="search-box"
            placeholder={placeholder}
            value={text}
            onChange={e => onChange?.(e.target.value)}
          />
          {showDeleteIcon && text !== '' ? (
            <StyledDeleteIcon>
              <Icon name="input-delete" size="Large" onClick={onClickDeleteIcon} />
            </StyledDeleteIcon>
          ) : null}
          {showDetailsIcon ? <Icon name="slider-editing" onClick={onClickDetailsIcon} /> : null}
        </div>
      </form>
    </StyledSearchBox>
  );
};

const searchBoxBackgroundColor = (backgroundColor?: BackgroundColor) => css`
  background-color: ${backgroundColor === 'gray' ? `${ColorTokens.Field02}` : `${ColorTokens.Field01}`};
`;

const StyledSearchBox = styled.div<Pick<Props, 'width' | 'backgroundColor'>>`
  width: ${props => props.width ?? '100%'};
  .search-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${props => props.width ?? '100%'};
    border: none;
    border-radius: ${BorderRadius.Default};
    ${({ backgroundColor }) => searchBoxBackgroundColor(backgroundColor)}
    & span {
      flex-shrink: 0; /* IE でアイコンの幅が潰れてしまうため */
    }
    & svg {
      margin: 0 ${space(2)};
    }
    & .search-box {
      width: 100%;
      height: 40px;
      ${TypographyTokens.Label2}
      padding: 0 ${space(3)};
      color: ${ColorTokens.Interactive02};
      background-color: ${ColorTokens.Field02};
      border: none;
      border-radius: ${BorderRadius.Default};
      ${({ backgroundColor }) => searchBoxBackgroundColor(backgroundColor)}
      ::placeholder {
        color: ${ColorTokens.Text04};
      }
      &::-ms-clear {
        display: none;
      }
    }
  }
`;

const StyledDeleteIcon = styled.span`
  cursor: pointer;
  path {
    fill: ${ColorTokens.Icon03};
  }
`;
