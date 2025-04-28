import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        With a strong background in endpoint management and software
        development, I have developed and deployed PowerShell automation
        pipelines for patching, software distribution, and compliance reporting
        across 1000+ enterprise devices spanning Windows, Android, and iOS. My
        experience with SCCM and Microsoft Intune has equipped me to deliver
        scalable MDM/MAM solutions and implement secure, cloud-driven endpoint
        configurations. I have a proven track record of creating intuitive
        dashboards and reporting tools, combining backend logic and data
        presentation—skills that seamlessly translate into full-stack web
        application development. I am well-versed in structured testing
        methodologies like IAT and UAT, following secure deployment practices
        that align closely with CI/CD workflows. Additionally, I have resolved
        production incidents (P2/P3) while maintaining SLA commitments through
        agile frameworks using ServiceNow and Jira, further strengthening my
        ability to troubleshoot and support modern, dynamic environments.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
