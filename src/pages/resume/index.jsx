import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHistory,
  faGlobe,
  faFilePdf,
  faDownload,
} from '@fortawesome/free-solid-svg-icons'
import {
  faCodepen,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'

import ContactForm from '../../components/ContactForm'

import * as styles from './style.module.css'

const Resume = () => {
  return (
    <div className="wrapper">
      <div className={styles.profileHeader}>
        <img
          src="https://avatars.githubusercontent.com/u/1789031"
          className={styles.profileImage}
          width="100"
          height="100"
        />
        <div>
          <h1>Joe Geringer</h1>
          <p>
            <strong>Frontend Web Developer</strong>
            <br />
            Elmwood Park, IL
          </p>
        </div>
      </div>
      <div className={styles.links}>
        <ol className="list-plain list-inline u-flex list--links">
          <li>
            <a href="https://codepen.io/jgeringer" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />{' '}
              <span className="u-mobile-hide">Codepen</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/jgeringer" target="_blank">
              <FontAwesomeIcon icon={faGithub} />{' '}
              <span className="u-mobile-hide">Github</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/joe-geringer/" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />{' '}
              <span className="u-mobile-hide">LinkedIn</span>
            </a>
          </li>
          <li className="list-item-end">
            <a
              href="https://assets.ctfassets.net/gop6x1ssjaqg/7kfoSy5F8OfdzalHg4vSw2/65a558bbdb9a57c5ecf2f9f89830a471/Joe-Geringer-Resume.pdf"
              download
            >
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </a>
          </li>
        </ol>
      </div>

      <article className={styles.article}>
        <section>
          <h2>Experience</h2>
          <div className={styles.company}>
            <h3 className="spacing-v-b-z">Nansen</h3>
            <p className="spacing-v-t-z">
              <strong>Senior Frontend Web Developer</strong>
              <br />
              <FontAwesomeIcon icon={faHistory} /> 2012-Present
            </p>
            <ul className="list-circles">
              <li>
                Build accessible, performant and responsive sites using a
                variety of Frontend frameworks.
              </li>
              <li>Develop sites using headless as well as traditional CMS.</li>
              <li>
                Collaborate with clients, creative team, developers and managers
                to help gather requirements and provide estimates.
              </li>
              <li>
                Leverage testing tools to ensure critical parts of the site
                function sprint after sprint.
              </li>
              <li>Help onboard and mentor new hires.</li>
              <li>Integrate personalization tools to A/B test features.</li>
              <li>
                Helped develop internal projects: Worked with a group to create
                a scaffold CSS framework for use on some of our sites. Helped to
                standardize internal project documentation.
              </li>
              <li>
                Created various types of animations using both CSS and JS. From
                small micro-animations to full screen user interactive
                animations.
              </li>
            </ul>
            <p>
              <FontAwesomeIcon icon={faGlobe} /> Main sites developed
            </p>
            <ul className="list-inline list-tag">
              <li>
                <a
                  href="https://www.affirm.com/"
                  target="_blank"
                  referrerpolicy="no-referrer"
                >
                  Affirm
                </a>
              </li>
              <li>
                <a
                  href="https://www.uspoloassnglobal.com/"
                  target="_blank"
                  referrerpolicy="no-referrer"
                >
                  USPA
                </a>
              </li>
              <li>
                <a
                  href="https://www.pacificsurfliner.com/"
                  target="_blank"
                  referrerpolicy="no-referrer"
                >
                  Pacific Surfliner
                </a>
              </li>
              <li>
                <a
                  href="https://www.frigidaire.com/"
                  target="_blank"
                  referrerpolicy="no-referrer"
                >
                  Frigidaire
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.company}>
            <h3 className="spacing-v-b-z">American Eagle</h3>
            <p className="spacing-v-t-z">
              <strong>Frontend Web Developer</strong>
              <br />
              <FontAwesomeIcon icon={faHistory} /> 2010-2012
            </p>
            <ul className="list-circles">
              <li>
                Built new sites while maintaining existing for 50+ clients.
              </li>
              <li>
                Supported clients by investigating bugs and documenting new
                feature requests.
              </li>
              <li>
                Collaborated with team members in order to identify and solve
                clients problems.
              </li>
            </ul>
          </div>

          <div className={styles.company}>
            <h3 className="spacing-v-b-z">
              Chicago Public Schools - IT Department
            </h3>
            <p className="spacing-v-t-z">
              <strong>
                Web Designer
                <br />
                Frontend Web Developer
              </strong>
              <br />
              <FontAwesomeIcon icon={faHistory} /> 2003-2010
            </p>
            <ul className="list-circles">
              <li>
                Designed interfaces and iconography for internal and public web
                sites.
              </li>
              <li>Integrated designs into static HTML/CSS.</li>
              <li>
                Generated wire frames, designing comps and functional mockups.
              </li>
              <li>
                Interface with clients and backend team to determine site
                requirements and to develop project scope.
              </li>
              <li>
                Gained beginning experience in backend C# .NET programming.
              </li>
              <li>Ensured sites met Section 508 accessibility compliance.</li>
            </ul>
          </div>

          <h2>Certification</h2>
          <ul class="list-plain">
            <li className="spacing-v-b-lg">
              <svg
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 165.06"
              >
                <path
                  d="M49.22 115.5A45.64 45.64 0 0 1 36 83.11a45.16 45.16 0 0 1 13.45-32.27 18 18 0 1 0-25.36-25.47 81.67 81.67 0 0 0-.35 115.49 18 18 0 1 0 25.48-25.36Z"
                  style={{ fill: '#ffda00' }}
                ></path>
                <path
                  d="M49.45 50.84a45.79 45.79 0 0 1 64.66.23 18 18 0 1 0 25.47-25.35 81.39 81.39 0 0 0-115.37-.47 18 18 0 1 0 25.24 25.59Z"
                  style={{ fill: '#67b3ff' }}
                ></path>
                <path
                  d="M114 115.73A45.68 45.68 0 0 1 81.6 129a45.16 45.16 0 0 1-32.27-13.5 18 18 0 1 0-25.47 25.36 81.54 81.54 0 0 0 115.49.46A18 18 0 0 0 114 115.73Z"
                  style={{ fill: '#eb5a68' }}
                ></path>
                <path
                  d="M49.45 50.84a18 18 0 1 1 .11-25.36 18 18 0 0 1-.11 25.36Z"
                  style={{ fill: '#47a1ff' }}
                ></path>
                <path
                  d="M49.1 140.86a18 18 0 1 1 .12-25.36 18 18 0 0 1-.12 25.36Z"
                  style={{ fill: '#d5465f' }}
                ></path>
                <path
                  d="M219.68 100.75c5.19-3.92 5.88-1.73 10.26 2.65 2.19 2.19 8.18 6 4.26 9.22-8.18 6.68-15.56 9.68-26 9.68-23.63-.11-40.34-17.75-39-41.15.57-10.48 4.72-20.4 12.91-27.2 7.49-6.34 16.82-9.1 26.62-8.87a36.34 36.34 0 0 1 14 2.76 33.05 33.05 0 0 1 8.41 4.5c5.19 4 2.77 6.34-1.27 10.37-.92.92-1.84 1.85-2.65 2.77-2.07 2.07-3.46 3.57-6.22 1.61-5.3-3.69-12-5.65-18.33-4-20.4 5.18-19.48 41.49 5.54 41.61a19.37 19.37 0 0 0 11.47-3.95Zm567.07 22a6.2 6.2 0 0 1-6.23-6.22l.35-80.45a6.2 6.2 0 0 1 6.22-6.23h6.69a6.2 6.2 0 0 1 6.22 6.24l-.35 80.45a6.19 6.19 0 0 1-6.22 6.22Zm-35-9.33c-7.26 6.8-14.18 10.37-24.44 10.37-20.74-.12-30.66-17.29-30.66-36.54l.12-32.73a6.19 6.19 0 0 1 6.23-6.21h6.69a6.19 6.19 0 0 1 6.22 6.22l-.11 32.73c0 10.72 5.76 19.13 17.06 19.13s18.21-9.45 18.32-20V74.7a5.85 5.85 0 0 1-.11-1.38l.11-18.56a6.19 6.19 0 0 1 6.22-6.22h6.6a6.19 6.19 0 0 1 6.22 6.22l-.22 61.78a6.17 6.17 0 0 1-6.22 6.11h-5.65a6.31 6.31 0 0 1-6.11-6.11Zm-79.57-64.88h12.91a6.2 6.2 0 0 1 6.11 6.34v4.26a6.27 6.27 0 0 1-6.2 6.22h-12.94l-.23 50.83a6.2 6.2 0 0 1-6.22 6.23h-6.68a6.21 6.21 0 0 1-6.23-6.23l.23-70.3c0-15.33 8.76-27.44 24.44-28.82.46 0 .8-.11 1.26-.11a21.34 21.34 0 0 1 2.77 0h6a6.2 6.2 0 0 1 6.11 6.33v3.92a6.27 6.27 0 0 1-6.22 6.23h-4.84c-7.38 0-10.49 5.64-10.61 12.56Zm-46.33-.23H640a6.17 6.17 0 0 1 6.11 6.22v4.26a6.17 6.17 0 0 1-6.22 6.11h-14.16l-.11 31.1c0 6 2.88 9.45 8.87 9.45h2.88a6.18 6.18 0 0 1 6.11 6.23V116a6.18 6.18 0 0 1-6.22 6.11h-5.42a25.08 25.08 0 0 1-3-.12c-15.33-1-22.13-10.94-22.13-25.93.12-20.17.12-40.22.23-60.39a6.17 6.17 0 0 1 6.23-6.11h6.57a6.17 6.17 0 0 1 6.11 6.22Zm-205-.81H435a6.17 6.17 0 0 1 6.11 6.22V58a6.18 6.18 0 0 1-6.22 6.11h-14.2v31.11c0 6 2.88 9.45 8.87 9.45h2.89a6.16 6.16 0 0 1 6.1 6.22v4.26a6.17 6.17 0 0 1-6.22 6.11h-4.26c-16.72-.11-26.4-7.26-26.4-26 .12-20.17.12-40.23.23-60.4a6.18 6.18 0 0 1 6.23-6.11h6.57a6.17 6.17 0 0 1 6.1 6.23Zm-83.21 8.76c6.8-6.34 14.18-10.37 23.74-10.37 20.75.11 31.47 17 31.35 36.53l-.11 32.73a6.21 6.21 0 0 1-6.23 6.23h-6.68a6.21 6.21 0 0 1-6.23-6.23l.12-32.5c0-10.72-5.76-19.13-17.06-19.13s-18.21 9.34-18.32 19.94l-.12 31.69a6.17 6.17 0 0 1-6.22 6.11h-6.57a6.17 6.17 0 0 1-6.11-6.22c.11-19.71.11-39.53.23-59.24v-2.65A6.17 6.17 0 0 1 325.6 47h5.65a6.3 6.3 0 0 1 6.11 6.11Zm205.39.8c6.8-6.33 14.17-10.37 23.74-10.37 20.75.12 31.46 17.06 31.35 36.54L598 116a6.2 6.2 0 0 1-6.22 6.23h-6.68a6.21 6.21 0 0 1-6.23-6.23l.12-32.5c0-10.72-5.77-19.13-17.06-19.13s-18.21 9.33-18.33 19.94l-.16 31.69a6.18 6.18 0 0 1-6.23 6.11h-6.57a6.17 6.17 0 0 1-6.1-6.22l.23-61.9a6.17 6.17 0 0 1 6.23-6.15h5.65a6.31 6.31 0 0 1 6.1 6.16ZM274.89 45.31c-22.48-.12-38.38 16.13-38.5 38.49-.11 22.59 15.56 38.62 38.27 38.73s38.61-15.79 38.72-38.53c.12-22.21-16.13-38.58-38.49-38.69Zm186.6 46.22c1.61 10.37 11.53 14.63 21.21 14.75a34.71 34.71 0 0 0 14.06-3.11 18.21 18.21 0 0 0 2.07-1c2.31-1.27 4.38-2.07 6.46 0 1.15 1.15 2.19 2.31 3.34 3.34a28.67 28.67 0 0 1 3 3.35c3.11 3.91.92 4.84-2.65 7.26-7.61 5.07-17.52 7.6-26.63 7.6-24.43-.11-40.57-15-40.57-39.64.12-23.29 16.25-38.73 39.53-38.62 23.75.12 37.23 14.07 37.58 37.81.11 6.45.34 8.53-6.34 8.53Zm-186.6-28.82c11.64 0 19.36 10.15 19.36 21.33 0 11.64-7.26 21-19.48 21s-19.36-9.45-19.36-21.09 7.38-21.24 19.48-21.24ZM462 75.51l38.27.11c-1.39-9.57-9.34-13.37-18.44-13.37s-17 4.27-19.83 13.26Z"
                  style={{ fill: '#fff', fillRule: 'evenodd' }}
                ></path>
              </svg>
              <div>
                <a
                  href="https://assets.ctfassets.net/hainwyaguyin/6udtcMblZ7dWVdaSZffu4B/c68e55f80954c68790dcb5e1794809bb/geringer-contentful-certificate.pdf"
                  target="_blank"
                >
                  Contentful Certified Professional
                </a>
                <em>- Expires 04/26/25</em>
              </div>
            </li>
            <li className="spacing-v-b-lg">
              <svg
                className={styles.logo}
                fill="none"
                height="38"
                viewBox="0 0 162 38"
                width="150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Optimizely Logo</title>
                <path
                  d="m12.8359 20.4556v4.485c3.4221-.004 6.7029-1.3235 9.1227-3.6691s3.781-5.5257 3.7852-8.8428h-4.627c-.0027 2.128-.8761 4.1682-2.4284 5.6729-1.5524 1.5048-3.6571 2.3513-5.8525 2.354z"
                  fill="#3be081"
                ></path>
                <path
                  d="m12.8346 32.8099c-2.1796 0-4.26989-.8393-5.81108-2.3332-1.5412-1.4939-2.40703-3.5201-2.40703-5.6328 0-2.1128.86583-4.1389 2.40703-5.6329 1.54119-1.4939 3.63148-2.3332 5.81108-2.3332v-4.452c-1.6831-.0023-3.35011.3167-4.90597.9389-1.55586.6221-2.97007 1.5353-4.16187 2.6872s-2.13786 2.5202-2.784159 4.0265c-.6463 1.5064-.98018355 3.1214-.98258792 4.7528s.32671792 3.2473.96857492 4.7555c.641862 1.5081 1.583882 2.8789 2.772282 4.0342 1.1884 1.1552 2.59991 2.0723 4.15393 2.6987 1.55402.6265 3.2201.9502 4.9032.9525h.0366z"
                  fill="#0037ff"
                ></path>
                <path
                  d="m12.8359 32.81v4.452c3.3991 0 6.659-1.3088 9.0625-3.6386s3.7538-5.4897 3.7538-8.7845h-4.5981c-.0014 2.1127-.8675 4.1387-2.4083 5.6331-1.5407 1.4944-3.6302 2.3353-5.8099 2.338z"
                  fill="#0cf"
                ></path>
                <path
                  d="m12.8359 7.9711v4.452c3.3991 0 6.659-1.3088 9.0625-3.63861 2.4035-2.32979 3.7538-5.48967 3.7538-8.78449h-4.5981c-.0014 2.11278-.8675 4.13871-2.4083 5.63314-1.5407 1.49444-3.6302 2.33527-5.8099 2.33796z"
                  fill="#861dff"
                ></path>
                <path
                  d="m25.7266 7.9711v4.452c3.3991 0 6.6589-1.3088 9.0624-3.63861 2.4036-2.32979 3.7538-5.48967 3.7538-8.78449h-4.5955c-.0014 2.11321-.8679 4.13953-2.4092 5.63404-1.5413 1.4945-3.6314 2.33504-5.8115 2.33706z"
                  fill="#ff8110"
                ></path>
                <g fill="#fff">
                  <path d="m59.9453 18.6016h2.3671l.5571 1.2119c.2958-.2624.6234-.4888.9756-.6744.367-.1821.7483-.3355 1.1404-.4589.4864-.1487.994-.2215 1.504-.2155.7879-.0044 1.5675.1556 2.286.469.7207.3117 1.3692.7609 1.9067 1.3209.5589.5872 1.0021 1.2686 1.3078 2.0106.6472 1.632.6472 3.4386 0 5.0706-.305.7423-.7483 1.4238-1.3078 2.0106-.5376.5605-1.1861 1.0106-1.9067 1.3234-.7179.3127-1.4964.4735-2.2834.4716-.4763.0087-.951-.0546-1.4072-.1876-.3583-.1107-.708-.2463-1.0462-.4057-.3215-.1723-.6209-.3808-.8919-.6211v5.3977h-3.2015zm6.1257 9.581c.4255.0097.8485-.0669 1.2417-.225.3932-.158.748-.394 1.0417-.6928.6155-.6118.9224-1.4307.9206-2.4567.0222-.4482-.0477-.8962-.2058-1.318-.158-.4218-.401-.8088-.7148-1.1387-.2995-.2904-.6551-.5208-1.0464-.6779-.3914-.1572-.8108-.2381-1.2344-.2381s-.8431.0809-1.2344.2381c-.3913.1571-.7469.3875-1.0464.6779-.612.6135-.9181 1.4324-.9181 2.4567s.3061 1.8432.9181 2.4567c.2936.2988.6485.5348 1.0417.6928.3932.1581.8161.2347 1.2417.225z"></path>
                  <path d="m80.1341 31.1524c-.5958.0069-1.1874-.0981-1.742-.3093-.5182-.2008-.9843-.5099-1.3653-.9051-.3877-.4079-.6897-.8849-.8893-1.4046-.2229-.5875-.332-1.2098-.3217-1.8356v-5.2634h-1.9486v-2.5632h.8344c1.0218 0 1.5327-.4952 1.5327-1.4857v-1.7468h2.7856v2.9714h2.7829v2.832h-2.7829v5.1289c-.0176.2134.0084.4281.0765.6318s.1769.3924.3202.5553.3183.2969.515.3942c.1967.0974.4113.1562.6314.1732.0871.0073.1746.0073.2616 0 .1202.006.2407.006.361 0 .0881-.0068.1756-.0204.2615-.0406.0768-.0194.1513-.0466.2223-.0811v2.7001c-.1434.0585-.2923.1035-.4446.1344-.3562.0876-.7234.1261-1.0907.1141z"></path>
                  <path d="m86.12 17.116c-.4308.0106-.852-.1247-1.1911-.3824-.3391-.2578-.575-.622-.6672-1.0301-.0922-.408-.0349-.8345.1621-1.206.1969-.3716.5212-.665.9172-.83.3959-.1649.8388-.191 1.2524-.0738.4137.1172.7723.3703 1.0143.716s.3522.7622.3117 1.1781c-.0404.4159-.2291.8052-.5335 1.1009-.1626.1671-.3588.3001-.5766.3908-.2177.0907-.4523.1371-.6893.1365zm-1.6713 1.4857h3.2014v12.4232h-3.2014z"></path>
                  <path d="m90.7109 18.6018h2.3671l.5571 1.2119c.2625-.2537.5518-.4797.8632-.6745.3022-.1808.6209-.3344.952-.4588.4-.1477.825-.2208 1.2529-.2155.5683-.014 1.1346.0719 1.6713.2535.4011.1415.7839.3278 1.1404.5552.3195.2179.5941.4923.8081.8088.306-.3118.652-.5837 1.031-.8088.381-.22.782-.4058 1.198-.5552.49-.1737 1.008-.2597 1.53-.2535 1.394 0 2.505.4335 3.342 1.2955s1.253 2.1424 1.253 3.8334v7.4235h-3.206v-7.1522c.035-.6479-.19-1.2839-.628-1.7747-.166-.1864-.368-.3392-.595-.4497-.226-.1106-.473-.1767-.727-.1946-.253-.0179-.507.0128-.748.0903s-.464.2002-.656.3613c-.07.0604-.136.1247-.198.1927-.438.4905-.663 1.1269-.625 1.7747v7.1522h-3.2045v-7.1522c.0371-.6478-.1871-1.2842-.6252-1.7747-.1659-.1864-.3682-.3393-.5952-.4499s-.4742-.1767-.7276-.1946c-.2533-.0179-.5079.0128-.749.0903s-.4641.2004-.6562.3615c-.0699.0597-.1355.1241-.1962.1927-.4378.4908-.6627 1.1268-.6277 1.7747v7.1522h-3.2015z"></path>
                  <path d="m113.268 17.1154c-.432.011-.855-.1242-1.195-.3826-.341-.2583-.578-.6235-.67-1.0329-.093-.4093-.036-.8371.162-1.21.197-.3728.523-.6672.92-.8327s.841-.1916 1.256-.0739.775.3718 1.017.7187c.243.3469.353.7649.312 1.1821s-.23.8076-.536 1.1039c-.163.1671-.359.3001-.577.3908-.217.0907-.452.1372-.689.1366zm-1.671 1.4857h3.209v12.4231h-3.209z"></path>
                  <path d="m117.16 28.4513 5.569-6.8809h-5.569v-2.9688h9.607v2.5632l-5.563 6.8961h5.846v2.9689h-9.89z"></path>
                  <path d="m135.131 31.1517c-.849.0031-1.689-.1698-2.464-.507-.761-.3248-1.451-.7878-2.032-1.3641-.589-.5809-1.062-1.2626-1.394-2.0105-.34-.7817-.514-1.6213-.514-2.4694s.174-1.6877.514-2.4694c.332-.7479.805-1.4296 1.394-2.0105.582-.5755 1.271-1.0384 2.032-1.364.761-.322 1.581-.4916 2.411-.4986.83-.0069 1.653.1488 2.42.458.732.3014 1.395.7419 1.948 1.2956.572.5808 1.021 1.2636 1.324 2.0105.332.8211.497 1.6966.486 2.5784.001.1399-.008.2796-.026.4183-.021.1344-.039.2663-.057.393-.019.1268-.037.2789-.055.4031h-8.911c.138.5976.47 1.1366.946 1.539.557.4387 1.262.6602 1.978.6211.362.0074.724-.0379 1.072-.1343.259-.0784.507-.1874.738-.3246.21-.1339.398-.2981.557-.4867h3.343c-.186.5008-.444.9737-.767 1.4045-.35.4804-.773.9076-1.253 1.2677-.509.3775-1.072.6823-1.671.9051-.645.2344-1.33.3513-2.019.3448zm3.063-7.2865c-.133-.6934-.512-1.3199-1.072-1.7708-.559-.4509-1.264-.6978-1.991-.6978-.728 0-1.432.2469-1.992.6978-.559.4509-.938 1.0774-1.071 1.7708z"></path>
                  <path d="m143.621 14.0122h3.202v17.0045h-3.202z"></path>
                  <path d="m151.686 35.4717c-.147 0-.291-.0051-.432-.0152-.117-.006-.233-.0196-.348-.0406-.113-.0132-.225-.0405-.332-.0811v-2.5632c.581.0371 1.157-.1254 1.627-.4589.387-.3115.688-.7103.879-1.1612l.277-.6744-4.873-11.8755h3.343l3.202 8.0953 2.934-8.0953h3.343c-.91 2.2666-1.737 4.3176-2.48 6.1532-.316.791-.627 1.5669-.933 2.3199-.306.7529-.578 1.4451-.822 2.0663-.243.6211-.444 1.1383-.612 1.5516-.167.4132-.261.6566-.306.7302-.269.6435-.58 1.2694-.934 1.8736-.264.4627-.597.8855-.988 1.255-.326.3084-.714.5476-1.141.7022-.451.1521-.926.2259-1.404.2181z"></path>
                  <path d="m48.0864 12.4258c-1.9099 0-3.777.549-5.365 1.5775s-2.8257 2.4904-3.5566 4.2008-.9222 3.5925-.5496 5.4083c.3726 1.8157 1.2924 3.4836 2.6429 4.7927s3.0711 2.2006 4.9443 2.5617c1.8733.3612 3.8149.1759 5.5794-.5326s3.2727-1.9082 4.3338-3.4476c1.0611-1.5393 1.6274-3.349 1.6274-5.2004.0004-1.2293-.2492-2.4466-.7343-3.5824-.4852-1.1359-1.1965-2.1679-2.0933-3.0371-.8967-.8693-1.9614-1.5588-3.1332-2.0291-1.1717-.4703-2.4276-.7122-3.6958-.7118zm0 15.4655c-1.2486.0145-2.4734-.3304-3.5196-.9911-1.0461-.6607-1.8665-1.6075-2.3572-2.7204-.4907-1.113-.6297-2.342-.3993-3.5315.2304-1.1896.8197-2.2861 1.6934-3.1508.8737-.8646 1.9925-1.4585 3.2146-1.7065 1.2221-.2479 2.4927-.1388 3.6508.3136 1.1581.4525 2.1516 1.2278 2.8548 2.228.7032 1.0001 1.0844 2.18 1.0954 3.3903v.0709c.0055 1.6099-.6473 3.1563-1.8155 4.3006s-2.7567 1.7931-4.4174 1.8045z"></path>
                </g>
              </svg>
              <div>
                <a
                  href="https://assets.ctfassets.net/hainwyaguyin/3u2lMIoeJKlrkbXAXbK4uY/47d403c328c6b7e27d60a240b04a880f/geringer-optimizely-web-developer.pdf"
                  target="_blank"
                >
                  Optimizely Web Developer Experimentaion
                </a>
                <em>- Expires 11/23/26</em>
              </div>
            </li>
            <li className="spacing-v-b-lg">
              <svg
                className={styles.logo}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="72 72 337 74"
                preserveAspectRatio="xMidYMin slice"
              >
                <g data-name="MS-symbol">
                  <clipPath>
                    <path
                      transform="matrix(1 0 0 -1 0 216)"
                      d="M0 216h482V0H0z"
                    ></path>
                  </clipPath>
                  <g clip-path="url(#a)">
                    <path
                      d="M394.942 104.59h-10.858v25.003h-7.38V104.59h-5.182v-5.965h5.182v-4.308c0-3.254 1.06-5.92 3.178-7.998 2.12-2.079 4.835-3.118 8.15-3.118.882 0 1.666.045 2.35.135a9.37 9.37 0 011.806.407v6.296c-.24-.14-.663-.31-1.265-.512-.603-.2-1.296-.3-2.078-.3-1.528 0-2.702.476-3.526 1.43-.824.954-1.235 2.365-1.235 4.232v3.736h10.858v-6.959l7.321-2.229v9.188h7.381v5.965h-7.38v14.49c0 1.91.345 3.254 1.038 4.037.693.783 1.782 1.175 3.27 1.175.42 0 .927-.1 1.52-.3a7.178 7.178 0 001.552-.724v6.025c-.463.261-1.23.502-2.305.723a15.742 15.742 0 01-3.178.331c-3.073 0-5.378-.817-6.914-2.455-1.537-1.637-2.305-4.102-2.305-7.396zm-48.407 9.73c0 3.233.733 5.703 2.2 7.411 1.465 1.707 3.564 2.56 6.295 2.56 2.652 0 4.67-.853 6.055-2.56 1.386-1.708 2.08-4.238 2.08-7.592 0-3.334-.719-5.849-2.155-7.547-1.436-1.697-3.45-2.545-6.04-2.545-2.67 0-4.745.888-6.22 2.666-1.477 1.777-2.215 4.313-2.215 7.607m-7.592.24c0-5.12 1.446-9.177 4.338-12.17 2.892-2.993 6.91-4.489 12.05-4.489 4.841 0 8.621 1.441 11.343 4.323 2.721 2.883 4.082 6.774 4.082 11.674 0 5.021-1.447 9.018-4.338 11.99-2.892 2.973-6.829 4.458-11.81 4.458-4.8 0-8.61-1.41-11.432-4.232-2.822-2.82-4.233-6.673-4.233-11.554m-16.417-7.802c0 1.045.331 1.863.994 2.456.662.592 2.128 1.34 4.398 2.243 2.912 1.166 4.956 2.476 6.131 3.932 1.175 1.456 1.762 3.22 1.762 5.287 0 2.912-1.12 5.252-3.359 7.02-2.24 1.767-5.267 2.65-9.083 2.65-1.285 0-2.706-.155-4.263-.467-1.556-.31-2.877-.707-3.96-1.19v-7.169a17.945 17.945 0 004.277 2.198c1.526.543 2.911.814 4.157.814 1.647 0 2.862-.23 3.645-.693.784-.46 1.175-1.235 1.175-2.319 0-1.005-.406-1.853-1.22-2.546-.813-.693-2.355-1.492-4.624-2.395-2.69-1.125-4.599-2.39-5.724-3.796-1.125-1.406-1.687-3.193-1.687-5.362 0-2.792 1.11-5.086 3.33-6.884 2.217-1.797 5.095-2.696 8.63-2.696 1.084 0 2.3.12 3.645.361 1.346.242 2.47.553 3.374.934v6.93c-.964-.644-2.089-1.195-3.374-1.658-1.286-.462-2.56-.693-3.826-.693-1.386 0-2.465.271-3.238.813-.774.543-1.16 1.286-1.16 2.23m-35.066 7.562c0 3.233.733 5.703 2.2 7.411 1.465 1.707 3.564 2.56 6.295 2.56 2.652 0 4.67-.853 6.055-2.56 1.386-1.708 2.08-4.238 2.08-7.592 0-3.334-.719-5.849-2.155-7.547-1.436-1.697-3.449-2.545-6.039-2.545-2.672 0-4.745.888-6.222 2.666-1.476 1.777-2.214 4.313-2.214 7.607m-7.592.24c0-5.12 1.446-9.177 4.338-12.17 2.893-2.993 6.91-4.489 12.051-4.489 4.84 0 8.621 1.441 11.342 4.323 2.721 2.883 4.082 6.774 4.082 11.674 0 5.021-1.446 9.018-4.338 11.99-2.892 2.973-6.828 4.458-11.809 4.458-4.8 0-8.61-1.41-11.433-4.232-2.822-2.82-4.233-6.673-4.233-11.554m-3.136-16.448c.582 0 1.105.041 1.567.121.462.08.853.18 1.175.301v7.38c-.382-.28-.939-.546-1.672-.798-.733-.25-1.622-.376-2.666-.376-1.788 0-3.299.753-4.534 2.26-1.235 1.505-1.853 3.825-1.853 6.958v15.635h-7.29V98.624h7.29v4.88h.12c.663-1.687 1.667-3.007 3.013-3.96 1.346-.954 2.962-1.432 4.85-1.432m-27.956 26.18c1.084 0 2.28-.25 3.585-.754a15.06 15.06 0 003.615-1.988v6.778c-1.165.663-2.485 1.165-3.962 1.506-1.475.342-3.098.512-4.865.512-4.559 0-8.265-1.44-11.116-4.323-2.852-2.88-4.278-6.562-4.278-11.04 0-4.98 1.456-9.083 4.37-12.307 2.91-3.224 7.037-4.835 12.38-4.835 1.366 0 2.746.176 4.143.527 1.395.352 2.504.758 3.328 1.22v6.99c-1.125-.824-2.274-1.462-3.45-1.914a9.966 9.966 0 00-3.599-.678c-2.872 0-5.192.934-6.959 2.802-1.768 1.868-2.652 4.388-2.652 7.562 0 3.132.85 5.573 2.546 7.32 1.697 1.748 4.002 2.621 6.914 2.621m-22.112 5.302h-7.29V98.624h7.29zm-8.044-39.916c0-1.205.437-2.214 1.311-3.028.874-.813 1.913-1.22 3.118-1.22 1.285 0 2.35.417 3.193 1.25.844.834 1.266 1.833 1.266 2.998 0 1.185-.432 2.18-1.296 2.982-.864.804-1.918 1.205-3.163 1.205-1.246 0-2.295-.406-3.148-1.219-.854-.815-1.28-1.803-1.28-2.968m-6.274-3.284v43.2h-7.5v-33.86h-.12l-13.408 33.86h-4.97l-13.738-33.86h-.09v33.86h-6.929v-43.2h10.755l12.412 32.024h.18l13.105-32.024z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M106.214 106.214H71.996V71.996h34.218z"
                      fill="#f25022"
                    ></path>
                    <path
                      d="M143.993 106.214h-34.218V71.996h34.218z"
                      fill="#7fba00"
                    ></path>
                    <path
                      d="M106.214 143.993H71.996v-34.218h34.218z"
                      fill="#00a4ef"
                    ></path>
                    <path
                      d="M143.993 143.993h-34.218v-34.218h34.218z"
                      fill="#ffb900"
                    ></path>
                  </g>
                </g>
              </svg>
              <div>
                <a
                  href="https://learn.microsoft.com/th-th/certifications/exams/70-480"
                  target="_blank"
                >
                  Programming in HTML5 with JavaScript and CSS3
                </a>
              </div>
            </li>
          </ul>

          <h2>Education</h2>
          <h3 className={styles.category}>Bachelor of Fine Arts</h3>
          <div>Multimedia and Web Design</div>

          <h3 className={styles.category}>April 2003</h3>
          <div>Illinois Institute of Art, Chicago</div>

          <h2>Accolades</h2>
          <ul className="list-circles">
            <li>
              Accidentally small talked with popular web teacher,{' '}
              <a href="https://wesbos.com/" target="_blank">
                Wes Bos
              </a>
              , and I had no clue it was him until a few hours later when he did
              a presentation.
            </li>
            <li>
              "King for the day" in kindergarten. Got to bring in my favorite
              toys and snacks to share with the class for the day.
            </li>
          </ul>
        </section>

        <aside>
          <div className={styles.contact}>
            <h2>Question?</h2>
            <p>
              Feel free to reach out. If you don't hear back within 30 minutes,
              your next pizza is free.
            </p>
            <ContactForm />
          </div>

          <div className={styles.skills}>
            <h2>Skills</h2>
            <h3 className={styles.category}>Language</h3>
            <ul className="list-category list-plain">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
            <h3 className={styles.category}>Framework</h3>
            <ul className="list-category list-plain">
              <li>Vue</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>Nuxt</li>
              <li>NextJS</li>
              <li>jQuery</li>
              <li>.NET</li>
              <li>.NET Core</li>
            </ul>
            <h3 className={styles.category}>CSS Preprocessors</h3>
            <ul className="list-category list-plain">
              <li>LESS</li>
              <li>SASS</li>
              <li>SCSS</li>
            </ul>
            <h3 className={styles.category}>CMS</h3>
            <ul className="list-category list-plain">
              <li>Contentful</li>
              <li>Episerver/Optimizely</li>
              <li>Drupal</li>
              <li>Shopify</li>
            </ul>
            <h3 className={styles.category}>Personalization</h3>
            <ul className="list-category list-plain">
              <li>Optimizely</li>
              <li>Ninetailed</li>
            </ul>
            <h3 className={styles.category}>Analytics</h3>
            <ul className="list-category list-plain">
              <li>Segment</li>
              <li>Mixpanel</li>
              <li>Google Analytics</li>
            </ul>

            <h3 className={styles.category}>Build</h3>
            <ul className="list-category list-plain">
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Grunt</li>
            </ul>

            <h3 className={styles.category}>IDE</h3>
            <ul className="list-category list-plain">
              <li>Visual Studio</li>
              <li>VS Code</li>
            </ul>

            <h3 className={styles.category}>Accessability</h3>
            <ul className="list-category list-plain">
              <li>WCAG 2.1 AA</li>
              <li>Section 508</li>
            </ul>

            <h3 className={styles.category}>Source</h3>
            <ul className="list-category list-plain">
              <li>Git</li>
              <li>TFS</li>
            </ul>

            <h3 className={styles.category}>Creative</h3>
            <ul className="list-category list-plain">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Premier</li>
              <li>After Effects</li>
              <li>Sketch</li>
              <li>Figma</li>
            </ul>

            <h3 className={styles.category}>Testing</h3>
            <ul className="list-category list-plain">
              <li>Cypress</li>
              <li>Jest</li>
              <li>Selenium</li>
            </ul>

            <h3 className={styles.category}>Process</h3>
            <ul className="list-category list-plain">
              <li>JIRA</li>
              <li>Confluence</li>
              <li>Asana</li>
              <li>Trello</li>
            </ul>

            <h3 className={styles.category}>Topics</h3>
            <ul className="list-category list-plain">
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </aside>
      </article>
    </div>
  )
}

// Resume.propTypes = {

// };

// Resume.defaultProps = {

// };

// export const ResumeFragment = graphql`
//   fragment Resume on ContentfulResume {

//   }
// `;

export default Resume
