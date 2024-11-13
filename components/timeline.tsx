"use client";

import * as React from 'react';
import { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import Typography from '@mui/material/Typography';

import ModalIntershipTasks from "./modal-intership-tasks";

export default function CustomizedTimeline() {
  const [isTasksModalOpen, setIsTasksModalOpen] = useState(false);

  const openTasksModal = () => setIsTasksModalOpen(true);
  const closeTasksModal = () => setIsTasksModalOpen(false);

  const CustomWorkIcon = () => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"/>
    </svg>
  );

  const CustomSchoolIcon = () => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"/>
    </svg>
  );

  const TechnologiesList1 = () => (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PHP', 'Laravel', 'Slim Framework', 'Node.js', 'React', 'Next.js', 'Vite', 'Tailwind CSS', 'Webpack', 'Vue', 'Quasar', 'Docker', 'Xampp', 'Wamp', 'Hasura', 'GraphiQL', 'Postman'].map(tech => (
        <li className="mr-1.5 mt-2" key={tech}>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
        </li>
      ))}
    </ul>
  );

  const TechnologiesList2 = () => (
    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
      {['Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD', 'WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'FileZilla'].map(tech => (
        <li className="mr-1.5 mt-2" key={tech}>
          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
        </li>
      ))}
    </ul>
  );

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl" data-aos="fade-up">
              Career Journey: A Timeline of Growth and Development
            </h2>
            <div className="text-lg text-indigo-200/65" data-aos="fade-up">
            I’ve been lucky to see how my education in web technologies and design has shaped my professional experiences. Each step has helped me grow and develop new skills, and I’m excited to keep learning and see where this journey takes me next.
            </div>
          </div>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
                <TimelineDot sx={{ bgcolor: '#6366F1' }}>
                  <CustomWorkIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="fade-up">
                <Typography variant="h6" component="span">Frontend Developer</Typography>
                <Typography color="gray" sx={{ pt: '4px', pb: '16px' }} >Aug 2023 - May 2024, @Astro Baltics OÜ</Typography>
                <div className="text-justify">
                  As a Frontend Developer, I focused on in-house projects, mainly developing back-office solutions.
                  My work included client-side development for notable clients such as Kiviõli, Alexela (web charging), and Netsport (kiosk and booking systems).

                  <div className="flex flex-wrap mt-2" aria-label="Related links">
                    <a href="https://bron.netspordihall.ee/" target="_blank" rel="noreferrer noopener" className="mr-4 mt-2 inline-flex items-center text-xs font-medium text-teal-300 hover:text-teal-500" aria-label="Netsport">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-1">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      Netsport
                    </a>

                    <a href="https://charger.alexela.com/" target="_blank" rel="noreferrer noopener" className="mr-4 mt-2 inline-flex items-center text-xs font-medium text-teal-300 hover:text-teal-500" aria-label="Alexela">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-1">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      Alexela
                    </a>
                  </div>

                  <div className='my-8' aria-label="Technologies & Frameworks">
                    <b>Technologies & Frameworks:</b>
                    <br />
                    <TechnologiesList1 />
                  </div>

                  <b>Tools & Systems:</b><br />
                  Operating System: Windows
                  <br />
                  IDE: PhpStorm / VSCode
                  <br />
                  Project Management: Jira / Gitea / GitLab
                  <br />
                  Version Control: GitLab / Gitea
                </div>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
                <TimelineDot sx={{ bgcolor: '#3A7D44' }}>
                  <CustomSchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="fade-up">
                <Typography variant="h6" component="span">EEK Mainor - Web Technologies</Typography>
                <Typography color="gray" sx={{ pt: '4px', pb: '16px' }}>September 2020 - June 2023, @Tallinn</Typography>
                <div className="text-justify">
                  At EEK Mainor, I expanded my knowledge of web technologies, with a particular focus on how web development intersects with business strategy.
                  This academic experience built on my prior UX/UI expertise and practical work. During this time, I honed my skills in various front-end and back-end technologies
                  and deepened my understanding of responsive web design. My studies included project-based learning, where I explored topics such as website optimization, user experience
                  improvements, and modern web standards. I applied this knowledge to real-world business scenarios, further enhancing my technical and problem-solving abilities.

                  <div className='mt-4'>
                    <a href="https://mari-liis-truija.github.io/eek/" target="_blank" rel="noreferrer noopener" className="mr-4 inline-flex items-center text-xs font-medium text-teal-300 hover:text-teal-500" aria-label="EEK Portfolio">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-1">
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      EEK Portfolio
                    </a>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
                <TimelineDot sx={{ bgcolor: '#6366F1' }}>
                  <CustomWorkIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="fade-up">
                <Typography variant="h6" component="span">Designer / WordPress Developer</Typography>
                <Typography color="gray" sx={{ pt: '4px', pb: '16px' }}>May 2019 - Aug 2023 @ Astro Baltics OÜ</Typography>
                <div className="text-justify">
                  During my tenure at Astro Baltics, I focused extensively on print and graphic design, as well as creating mockups and prototypes. I was responsible for designing front-end elements for both client and in-house websites, updating existing designs, and enhancing functionalities across various projects.
                  <br /> <br />
                  My primary responsibility was the design and development of the company’s website (WordPress). This role not only gave me the opportunity to complete my final thesis for EEK Mainori University, but I also mentored other WordPress developers during this time. My thesis, titled <i>"Creation of an International Product Website for Cloudics,"</i> involved in-depth research and practical application of web development techniques.
                  <br /> <br />
                  <b>Key Responsibilities:</b> Analyzed professional literature related to website development; formulated both functional and non-functional requirements for Cloudics’ new website; collaborated with a mentee to develop the website and design in WordPress; and conducted comprehensive internal testing of the website.
                  <br /> <br />
                  In addition, I completed another 5-month internship during this period.
                </div>

                <button
                  className="mt-4 mr-4 inline-flex items-center text-xs font-medium text-teal-300 hover:text-teal-500"
                  onClick={openTasksModal}
                  aria-label="View Internship Tasks"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 mr-1">
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                  </svg>
                  View Internship Tasks
                </button>

                <ModalIntershipTasks isOpen={isTasksModalOpen} onClose={closeTasksModal} />

                <TechnologiesList2 />
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
                <TimelineDot sx={{ bgcolor: '#6366F1' }}>
                  <CustomWorkIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="fade-up">
                <Typography variant="h6" component="span">Frontend Web Developer (Internship)</Typography>
                <Typography color="gray" sx={{ pt: '4px', pb: '16px' }} >April 2019 - May 2019, @Astro Baltics OÜ</Typography>
                <div className="text-justify">
                  The goal of the familiarization practice was to deepen my understanding of teamwork within the company
                  and to apply the knowledge I gained from school in a practical setting. I focused on using user experience
                  analysis and testing methods, designing the website, and modifying the code. During the internship, I worked on two key projects.
                  <br /><br />
                  The first task was to analyze the Cloudics website. I conducted a thorough user experience analysis to identify bottlenecks and
                  areas for improvement. Once the analysis was complete, I worked on modifying the website’s code using HTML, CSS, and JavaScript.
                  <br /><br />
                  For the second task, I designed coffee cup illustrations using Adobe Illustrator. This involved extensive planning, collaboration
                  with team members, and incorporating their feedback into the final designs.
                  <br /><br />
                  The internship not only allowed me to gain practical experience but also led to further collaboration opportunities.
                </div>
              </TimelineContent>
            </TimelineItem>


            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
                <TimelineDot sx={{ bgcolor: '#3A7D44' }}>
                  <CustomSchoolIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: '#c7d2feA6' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }} data-aos="fade-up">
                <Typography variant="h6" component="span">VOCO - UX and UI Design</Typography>
                <Typography color="gray" sx={{ pt: '4px', pb: '16px' }}>September 2018 - July 2020, @Tartu</Typography>
                <Typography className='text-justify'>
                  During my time at VOCO, I gained hands-on experience in UX and UI design, completing the Codecademy HTML course and mastering essential
                  design tools like Adobe Illustrator and Photoshop. I developed a strong foundation in WordPress, HTML, CSS, PHP, and Bootstrap,
                  learning how to build and design websites from the ground up. This course also included comprehensive user research,
                  where I conducted surveys, user interviews, and usability testing. I created detailed mockups and interactive prototypes,
                  focusing on intuitive design and user-centric approaches, which laid the groundwork for my future web development projects.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  );
}
