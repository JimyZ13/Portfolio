import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import TwitchLogin from 'assets/TwitchLogin.png';
import StarlinkMainPage from 'assets/StarlinkMainPage.png';
import InternLogin from 'assets/InternLogin.png';
import InternMainPage from 'assets/InternMainPage.png';
import InternApplied from 'assets/InternApplied.png';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectIntro,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  OtherProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './Intern.module.css';

const title = 'Intern.io: an web-app built for easy, direct internship positions in SDE';
const description =
  'I lead this project to address the numerous advertisment for internship on other job boards that are just there for display. We was tired of no getting an reply weels after submitting an application, so we built our own platform';

const roles = ['Project Management', 'Spring Boot', 'React', 'MySQL', 'Hibernate', 'AWS'];

export const Intern = () => {
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
        <OtherProjectHeader
          title={title}
          description={description}
          url="https://github.com/JimyZ13/Video-.git"
          roles={roles}
        />
        <ProjectSection>
          <Image
            key={themeId}
            srcSet={[InternLogin, InternLogin]}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt={`Intern Login Page`}
            sizes="70vw"
          />
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              We Designed the web application with scalability in mind. Since our goal is
              to expand to include internships all over the world, our application needs
              to be scalable. For this reason, we choose Spring to handel api calls
              through RESTful api, and MySQL Database with AWS RDS to dynamically scale
              our database.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
