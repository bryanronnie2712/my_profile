import * as React from "react";
import styled from "styled-components";

// Timeline Data

type TimelineProps = {
  title: string;
  role: string;
  date: string;
  description: string[];
  skills?: string;
  icon: string;
  iconstyle: React.CSSProperties;
};

const timelineData: TimelineProps[] = [
  {
    title: "Verizon Communications Inc.",
    role: "Fullstack Engineer II (Full Time)",
    date: "Dec 2023 - Present",
    description: [
      "Designed and developed data-driven applications for Verizon Business (VBG) and Consumer (VCG) Groups.",
      "Acted as production deployment support to ensure smooth delivery of applications.",
      "Developed applications for Generative AI use cases using Verizon GenAI Services.",
      "Implemented dynamic allocation for Partner Service Optimisation (PSO), saving significant man-hours and reducing errors.",
    ],
    skills:
      "ReactJS, Node.js, Java Spring Boot, Microservices, PostgreSQL, GraphQL",
    icon: "V",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "red",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
  {
    title: "Verizon Communications Inc.",
    role: "Fullstack Engineer I (Full Time)",
    date: "July 2022 - Dec 2023",
    description: [
      "Implemented near-real-time data inputs for retail sales scenarios using GraphQL polling for improved analysis and prediction.",
      "Optimized backend vendor inputs in sales to reusable dynamic code, reducing package size by 30%.",
    ],
    icon: "V",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "red",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
  {
    title: "Verizon Communications Inc.",
    role: "Student Intern (Part Time)",
    date: "Feb 2022 - June 2022",
    description: [
      "Started contributing to the development from week 1 on elementary aspects like the design of the web applications.",
      "Created a charts dashboard using d3.js for postpaid analytics at the end of the internship.",
    ],
    icon: "V",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      background: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "red",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
  {
    title: "Akila Castings Private Ltd.",
    role: "Web Development Intern (Part-Time)",
    date: "May 2021 - July 2021",
    description: [
      "Reclaimed administrator rights to the company's domain and developed the company website.",
      "Developed and deployed the company’s website (www.akilacastings.com)",
    ],
    skills: "Domains, SSL, HTML/CSS/JS",
    icon: "A",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      background: "white",
      border: "1px solid #aaa",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "18%",
      color: "black",
    },
  },
  {
    title: "Siva Subramaniya Nadar College of Engineering",
    role: "Bachelor of Technology - Information Technology",
    date: "Aug 2018 - May 2022",
    description: [
      "Graduated with First Class Distinction (91% GPA in last two years)",
      "Active member of SSN Coding Club and National Service Scheme (NSS) volunteer",
    ],
    icon: "SSN",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      background: "#f6f6f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#025eb5",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "14px",
      border: "1px solid #025eb5",
    },
  },
  {
    title: "Trinity School",
    role: "Higher Secondary(11th, 12th)",
    date: "June 2016 - March 2018",
    description: [
      "Scored 96.7% overall in state board exams, 99% in Mathematics",
      "Electives - Computer Science(96.5%) & French(99%)",
    ],
    icon: "T",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      border: "1px solid #aaa",
      color: "black",
      background: "#f6f6f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
  {
    title: "Sri Jayendra Saraswathy Vidyalaya",
    role: "Secondary School(9th, 10th)",
    date: "June 2014 - April 2016",
    description: [
      "Scored 97.4% overall in state board exams, 100% in Mathematics",
    ],
    icon: "J",
    iconstyle: {
      width: 40,
      height: 40,
      borderRadius: 25,
      border: "1px solid #aaa",
      color: "black",
      background: "#f6f6f6",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "20px",
    },
  },
  // Add more entries as needed
];

//               src={AkilaCastings}

const OutlinedTimeline = () => {
  return (
    <TimelineContainer>
      {timelineData.map((item, index) => (
        <TimelineItem key={index}>
          {/* Timeline Indicator */}
          <IconContainer>
            <Icon style={item.iconstyle}>{item.icon || index + 1}</Icon>
            {index < timelineData.length - 1 && <Connector />}
          </IconContainer>

          {/* Timeline Content */}
          <ContentContainer>
            <Title>{item.title}</Title>
            <Role>{item.role}</Role>
            <Date>{item.date}</Date>
            <DescriptionList>
              {item.description.map((desc, i) => (
                <DescriptionItem key={i}>{desc}</DescriptionItem>
              ))}
            </DescriptionList>
            {item.skills && <Skills>Skills: {item.skills}</Skills>}
          </ContentContainer>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

// Styled Components
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  position: relative;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

const Connector = styled.div`
  width: 2px;
  height: 100%;
  background: gray;
  margin-top: 10px;
  top: 30px;
  position: absolute;
`;

const ContentContainer = styled.div`
  background: #f4f4f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  color: #333;
`;

const Role = styled.h4`
  margin: 5px 0;
  font-weight: 500;
  color: #555;
`;

const Date = styled.h5`
  margin: 5px 0;
  font-style: italic;
  color: #888;
`;

const DescriptionList = styled.ul`
  padding-left: 20px;
  margin: 10px 0;
  color: #333;
`;

const DescriptionItem = styled.li`
  margin-bottom: 5px;
`;

const Skills = styled.p`
  font-style: italic;
  color: #555;
`;

export default OutlinedTimeline;

// export default function OutlinedTimeline() {
//   return (
//     <Timeline position="right">
//       {/* Verizon Communications Inc. - Fullstack Engineer II */}
//       <TimelineItem>
//         <TimelineSeparator>
//           <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               background: "black",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "red",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             V
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h3>Verizon Communications Inc.</h3>
//             <h4>Fullstack Engineer II (Full Time)</h4>
//             <h5>Dec 2023 - Present</h5>
//             <ul>
//               <li>
//                 Designed and developed data-driven applications for Verizon
//                 Business (VBG) and Consumer (VCG) Groups.
//               </li>
//               <li>
//                 Acted as production deployment support to ensure smooth delivery
//                 of applications.
//               </li>
//               <li>
//                 Developed applications for Generative AI use cases using Verizon
//                 GenAI Services.
//               </li>
//               <li>
//                 Implemented dynamic allocation for Partner Service Optimisation
//                 (PSO), saving significant man-hours and reducing errors.
//               </li>
//             </ul>
//             <p>
//               Skills: ReactJS, Node.js, Java Spring Boot, Microservices,
//               PostgreSQL, GraphQL
//             </p>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Verizon Communications Inc. - Fullstack Engineer I */}
//       <TimelineItem>
//         <TimelineSeparator>
//         <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               background: "black",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "red",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             V
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h4>Fullstack Engineer I (Full Time)</h4>
//             <h5>July 2022 - Dec 2023</h5>
//             <ul>
//               <li>
//                 Implemented near-real-time data inputs for retail sales
//                 scenarios using GraphQL polling for improved analysis and
//                 prediction.
//               </li>
//               <li>
//                 Optimized backend vendor inputs in sales to reusable dynamic
//                 code, reducing package size by 30%.
//               </li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Verizon Communications Inc. - Student Intern */}
//       <TimelineItem>
//         <TimelineSeparator>
//         <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               background: "black",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "red",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             V
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h4>Student Intern (Part-Time)</h4>
//             <h5>Feb 2022 - June 2022</h5>
//             <ul>
//               <li>
//                 Contributed to web application design and development from week
//                 1.
//               </li>
//               <li>
//                 Developed a D3.js charts dashboard for postpaid analytics by the
//                 end of the internship.
//               </li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Akila Castings Private Ltd. - Web Development Intern */}
//       <TimelineItem>
//         <TimelineSeparator>
//           <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               background: "white",
//               border: "1px solid #aaa",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               padding: "18%",
//             }}
//           >
//             <Image
//               src={AkilaCastings}
//               alt="Akila Castings Logo"
//               style={{ width: "100%", height: "100%" }}
//             />
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h3>Akila Castings Private Ltd.</h3>
//             <h4>Web Development Intern (Part-Time)</h4>
//             <h5>May 2021 - July 2021</h5>
//             <ul>
//               <li>
//                 Reclaimed administrator rights to the company's domain and
//                 developed the company website.
//               </li>
//               <li>Skills: Domains, SSL, HTML/CSS/JS.</li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Siva Subramaniya Nadar College of Engineering */}
//       <TimelineItem>
//         <TimelineSeparator>
//         <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               background: "#f6f6f6",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "#025eb5",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "14px",
//               border: "1px solid #025eb5"
//             }}
//           >
//             SSN
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h3>Siva Subramaniya Nadar College of Engineering</h3>
//             <h4>Bachelor of Technology - Information Technology</h4>
//             <h5>Aug 2018 - May 2022</h5>
//             <ul>
//               <li>
//                 Graduated with First Class Distinction (91% GPA in last two
//                 years)
//               </li>
//               <li>
//                 Active member of SSN Coding Club and National Service Scheme
//                 (NSS) volunteer
//               </li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Trinity School - Higher Secondary */}
//       <TimelineItem>
//         <TimelineSeparator>
//         <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               border: "1px solid #aaa",
//               color: "black",
//               background: "#f6f6f6",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             T
//           </div>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h3>Trinity School</h3>
//             <h4>Higher Secondary (11th, 12th)</h4>
//             <h5>June 2016 - March 2018</h5>
//             <ul>
//               <li>
//                 Scored 96.7% in state board exams, with 99% in Mathematics
//               </li>
//               <li>Electives: Computer Science (96.5%) & French (99%)</li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>

//       {/* Sri Jayendra Saraswathy Vidyalaya - Secondary School */}
//       <TimelineItem>
//         <TimelineSeparator>
//         <div
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: 25,
//               border: "1px solid #aaa",
//               color: "black",
//               background: "#f6f6f6",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: "20px",
//             }}
//           >
//             J
//           </div>
//         </TimelineSeparator>
//         <TimelineContent>
//           <div>
//             <h3>Sri Jayendra Saraswathy Vidyalaya</h3>
//             <h4>Secondary School (9th, 10th)</h4>
//             <h5>June 2014 - April 2016</h5>
//             <ul>
//               <li>
//                 Scored 97.4% overall in state board exams, with 100% in
//                 Mathematics
//               </li>
//             </ul>
//           </div>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }
