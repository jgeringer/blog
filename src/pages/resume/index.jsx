import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHistory, faGlobe, faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons"
import { faCodepen, faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import ContactForm from '../../components/ContactForm'

import * as styles from './style.module.css';

const Resume = () => {
  return (
    <div className="wrapper">
        <div className={styles.profileHeader}>
            <img src='https://avatars.githubusercontent.com/u/1789031' className={styles.profileImage} width='100' height='100' />
            <div>
                <h1>Joe Geringer</h1>
                <p>
                    <strong>Frontend Web Developer</strong><br />
                    Elmwood Park, IL
                </p>
            </div>
        </div>
        <div className={styles.links}>
            <ol className='list-plain list-inline'>
                <li>
                    <a href="https://codepen.io/jgeringer" target="_blank">
                    <FontAwesomeIcon icon={faCodepen} /> Codepen
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jgeringer" target="_blank">
                    <FontAwesomeIcon icon={faGithub} /> Github
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/joe-geringer/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href='/Joe-Geringer-Resume.pdf' download>
                        <FontAwesomeIcon icon={faDownload} /> Download Resume
                    </a>
                </li>
            </ol>
        </div>

        <article>
            
            <section>
                <h2>Experience</h2>
                <div className={styles.company}>
                    <h3 className='spacing-v-b-z'>Nansen</h3>
                    <p className='spacing-v-t-z'>
                        <strong>Senior Frontend Web Developer</strong><br />
                        <FontAwesomeIcon icon={faHistory} /> 2012-Present
                    </p>
                    <ul className='list-circles'>
                        <li>Build accessible, performant and responsive sites using a variety of Frontend frameworks.</li>
                        <li>Develop sites using headless as well as traditional CMS.</li>
                        <li>Collaborate with clients, creative team, developers and managers to help gather requirements and provide estimates.</li>
                        <li>Leverage testing tools to ensure critical parts of the site function sprint after sprint.</li>
                        <li>Help onboard and mentor new hires.</li>
                        <li>Integrate personalization tools to A/B test features.</li>
                        <li>Helped develop internal projects: Worked with a group to create a scaffold CSS framework for use on some of our sites. Helped to standardize internal project documentation.</li>
                        <li>Created various types of animations using both CSS and JS. From small micro-animations to full screen user interactive animations.</li>
                    </ul>
                    <p><FontAwesomeIcon icon={faGlobe} /> Main sites developed</p>
                    <ul className='list-inline list-tag'>
                        <li>
                            <a href="https://www.affirm.com/" target="_blank" referrerpolicy="no-referrer">Affirm</a>
                        </li>
                        <li>
                            <a href="https://www.uspoloassnglobal.com/" target="_blank" referrerpolicy="no-referrer">USPA</a>
                        </li>
                        <li>
                            <a href="https://www.pacificsurfliner.com/" target="_blank" referrerpolicy="no-referrer">Pacific Surfliner</a>
                        </li>
                        <li>
                            <a href="https://www.frigidaire.com/" target="_blank" referrerpolicy="no-referrer">Frigidaire</a>
                        </li>
                    </ul>
                </div>
                
                <div className={styles.company}>
                    <h3 className='spacing-v-b-z'>American Eagle</h3>
                    <p className='spacing-v-t-z'>
                        <strong>Frontend Web Developer</strong><br />
                        <FontAwesomeIcon icon={faHistory} /> 2010-2012
                    </p>
                    <ul className='list-circles'>
                        <li>Built new sites while maintaining existing for 50+ clients.</li>
                        <li>Supported clients by investigating bugs and documenting new feature requests.</li>
                        <li>Collaborated with team members in order to identify and solve clients problems.</li>
                    </ul>
                </div>

                <div className={styles.company}>
                    <h3 className='spacing-v-b-z'>Chicago Public Schools - IT Department</h3>
                    <p className='spacing-v-t-z'>
                        <strong>Web Designer<br />Frontend Web Developer</strong><br />
                        <FontAwesomeIcon icon={faHistory} /> 2003-2010
                    </p>
                    <ul className='list-circles'>
                        <li>Designed interfaces and iconography for internal and public web sites.</li>
                        <li>Integrated designs into static HTML/CSS.</li>
                        <li>Generated wire frames, designing comps and functional mockups.</li>
                        <li>Interface with clients and backend team to determine site requirements and to develop project scope.</li>
                        <li>Gained beginning experience in backend C# .NET programming.</li>
                        <li>Ensured sites met Section 508 accessibility compliance.</li>
                    </ul>
                </div>

                <h2>Education</h2>
                <h3 className={styles.category}>Bachelor of Fine Arts</h3>
                <div>Multimedia and Web Design</div>

                <h3 className={styles.category}>April 2003</h3>
                <div>Illinois Institute of Art, Chicago</div>


                <h2>Accolades</h2>
                <ul className='list-circles'>
                    <li>Accidentally small talked with popular web teacher, <a href="https://wesbos.com/" target="_blank">Wes Bos</a>, and I had no clue it was him until a few hours later when he did a presentation.</li>
                    <li>“King for the day” in kindergarten. Got to bring in my favorite toys and snacks to share with the class for the day.</li>
                </ul>
            </section>

            <aside>
                <div className={styles.contact}>
                    <h2>Question?</h2>
                    <p>Feel free to reach out. If you don't hear back within 30 minutes, your next pizza is free.</p>
                    <ContactForm />
                </div>

                <div className={styles.skills}>
                    <h2>Skills</h2>
                    <h3 className={styles.category}>Language</h3>
                    <ul className='list-category list-plain'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                    <h3 className={styles.category}>Framework</h3>
                    <ul className='list-category list-plain'>
                        <li>Vue</li>
                        <li>React</li>
                        <li>Gatsby</li>
                        <li>Nuxt</li>
                        <li>NextJS</li>
                        <li>jQuery</li>
                    </ul>
                    <h3 className={styles.category}>Style</h3>
                    <ul className='list-category list-plain'>
                        <li>LESS</li>
                        <li>SASS</li>
                    </ul>
                    <h3 className={styles.category}>CMS</h3>
                    <ul className='list-category list-plain'>
                        <li>Contentful</li>
                        <li>Episerver/Optimizely</li>
                        <li>Drupal</li>
                        <li>Shopify</li>
                    </ul>
                    <h3 className={styles.category}>Personalization</h3>
                    <ul className='list-category list-plain'>
                        <li>Optimizely</li>
                        <li>Ninetailed</li>
                    </ul>
                    <h3 className={styles.category}>Analytics</h3>
                    <ul className='list-category list-plain'>
                        <li>Segment</li>
                        <li>Mixpanel</li>
                        <li>Google Analytics</li>
                    </ul>

                    <h3 className={styles.category}>Build</h3>
                    <ul className='list-category list-plain'>
                        <li>Webpack</li>
                        <li>Gulp</li>
                    </ul>

                    <h3 className={styles.category}>IDE</h3>
                    <ul className='list-category list-plain'>
                        <li>Visual Studio</li>
                        <li>VS Code</li>
                    </ul>

                    <h3 className={styles.category}>Accessability</h3>
                    <ul className='list-category list-plain'>
                        <li>WCAG 2.1 AA</li>
                        <li>Section 508</li>
                    </ul>

                    <h3 className={styles.category}>Source</h3>
                    <ul className='list-category list-plain'>
                        <li>Git</li>
                    </ul>

                    <h3 className={styles.category}>Creative</h3>
                    <ul className='list-category list-plain'>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Premier</li>
                        <li>After Effects</li>
                        <li>Sketch</li>
                        <li>Figma</li>
                    </ul>

                    <h3 className={styles.category}>Process</h3>
                    <ul className='list-category list-plain'>
                        <li>JIRA</li>
                        <li>Trello</li>
                    </ul>

                    <h3 className={styles.category}>Topics</h3>
                    <ul className='list-category list-plain'>
                        <li>Responsive Web Design</li>
                    </ul>
                </div>
            </aside>
            
        </article>
    </div>
  );
};

// Resume.propTypes = {
  
// };

// Resume.defaultProps = {
  
// };

// export const ResumeFragment = graphql`
//   fragment Resume on ContentfulResume {
    
//   }
// `;

export default Resume;
