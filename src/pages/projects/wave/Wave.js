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
import { media } from 'utils/style';
import styles from './Wave.module.css';

const title = 'Wave: an interactive musical dating application.';
const description =
  'I lead an team of 7 fellow students to build this dating application to address the stale and unimaginative state of other dating applications.';
const roles = [
  'Project Management',
  'System Design',
  'Distributed Systems',
  'Supervised Learning',
  'IOS Application',
];

export const Wave = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectHeader
          title={title}
          description={description}
          url="https://hacksc.com/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Intiative</ProjectSectionHeading>
            <ProjectSectionText>
              We founded Wave at USC with a group of like-minded, diversed group of
              students who belives in the power of music and how much music affects
              relationships. We decided to take the idea of music and dating to the next
              level by building an ios application that fully integrates music into every
              functionality to create a unique and inspiring user experience.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project and System Structure</ProjectSectionHeading>
              <ProjectSectionText>
                Because of the user-oriented nature of the application, we designed the
                entire project structure to be extremly scalable and capable of handeling
                extremly heavy server load. Because of theis, we implemented a
                functiona-based distributed system that can split load across different
                instances to produce a fast, responsive, and reliable tech stack. We also
                choose an layered structure for this project. We have layers that deal
                with compartimentalized sections of the application such as: service
                logic, machine learning, recommendation, and kafka flow and real time
                data-synchronization.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Service Logic and Database</ProjectSectionHeading>
              <ProjectSectionText>
                The backend of the project serves as a concentration of all other layers
                and functionalities and encapsulats them in such a way that can be called
                by our ios frontend. We used Spring Boot for our project since it offers a
                very versitile functionality that is compatible out of the box with most
                of our other layers. For our database, since the nature of the data that
                we deal with is user based and would not benefit from a tabled structure,
                we devcided to use DynamoDB to handle user information and profile. Our
                Spring layer directly manipulates our database to carry out CRUD
                functionalities for basic functions.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
