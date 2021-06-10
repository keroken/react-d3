// import { ColorTokenType, ColorTokens, IconToken, IconTokens } from '@/styles';
import { FC, Component as ReactComponent } from 'react';
// import { IconName, iconElements } from '@Icon';

type ComponentStory = {
  package: 'core' | 'candidate' | 'company' | 'prism';
  type: 'components';
  category: 'dataDisplay' | 'feedback' | 'inputs' | 'layout' | 'navigation' | 'surfaces' | 'utils';
};

type CandidatePageStory = {
  package: 'candidate';
  type: 'pages';
  category: 'Entry' | 'Interview';
};

type CompanyPageStory = {
  package: 'company';
  type: 'pages';
  category:
    | 'LiveInterview'
    | 'MyPage'
    | 'AuditLogDownload'
    | 'CSVDownloadOptions'
    | 'News'
    | 'ProgressStatus'
    | 'CompanyReport'
    | 'Reviewer';
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ReactComponent<any, any> | FC<any>;
  meta: {
    name: string;
  } & (ComponentStory | CandidatePageStory | CompanyPageStory);
  decorators?: [(story: unknown) => JSX.Element];
  includeStories?: string[];
};

export function makeMeta({ component, meta, decorators, includeStories }: Props) {
  return {
    component,
    title: `${meta.package}|${meta.type}/${meta.category}/${meta.name}`,
    decorators,
    includeStories,
  };
}

// export function iconSelect(defaultIcon?: IconName) {
//   return {
//     label: 'icon',
//     options: Object.keys(iconElements).reduce(
//       (acc, iconName) => ({ ...acc, [iconName]: iconName }),
//       {} as Record<IconName, IconName>,
//     ),
//     default: defaultIcon ?? ('archive' as IconName),
//   };
// }

// export function colorNameSelect(defaultColor?: ColorTokenType) {
//   return {
//     label: 'color',
//     options: Object.keys(ColorTokens).reduce(
//       (acc, colorName) => ({ ...acc, [colorName]: colorName }),
//       {} as Record<ColorTokenType, ColorTokenType>,
//     ),
//     default: defaultColor ?? ('Icon02' as ColorTokenType),
//   };
// }

// export function iconSizeSelect(defaultIconSize?: IconToken) {
//   return {
//     label: 'icon size',
//     options: Object.keys(IconTokens).reduce(
//       (acc, size) => ({ ...acc, [size]: size }),
//       {} as Record<IconToken, IconToken>,
//     ),
//     default: defaultIconSize ?? ('Large' as IconToken),
//   };
// }
