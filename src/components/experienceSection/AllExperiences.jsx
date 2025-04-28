import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Analyst Infrastructure",
    company: "DXC Technology",
    date: "2021 - Present",
    responsibilities: [
      "Automated device management and compliance operations across 1000+ Windows, Android, and iOS devices using SCCM and Intune, ensuring security and performance standards.",
      " Developed and deployed scalable full-stack web applications, utilizing modern frameworks like React.js, Node.js, and MongoDB to deliver robust digital solutions.",
      "Engineered PowerShell automation scripts and pipelines for software deployment, patch management, and compliance reporting, reducing manual effort by 70%.",
      "Collaborated across IT and development teams to integrate endpoint security, MDM/MAM configurations, and CI/CD principles, aligning enterprise infrastructure with agile software practices",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
