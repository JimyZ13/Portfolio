import HackSCMainPage from 'assets/HackSCMainPage.png';
import HackSCStorybook from 'assets/HackSCStorybook.png';
import HackSCAdminUI from 'assets/HackSCAdminUI.png';
import HackSC2023MainPage from 'assets/HackSC2023MainPage.png';
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
import styles from './HackSC.module.css';

const title = 'HackSC: an open sourced hackathon platformed built by hackers for hackers';
const description =
  'This was an very personal organization that I am proud to be part of. As an computer scientist and tech geek, I have always appreciated good oportunities to learn and build coll things and HackSC is a truly great platform for experiencing and building cool projects. I am also proud to have contributed to many components of HackSC as a backend engineer.';
const roles = [
  'Backend Developer',
  'Backend/Frontend Integration',
  'Front End Development',
  'Deployment and Environment Standarization',
  'Next, Express, Node',
  'Node servers, Docker containment',
];

export const HackSC = () => {
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
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={[HackSC2023MainPage, HackSC2023MainPage]}
              placeholder={[HackSCMainPage, HackSCMainPage]}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Project Intiative</ProjectSectionHeading>
            <ProjectSectionText>
              HackSC was founded in USC with the purpose of providing better, more
              engaging, and more functional tools for hosting hackathons. With this
              mission we have hosted three hackathons since 2020 and now aim to open
              source all the tools that we use in planning and hosting a hackathon. By
              imporving scalability of our management systems, building an SSO system from
              scratch, and adding to the evergrowing functionality of our platform,
              project Hibiscus will provide a accessible platform for anyone to host a
              hackathon.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={[HackSCAdminUI, HackSCAdminUI]}
              placeholder={[HackSCAdminUI, HackSCAdminUI]}
              alt={`HackSC admin ui design`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>
                The admin portal and functionalities
              </ProjectSectionHeading>
              <ProjectSectionText>
                Personally, I worked on adding and perfecting functions to the
                administrator portal of project Hibiscus. Using Next.js 13, our
                engineering team were able to create a responsive ui with the
                functionality of organizing teams in a hackathon. Through the hacker
                portal, hackers can create, join, or request to be part of a team. By
                using routing and SSR techiniques in Next.js and Express, these
                functionalities can be easily repurposed for an open sourced project.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>
                Log Server and Hacker Matching
              </ProjectSectionHeading>
              <ProjectSectionText>
                Among our many applications in project Hibiscus, the log server stands as
                an unique BaaS product that provides tracking for any event
                organizization. By using milliesearch and express.js, we cosntructed a
                standalone backend service that offers customizablecontent tracking that
                is compatible with all major frontend frameworks. Using milliesearch and
                docker containment, we also provide a easy automatic deployment image
                generator that can automatically deploy project updates without server
                side image rebuilding.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={[HackSCStorybook, HackSCStorybook]}
              placeholder={[HackSCStorybook, HackSCStorybook]}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>UI Components and Storybook</ProjectSectionHeading>
              <ProjectSectionText>
                To help others adopt our paltforms, we created a storybook for individual
                components of our platform where users can browse through each component
                template that we used in both our recruitment page and our UI for hacker
                portal and administrator portal. These elements are also
                compartimentalized for easy usage outside of the Hibiscus project.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Standarization and Deployment</ProjectSectionHeading>
              <ProjectSectionText>
                During the deployment phase of project Hibiscus, I was also part of the
                team that standarized all our various applications and backend services
                using Docker images and constructed customized image containers for safe
                and universal deployment. Most of our application use the Next.js
                framework and are deployed using the vercel webpack manager and deployment
                tool. We also created automated scirpts for image generation to aid others
                in deploying their projects if they based their systems on project
                Hibiscus.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Overall our student organization is one of the largest hackathon orgs in
                the US and we are continueing to host the HackSC 2023 hackathon this
                Feburary. We released project Hibiscus in December 2022 and will continue
                to contribute to the open source project as we enhance our hosting
                functionalities and platforms.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
    </Fragment>
  );
};
