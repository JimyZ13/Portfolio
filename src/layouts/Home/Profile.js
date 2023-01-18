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
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText
        text="Hi! Thank you for visiting my webpage"
        start={visible}
        delay={500}
      />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My name is Benran Zhang, and I am a sophomore studying Computer Science at the
      University of Southern California. I am activly seeking SDE internships and
      positions, and am experienced in software development, data science, and computer
      architecture.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Although I am a adaqute full stack web developer, my primary skills and interests
      lie in backend development and have led and participated in many industrial-level
      backend infastructures. I have implemented and imporved complex backend
      functionalities such as recommendation systems, distributed backend services, and
      search engins.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Please feel free to check out projects that I have worked on and consolidations of
      my work experience in the SDE industry and notes on subjects that I found
      particularly helpful when working on these projects. Checkout the credits tab for
      detailed information about how this website was built and some very helpful
      resources that I used.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

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
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
