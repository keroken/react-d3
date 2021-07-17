import { ModalSelect } from '.';
import { SizeProps } from '@/components/BasicModal';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { iconSelect, makeMeta } from '@/helpers/Story';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export default makeMeta({
  component: ModalSelect,
  meta: {
    package: 'core',
    type: 'components',
    category: 'inputs',
    name: 'ModalSelect',
  },
});

export const WithPicture = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  const handleClickSelectLeft = useCallback(() => {
    setIsOpen(false);
    action('onSelectLeft');
  }, []);

  const handleClickSelectRight = useCallback(() => {
    setIsOpen(false);
    action('onSelectRight');
  }, []);

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={text('title', '撮影方法の選択')}
        secondaryButtonIcon={select('iconLeft', iconLeft.options, 'image')}
        mainButtonIcon={select('iconRight', iconRight.options, 'video')}
        secondaryButtonLabel={text('labelLeft', 'ファイル選択')}
        mainButtonLabel={text('labelRight', '動画撮影')}
        onClickSecondaryButton={handleClickSelectLeft}
        onClickMainButton={handleClickSelectRight}
        imageUrl={text('url', 'https://keroken.com/image/interview-image01.png')}
        centerTitle={boolean('center title', false)}
        showBottomSeparationLine={boolean('show bottom separation line', false)}
        showTopSeparationLine={boolean('show top separation line', true)}
        imageOnBottom={boolean('image bottom', false)}
        size={{ width: select('select width', widthSelect, 'regular') }}
      >
        <StyledText>
          {text(
            'body',
            `このまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。`,
          )}
        </StyledText>
      </ModalSelect>
    </>
  );
};

export const WithPicture2 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  const handleClickSelectLeft = useCallback(() => {
    setIsOpen(false);
    action('onSelectLeft');
  }, []);

  const handleClickSelectRight = useCallback(() => {
    setIsOpen(false);
    action('onSelectRight');
  }, []);

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={text('title', '撮影のポイント')}
        centerTitle={boolean('center title', true)}
        showBottomSeparationLine={boolean('show bottom separation line', true)}
        showTopSeparationLine={boolean('show top separation line', false)}
        secondaryButtonIcon={select('iconLeft', iconLeft.options, undefined)}
        mainButtonIcon={select('iconRight', iconRight.options, undefined)}
        secondaryButtonLabel={undefined}
        mainButtonLabel={text('labelRight', '今すぐ始める')}
        onClickSecondaryButton={handleClickSelectLeft}
        onClickMainButton={handleClickSelectRight}
        imageUrl={text('url', 'https://keroken.com/image/phone-position-illustration.png')}
        imageOnBottom={boolean('image bottom', true)}
        buttonPadding={select('buttonPadding', buttonPadding.options, 'wide')}
        size={{ width: select('select width', widthSelect, 'regular') }}
      >
        <StyledText2>
          {text(
            'body',
            `撮影の際はスマートフォンを固定し、自分が中心になるように撮影しましょう。周りの騒音や、逆光などにもご注意ください。
            `,
          )}
        </StyledText2>
      </ModalSelect>
    </>
  );
};

export const WithoutPicture = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  const handleClickSelectLeft = useCallback(() => {
    setIsOpen(false);
    action('onSelectLeft');
  }, []);

  const handleClickSelectRight = useCallback(() => {
    setIsOpen(false);
    action('onSelectRight');
  }, []);

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={text('title', '撮影方法の選択')}
        secondaryButtonIcon={select('iconLeft', iconLeft.options, 'image')}
        mainButtonIcon={select('iconRight', iconRight.options, 'video')}
        secondaryButtonLabel={text('labelLeft', 'ファイル選択')}
        mainButtonLabel={text('labelRight', '動画撮影')}
        onClickSecondaryButton={handleClickSelectLeft}
        onClickMainButton={handleClickSelectRight}
        centerTitle={boolean('center title', false)}
        showBottomSeparationLine={boolean('show bottom separation line', false)}
        showTopSeparationLine={boolean('show top separation line', true)}
        size={{ width: select('select width', widthSelect, 'regular') }}
      >
        <StyledText>
          {text(
            'body',
            `このまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。`,
          )}
        </StyledText>
      </ModalSelect>
    </>
  );
};

export const OverflowYScroll = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleOpen = useCallback(() => setIsOpen(prevState => !prevState), []);

  const handleClickSelectLeft = useCallback(() => {
    setIsOpen(false);
    action('onSelectLeft');
  }, []);

  const handleClickSelectRight = useCallback(() => {
    setIsOpen(false);
    action('onSelectRight');
  }, []);

  return (
    <>
      <StyledLabel onClick={e => e.stopPropagation()}>
        <input type="checkbox" checked={isOpen} onChange={handleToggleOpen} style={{ margin: '10px' }} />
        open
      </StyledLabel>
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={text('title', '撮影方法の選択')}
        secondaryButtonIcon={select('iconLeft', iconLeft.options, 'image')}
        mainButtonIcon={select('iconRight', iconRight.options, 'video')}
        secondaryButtonLabel={text('labelLeft', 'ファイル選択')}
        mainButtonLabel={text('labelRight', '動画撮影')}
        onClickSecondaryButton={handleClickSelectLeft}
        onClickMainButton={handleClickSelectRight}
        centerTitle={boolean('center title', false)}
        showBottomSeparationLine={boolean('show bottom separation line', false)}
        showTopSeparationLine={boolean('show top separation line', true)}
        size={{ width: select('select width', widthSelect, 'regular') }}
      >
        <StyledText>
          {text(
            'body',
            `このまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。このまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。\n\nこのまま撮影する場合は「動画撮影」を選択してください。\n\n事前に動画を撮影している場合には「ファイル選択」をお選びください。`,
          )}
        </StyledText>
      </ModalSelect>
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

const StyledText = styled.p`
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 0;
`;

const StyledText2 = styled.p`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
`;

type PaddingWidth = 'regular' | 'wide';

const modalWidth: Record<SizeProps['width'], SizeProps['width']> = {
  small: 'small',
  regular: 'regular',
  wide: 'wide',
  'regular-small': 'regular-small',
};

const knobData = {
  iconLeft: iconSelect(),
  iconRight: iconSelect(),
  buttonPadding: {
    options: ['regular', 'wide'] as PaddingWidth[],
  },
  widthSelect: modalWidth,
};

const { iconLeft, iconRight, buttonPadding, widthSelect } = knobData;
