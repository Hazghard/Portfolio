import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import { getFiles, getProfile, getProjects, getSkills, getSocials } from "@/utils/sanity-utils";

export default async function Home() {
  const getSocialData = await getSocials();
  const getProfileData = await getProfile();
  const getProfileFiles = await getFiles();
  const getSkillsData = await getSkills();
  const getProjectsData = await getProjects();
  console.log('getSkillsData',getSkillsData)

  return (
    <div className="h-screen w-full overflow-x-hidden bg-[#222831] text-[#EEEEEE]">
      <Navbar getSocialData={getSocialData} getProfileFiles={getProfileFiles} />
      <Header props={getProfileData}/>
      <Divider/>
      <About/>
      <Divider/>
      <Skills props={getSkillsData}/>
      <Divider/>
      <Projects props={getProjectsData}/>
      <Divider/>
      <Contact/>
      <Footer props={getSocialData}/>
    </div>  
  );
}
