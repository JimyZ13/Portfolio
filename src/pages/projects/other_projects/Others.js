import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import TwitchLogin from 'assets/TwitchLogin.png';
import StarlinkMainPage from 'assets/StarlinkMainPage.png';
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
import styles from './Others.module.css';

const title =
  'This is an collection of finished projects that are no longer deployed because AWS is so expensive :(';
const description =
  'I used many of these projects to learn about new technology and produced industrial level full stack web applications and android applications. Feel free to check out the source codes of each prject on github!';

const twitchTitle =
  'Video- : an twitching stream personalization platform with favorite functionality and personalized recommendation';
const twitchDescription =
  'I built this web application to address the lack of personalized content and customization on twtich. Video- is an app where the entire app is customaized to the liking of the user including content recommendation and favorite streamers.';
const twitchRoles = [
  'Spring MVC',
  'React.js',
  'MySQL + AWS RDS',
  'AWS EC2',
  'RESTful Api',
];

const cloudTitle =
  'Cloud: an primative social network web-application with post management comment functionalitis';

const cloudDescription =
  'I build an imitation of the facebook/instagram application using web technologies to learn more about social application technologies and try to implement more complex application structure and data-management techniques';

const cloudRoles = ['Go Lang', 'React.js', 'MongoDB', 'Elastic Search', 'GCP'];

const starLinkTitle = 'Star Link: an interactive satalite tracking and locating platform';

const starLinkDescription =
  'With the rise of SpaceX and Star Link, I became increasingly interested in space satalites and their location. I subsequently built this web app for tracking real-time position of satalites.';

const starLinkRoles = [
  'React.js',
  'Frontend UI',
  'Ant Design',
  'Geo-Spatial Indexing',
  'Interactive UI',
];

export const Others = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectIntro title={title} description={description} />
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <OtherProjectHeader
          title={twitchTitle}
          description={twitchDescription}
          url="https://github.com/JimyZ13/Video-.git"
          roles={twitchRoles}
        />
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>
              Tech Stack Design and Personalized Recommendation
            </ProjectSectionHeading>
            <ProjectSectionText>
              I designed this web application with horizontal scalability and
              extendability of functionality in mind. I wanted to be able to extend the
              capacity and performance of the application to serve the general public
              while also being able to extend functionalities. I eventually decided to use
              Spring MVC, React, and MySQL for the main structure of the application.
              Spring allows for seperation of service logic and database operations. This
              allos for easy functionality scaling where I can implement key database
              operations indepedently of service end logic.
            </ProjectSectionText>
            <ProjectSectionText>
              In the project Video- I used content-based recommendation techiniques to
              personalize content recommendation for users. I pulled teh recommendation
              data from the twitch platform using the official twitch api and encapsulated
              them using spring controller classes. I then designed a content
              recommendation algorithm that used tag-based filtering for user-specific
              content recommendation. Each of the tags that users sets in their profile is
              used as a point of reference for recommending specific genre of twitch
              resouces.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <Image
            key={themeId}
            srcSet={[TwitchLogin, TwitchLogin]}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt={`Login page of the web application Video-`}
            sizes="100vw"
          />
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionText>
              I hosted this application on AWS EC2 for two months before ultimatly rolling
              back the production version when the aws bill got too high. This application
              was an exceptional learning opportunity for me as it is the first industrial
              level full stack application that I built. I learned a lot about the
              technologies that is behind web applications and was able to create a
              complete web app. Also having gone through the development cycle of an
              application and the deployment cycle, this project helped me define a
              foundation for subsequent applications that I wrote.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <OtherProjectHeader
          title={cloudTitle}
          description={cloudDescription}
          url="https://github.com/JimyZ13/Cloud-.git"
          roles={cloudRoles}
        />
        <ProjectSection light={isDark}>
          <ProjectTextRow>
            <ProjectSectionHeading>Designing Application Structure</ProjectSectionHeading>
            <ProjectSectionText>
              Having built an full stack application before, I was able to design the
              project structure for Cloud with more customization. I choose to explore the
              more modern and python-like language of Go. Go offered the same versitility
              and compatibility that Java offered in my previous project but is more
              light-weight and offers a much simpler syntax and backend structure. I also
              decided to try to use GCP as opposed to AWS this time and rented a elastic
              instance on GCP. This allowed me to directly code to the computing instance
              through SSH and Shell connections.
            </ProjectSectionText>
            <ProjectSectionText>
              In the end, I hosted the backend go application on GCP and the frontend on
              AWS. I was able to recreate many of the key functionalities of facebook. In
              particular I was able to implement, post sharing, post commenting, and like
              post functionalities with Go. Using Go Lang also exposed me to a wider range
              of OOD principles that Spring did not offer. For example, through the more
              compact and coupled structure of a Go app, I was able to learn the
              difference between system design principles and their drawbacks.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <OtherProjectHeader
          title={starLinkTitle}
          description={starLinkDescription}
          url="https://github.com/JimyZ13/starlink.git"
          roles={starLinkRoles}
        />
        <ProjectSection light={isDark}>
          <Image
            key={themeId}
            srcSet={[StarlinkMainPage, StarlinkMainPage]}
            placeholder={
              isDark
                ? imageSprComponentsDarkPlaceholder
                : imageSprComponentsLightPlaceholder
            }
            alt={`Login page of the web application Video-`}
            sizes="100vw"
          />
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Designing a Interactive UI</ProjectSectionHeading>
            <ProjectSectionText>
              After building several full stack applications, I feel my backend and
              database skills have developed signifigantly. However, I sill lacked some
              key skills in frontend UI design and frontend layouts. I chose this project
              that is light on the backend to focuse on the design and implementation of
              the frontend components. I continued to use react since the state hook
              functions offered a easy way to design responsive UI. I also used design
              libraries such as antd and react-bootstrap to help me style components and
              make them interactive. These bundles also compile to vanila javascript in
              redering which helps to reduce the load of deployment.
            </ProjectSectionText>
            <ProjectSectionText>
              The application mainly uses API routes that are provided by the StarLink
              official documentations, and other edge functionalities are implemented with
              javascript controllers and api routes. I used geo-spacial based indexing for
              features that keep track of location lookup and search functionalities.
            </ProjectSectionText>
            <ProjectSectionText>
              In the end I was able to create an interactive UI that encapsulates key api
              functionalities that allow easy lookup, tracking, and information search of
              Star Link satalites. I deployed the application for testing on AWS EC2 but
              also took down the production image after a few month.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
