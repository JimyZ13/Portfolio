import ArrowDown from 'assets/arrow-down.svg';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { AnimatePresence } from 'framer-motion';
import { useInterval, usePrevious, useScrollToHash } from 'hooks';
import dynamic from 'next/dynamic';
import RouterLink from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { cssProps } from 'utils/style';
import styles from './Intro.module.css';

const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export function Intro({ id, sectionRef, disciplines, scrollIndicatorHidden, ...rest }) {
  const theme = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setdeleting] = useState(false);
  const words = ['Developer', 'Researcher', 'Engineer', 'Student'];
  const [curText, setCurText] = useState('');
  const period = 600;
  const [timeBetween, setTimeBetween] = useState(200 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, timeBetween);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = deleting
      ? fullText.substring(0, curText.length - 1)
      : fullText.substring(0, curText.length + 1);

    setCurText(updatedText);

    if (deleting) {
      setTimeBetween(prevTimeBetween => prevTimeBetween / 2);
    }

    if (!deleting && updatedText === fullText) {
      setdeleting(true);
      setTimeBetween(period);
    } else if (deleting && updatedText === '') {
      setdeleting(false);
      setLoopNum(loopNum + 1);
      setTimeBetween(200);
    }
  };

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5000,
    theme.themeId
  );

  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            <DisplacementSphere />
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text="Benran Zhang" delay={300} />
              </h1>
              <Heading level={0} as="h3" className={styles.title}>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  ></span>
                </span>
                <div className={styles.row} component="span">
                  <span
                    aria-hidden
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationL })}
                  >
                    {curText}
                  </span>
                </div>
              </Heading>
            </header>
            <RouterLink href="/#profile">
              <a
                className={styles.scrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
              >
                <VisuallyHidden>Scroll to projects</VisuallyHidden>
              </a>
            </RouterLink>
            <RouterLink href="/#profile">
              <a
                className={styles.mobileScrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
              >
                <VisuallyHidden>Scroll to projects</VisuallyHidden>
                <ArrowDown aria-hidden />
              </a>
            </RouterLink>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
