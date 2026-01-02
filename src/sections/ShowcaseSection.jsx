import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT SIDE */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <a href="https://github.com/orgs/uOttawaGymManagementSys/repositories">
                <img src="/images/project1.png" alt="GymInsights" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                GymInsights: a Real-Time Traffic and Equipment Status Tracker
                for University of Ottawa Students
              </h2>
              <p>
                GymInsights is a Full-Stack platform featuring a React Native
                mobile app, an Electron desktop app, and a REST API server.
              </p>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a href="https://github.com/OussemaNijewi/KineQuest">
                  <img src="/images/project2.png" alt="KineQuest" />
                </a>
              </div>
              <h2>
                KineQuest: A VR Proprioception Lab Simulation for the University
                of Ottawa Human Kinetics Students
              </h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="TO BE DECIDED" />
              </div>
              <h2>A WORK IN PROGRESS ...</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
