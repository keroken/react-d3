import { BasicModal, SizeProps } from '.';
import { boolean, select, text } from '@storybook/addon-knobs';
import { makeMeta } from '@/helpers/Story';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: BasicModal,
  meta: {
    package: 'core',
    type: 'components',
    category: 'dataDisplay',
    name: 'BasicModal',
  },
});

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} className="checkbox" />
        open
      </StyledLabel>
      <BasicModal
        isOpen={isOpen}
        title={text('title', '撮影方法の選択')}
        setIsOpen={setIsOpen}
        keepOpen={boolean('keep open', true)}
        showTopSeparationLine={boolean('show top separation line', true)}
        centerTitle={boolean('center title', false)}
        size={{
          width: select('select width', widthSelect, 'regular'),
          height: select('select height', heightSelect, 'fit'),
        }}
      >
        <StyledText>
          {text(
            'body',
            `このまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。`,
          )}
        </StyledText>
      </BasicModal>
    </>
  );
};

const modalWidth: Record<SizeProps['width'], SizeProps['width']> = {
  small: 'small',
  regular: 'regular',
  wide: 'wide',
  'regular-small': 'regular-small',
};

const modalHeight: Record<SizeProps['height'], SizeProps['height']> = {
  fit: 'fit',
  fullscreen: 'fullscreen',
};

const knobData = {
  widthSelect: modalWidth,
  heightSelect: modalHeight,
};

const { heightSelect, widthSelect } = knobData;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > input {
    -webkit-appearance: checkbox;
    margin: 10px;
  }
`;

const StyledText = styled.p`
  display: inline-block;
  margin: 16px;
`;
