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
import { useEffect } from 'react';
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, []);

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
        <ProjectSection light={isDark}>
          <ProjectTextRow>
            <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
            <ProjectSectionText>
              We Designed the web application with scalability in mind. Since our goal is
              to expand to include internships all over the world, our application needs
              to be scalable. For this reason, we choose Spring to handel api calls
              through RESTful api, and MySQL Database with Hibernate to dynamically scale
              our database. By Hibernating our SQL database, we were able to achieve an
              easy relational mapper that would scale automatically as our database grows.
              The use of an RESTful api also allow us to handle multiple concurrent
              requests from clients and scales dynamically.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <Image
            key={themeId}
            srcSet={[InternApplied, InternApplied]}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt={`Intern Login Page`}
            sizes="70vw"
          />
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectTextRow>
            <ProjectSectionHeading>Frontend and Routing</ProjectSectionHeading>
            <ProjectSectionText>
              For an compact frontend UI we used react.js to achieve multiple routing with
              server side rendering to increase initial load times and application
              performance. Our routes on the react app are pre-redered on the node server
              and contents are dynamically updated through partial page-reload. This wroks
              well since our application do not requrie constant refreshes.
            </ProjectSectionText>
            <ProjectSectionText>
              We also implemented many interactive features on the frontnet UI by using
              react state hooks to achieve directed animations and routing as users
              interact with UI components.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Filtering and Searching</ProjectSectionHeading>
            <ProjectSectionText>
              In addition to basic database functions, we also implemented personalized
              filtering functionalities to achieve the applied features and to keep track
              of jobs that are still available. When a user is logged in, they are also
              able to proceed to record jobs that they applied to and save them in their
              personal profile in order to review their applied internship positions.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <Image
            key={themeId}
            srcSet={[InternMainPage, InternMainPage]}
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
            <ProjectSectionHeading>Final Outcomes</ProjectSectionHeading>
            <ProjectSectionText>
              This project was a great success as we implmeneted an web application that
              is both user oriented, and contains job information that are hard to find.
              We also have a extremly expandable application architecture that allows us
              to expand in the future.
            </ProjectSectionText>
            <ProjectSectionText>
              In the future, we plan on automating the job listing additions to our
              database by implementing an simple python web-crawler that retrieves
              information from the web in a seperate application layer and feed into our
              database system.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
