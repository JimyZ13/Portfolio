import HackSCMainPage from 'assets/HackSCMainPage.png';
import HackSCStorybook from 'assets/HackSCStorybook.png';
import HackSCAdminUI from 'assets/HackSCAdminUI.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import { Section } from 'components/Section';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useMemo } from 'react';
import styles from './Skills.module.css';
import { media, rgbToThreeColor } from 'utils/style';
import { Progress } from 'components/Progress';

export const Skills = ({ id }) => {
  return (
    <Fragment>
      <Section id={id}>
        <ProjectContainer className={'spr'}>
          <ProjectHeader
            title={'General Skills'}
            description={
              'Here is a summary of the general skills that I developed and applied in my everyday work as a software engineer and a leader.'
            }
          ></ProjectHeader>
          <ProjectSectionContent>
            <Progress percent={95.23} name={'Object Oriented Design'} />
            <Progress percent={82.23} name={'Project Management (Agile Development)'} />
            <Progress
              percent={80.23}
              name={'Network Design and Computing Optimization'}
            />
            <Progress
              percent={73.53}
              name={'System Design Patterns and System Architecture'}
            />
          </ProjectSectionContent>
        </ProjectContainer>
        <ProjectContainer className={'spr'}>
          <ProjectHeader
            title={'Skills in Technology'}
            description={
              'Here are some of the tools that found most useful in software development. '
            }
          ></ProjectHeader>
          <ProjectSectionContent>
            <Progress percent={94.23} name={'Java (Spring MVC, Maven)'} />
            <Progress
              percent={89.23}
              name={'Database (MySQL, DynamoDB, GraphQL, Elastic Search)'}
            />
            <Progress
              percent={88.23}
              name={'C/C++ (OOD, Cache Optimization, Operating Systems, System Networks)'}
            />
            <Progress
              percent={86.23}
              name={'Java Script (Type Script, Next.js, React.js, Vue.js, Express.js)'}
            />
            <Progress
              percent={83.53}
              name={
                'Content Recommendation (User-User, Content, Collaborative Filtering)'
              }
            />
          </ProjectSectionContent>
        </ProjectContainer>
      </Section>
    </Fragment>
  );
};
