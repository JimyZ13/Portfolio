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
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
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
import styles from './Profile.module.css';

const CreditsText = ({ visible, titleId }) => (
  <Fragment>
    <Text>Test</Text>
  </Fragment>
);

export const Credits = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  const roles = ['Next.js', 'Three.js', 'Framer Motion', 'Partial Hydration'];

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <Fragment>
            <ProjectContainer className={'spr'}>
              <ProjectHeader
                title={'Credits'}
                description={
                  'This web application is built with Next.js 12.1+, the componenets are compartimentalized into layout components and the entire app is redered using partial hydration to reduce load time'
                }
                roles={roles}
              ></ProjectHeader>
              <ProjectSection padding="top">
                <ProjectSectionContent>
                  <ProjectSectionText>
                    The webpage UI design and layout was inspired by the amazing work of
                    UI/UX expert{' '}
                    <Link href="https://github.com/HamishMW">Hamish William</Link>. Please
                    checkout his protfolio page to see his original ui! Also checkout this{' '}
                    <Link href="https://codewithsadee.github.io/portfolio/">
                      sample layout
                    </Link>
                    page where I took the design of the progress bars from. The 3d
                    graphics of this webpage is written in the WebGL language and redered
                    using the three.js scene redering functionalities. Other technologies
                    that I used in the UI layout include: storybook, webpacks, bootstrap,
                    and framer motion.
                  </ProjectSectionText>
                </ProjectSectionContent>
              </ProjectSection>
            </ProjectContainer>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
};
