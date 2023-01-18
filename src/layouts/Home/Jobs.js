import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import dynamic from 'next/dynamic';
import { Fragment, useState } from 'react';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import Fangzhou from 'assets/Fangzhou.png';
import Swagger from 'assets/Swagger.png';
import Keck2 from 'assets/Keck2.png';
import { media } from 'utils/style';
import styles from './Jobs.module.css';
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

const Model = dynamic(() => import('components/Model').then(mod => mod.Model));

export const Jobs = ({ id, visible, sectionRef, ...rest }) => {
  const titleId = `${id}-title`;
  return (
    <Fragment>
      <Section id={id}>
        <ProjectContainer className="spr">
          <ProjectHeader
            title={'Work Experiences'}
            description={
              'I have had the opportunity to work as Software Developer and Researcher at several companies and startups. Here, I sum up some of the technologies that I used and learned during these positions. '
            }
          ></ProjectHeader>
          <ProjectSection>
            <div className={styles.flexContainer}>
              <div className={styles.flexChild}>
                <ProjectSectionHeading>SDE Intern @ Ark</ProjectSectionHeading>
                <ProjectSectionText>
                  As an intern at Ark Science and Technology, I worked on backend
                  functionalities and database features to assist more dynamic workflow of
                  the company content management system.
                </ProjectSectionText>
                <ProjectSectionText>
                  In particular I was part of the team that constructed a web-application
                  that encapsulates key database functionalities such as filtering,
                  tagging, and content management features in vue.js and Spring MVC.
                </ProjectSectionText>
                <ProjectSectionText>
                  <ProjectImage
                    raised
                    srcSet={[Fangzhou, Fangzhou]}
                    placeholder={[Fangzhou, Fangzhou]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                  />
                </ProjectSectionText>
                <ProjectSectionText>
                  By the end of my internship, I was able to create a easy-to-use,
                  functional, and efficient backend controll platform that is still being
                  used in managing our flagship application products.
                </ProjectSectionText>
              </div>

              <div className={styles.flexChild}>
                <ProjectSectionHeading>Software Engineer @ Ark</ProjectSectionHeading>
                <ProjectSectionText>
                  After my internship at Ark Science and Technology, I went on to work for
                  the startup as an software development engineer specializing in content
                  recommendation. I worked with a team of 5 people and drastically
                  imporved content personalization and recommendation quality through
                  recommendation techniques such as collaborative filtering and
                  content-based recommendation.
                </ProjectSectionText>
                <ProjectSectionText>
                  I also led a team in building an custom API testing platform for backend
                  api testing with custom parameter parsing and test-file sharing
                  functionalities using swagger ui and Spring.
                </ProjectSectionText>
                <ProjectSectionText>
                  <ProjectImage
                    raised
                    srcSet={[Swagger, Swagger]}
                    placeholder={[Swagger, Swagger]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                  />
                </ProjectSectionText>
                <ProjectSectionText>
                  My implementation of the backend testing platform remain in use for
                  backend Spring testing for the majority of the company backend api
                  routes.
                </ProjectSectionText>
              </div>
            </div>
          </ProjectSection>
          <ProjectSection padding="top">
            <ProjectSectionContent>
              <ProjectSectionHeading>
                Associate Researcher @ USC Keck
              </ProjectSectionHeading>
              <ProjectSectionText>
                As an Associate Researcher at USC Keck School of Medicine, I am working
                with
                <Link href="https://keck.usc.edu/faculty-search/kristian-j-carlson/">
                  Professor Carlson
                </Link>
                on an research project into morphological and physiological indications of
                postcranial skeleton density distribution. As part of our research
                initiative, we are developing several projects concurrently to both make
                skeletal analysis automated, and increase the accuracy and precision of
                cross sectional analysis.
              </ProjectSectionText>
              <ProjectSectionText>
                <ProjectImage
                  raised
                  srcSet={[Keck2, Keck2]}
                  placeholder={[Keck2, Keck2]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
                />
              </ProjectSectionText>
              <ProjectSectionText>
                For the first initiative, I developed an analysis desktop application with
                Java Swing, Wolfram Mathamatica, and R to automate image cross section
                generation, fourier transformation of scan cross-sections, and color
                analysis of density distribution.
              </ProjectSectionText>
              <ProjectSectionText>
                To imporve the speed and accuracy of image analysis, I also developed a
                neural network that utilizes supervised learning to classify cross-section
                images based on training data and predicts the spicies of the image with
                over 85% accuracy. I also worked on imporving edge detection algorithm
                that drastically imporve both the analysis accuracy and prediction hit
                rate by defining bone boundaries more precisly. I am still continuously
                imporving the accuracy of the neural network hit rate and the machine
                learning algorithm to further improve the accuracy and efficiency of the
                research initialtive.
              </ProjectSectionText>
            </ProjectSectionContent>
          </ProjectSection>
        </ProjectContainer>
      </Section>
    </Fragment>
  );
};
