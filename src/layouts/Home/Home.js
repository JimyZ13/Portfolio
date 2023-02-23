import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import HackSC2023MainPage from 'assets/HackSC2023MainPage.png';
import HackSC from 'assets/HackSC-app.jpg';
import InternLogin from 'assets/InternLogin.png';
import InternMainPage from 'assets/InternMainPage.png';
import InternApplied from 'assets/InternApplied.png';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import { Jobs } from 'layouts/Home/Jobs';
import { Credits } from './Credits';
import { Skills } from 'layouts/Home/Skills';
import styles from './Home.module.css';
import StarlinkMainPage from 'assets/StarlinkMainPage.png';

const disciplines = ['Developer', 'Researcher', 'Student'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const skills = useRef();
  const jobs = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      <Skills
        id="skills"
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
      />
      <Jobs
        id="experiences"
        sectionRef={jobs}
        visible={visibleSections.includes(jobs.current)}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="HackSC: Hibiscus"
        description="A comprohensive, opensourced hackathon organization platform written in javascript, designed to streamline hackathon organization and 
        user experience."
        buttonText="View project"
        buttonLink="/projects/hacksc"
        model={{
          type: 'laptop',
          textures: [
            {
              srcSet: [HackSC2023MainPage],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
        title="Checkout all my personal projects here!"
        buttonText="View all personal projects"
        buttonLink="/projects/other_projects"
        model={{
          type: 'laptop2',
          textures: [
            {
              srcSet: [StarlinkMainPage, StarlinkMainPage],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Intern.io"
        description={
          'Up-to-date internship information with save, applied, and favorite features that adresses the lack of valuable internship positions on job sites'
        }
        buttonText="View Project"
        buttonLink="/projects/intern"
        model={{
          type: 'laptop',
          textures: [
            {
              srcSet: [InternMainPage, InternMainPage],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Credits id="credits" />
    </div>
  );
};
