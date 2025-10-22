import Navbar from './navbar';
import './output.css';
import IconCloud from './components/iconcloud';

import carnaamalogo from "./logos/carnaama.jpg"
import hexovisionlogo from "./logos/hexovision_logo.jpg"
import ibmlogo from "./logos/ibm_logo.jpg"
import mindCheck from "./projects/mindcheck.png"

function App() {
  return (
    <div className="App bg-black text-white flex items-center flex-col w-100%">
      <Navbar />

      <div className="intro m-2 mb-10 sm:w-165">
        <h2 className="font-bold text-3xl">Intro</h2>
        <h1 className='dark:text-white/70'>Hi, i'm Ayush </h1>
        <p className='dark:text-white/70'>I am a third year CS student who loves building apps and websites that are useful</p>
        <p className='dark:text-white/70'>I am very active on x/twitter where i share my learning journey and make new friends.</p>
      </div>

      <div className='about m-2 mb-10 sm:w-165'>
        <h2 className="font-bold text-3xl">About</h2>
        <p className='dark:text-white/70'>I have been deeply interested in computers since childhood, spending countless hours exploring and
          experimenting with technology. This passion led me to pursue a Bachelor of Computer Applications
          (BCA), where I honed my technical skills. I specialize in troubleshooting and fixing code and systems,
          and I take pride in solving complex problems. I continuously explore new technologies and
          development stacks, driven by a desire to improve and expand my skillset.</p>
      </div>

      <div className="skills m-2 mb-10 sm:w-165">
        <h2 className="w-full font-bold text-3xl mb-4">Skills</h2>
        <div className='flex flex-col sm:flex-row border-2 border-[#1c1c1e] rounded-lg p-5'>
          <div className="w-half skillBox pr-5">
            <ul className="grid grid-cols-3 gap-4 content-center ">
              <li className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full">React</li>
              <li className="px-4 py-2 bg-gray-800 text-green-400 rounded-full">PostgreSQL</li>
              <li className="px-4 py-2 bg-gray-800 text-green-300 rounded-full">MongoDB</li>
              <li className="px-4 py-2 bg-gray-800 text-yellow-400 rounded-full">JavaScript</li>
              <li className="px-4 py-2 bg-gray-800 text-blue-300 rounded-full">MySQL</li>
              <li className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full">Flask</li>
              <li className="px-4 py-2 bg-gray-800 text-green-400 rounded-full">Python</li>
              <li className="px-4 py-2 bg-gray-800 text-orange-400 rounded-full">Java</li>
              <li className="px-4 py-2 bg-gray-800 text-red-400 rounded-full">C</li>
              <li className="px-4 py-2 bg-gray-800 text-red-500 rounded-full">C++</li>
              <li className="px-4 py-2 bg-gray-800 text-orange-500 rounded-full">Rust</li>
              <li className="px-4 py-2 bg-gray-800 text-green-500 rounded-full">Node.js</li>
              <li className="px-4 py-2 bg-gray-800 text-gray-400 rounded-full">Express.js</li>
              <li className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full">TailwindCSS</li>
              <li className="px-4 py-2 bg-gray-800 text-pink-400 rounded-full">Git</li>
              <li className="px-4 py-2 bg-gray-800 text-purple-400 rounded-full">Solidity</li>
            </ul>
          </div>
          <div className='flex w-half justify-center skillsphere'>
            <IconCloud
              iconSlugs={["react", "postgresql", "mongodb", "javascript", "mysql", "flask", "python", "java", "c", "cplusplus", "nodedotjs", "expressjs", "tailwindcss", "git", "html", "css", "github", "linux", "stackoverflow", "visualstudiocode", "android", "androidstudio", "vercel  ", "vim", "angular", "aws", "docker", "npm",]}
            />

          </div>
        </div>
      </div>


      <div className='work m-2 mb-10 w-105 sm:w-165'>
        <h2 className="font-bold text-3xl mb-4">Work</h2>
        <div className='IBM border-2 border-[#1c1c1e] rounded-lg mb-2 p-4'>
          <img src={ibmlogo} className="w-12"></img>
          <h3>IBM</h3>
          <p className='dark:text-white/70'>Project Lead | Jun2025 - Aug2025 | Remote</p>
        </div>
        <div className='carnaama border-2 border-[#1c1c1e] rounded-lg mb-2 p-4'>
          <img src={carnaamalogo} className="w-12"></img>
          <h3>Carnama</h3>
          <p className='dark:text-white/70'>Frontend Developer | Oct2024 - Jan2025 | Hybrid</p>
        </div>
        <div className='hexovision border-2 border-[#1c1c1e] rounded-lg p-4'>
          <img src={hexovisionlogo} className="w-12"></img>
          <h3>Hexovision</h3>
          <p className='dark:text-white/70'>Web Developer | Aug2024 - Oct2024 | On-site</p>

        </div>

      </div>

      <div className='project m-2 mb-10 sm:w-165'>
        <h2 className="font-bold text-3xl mb-4">Projects</h2>
        <div className="projectList flex">

          <div className="mindCheck border-2 border-[#1c1c1e] rounded-lg m-2">
            <img src={mindCheck} className=""></img>
            <p className='dark:text-white/70'>MindCheck</p>
            <ul className="grid grid-cols-4 gap-1 text-xs ">
              <li className="px-4 py-1 bg-gray-800 rounded-full">React</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">PostgreSQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MongoDB</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">JavaScript</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MySQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Flask</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Python</li>
            </ul>
          </div>

          <div className="mindCheck border-2 border-[#1c1c1e] rounded-lg m-2">
            <img src={mindCheck} className=""></img>
            <p className='dark:text-white/70'>MindCheck</p>
            <ul className="grid grid-cols-4 gap-1 text-xs">
              <li className="px-4 py-1 bg-gray-800 rounded-full">React</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">PostgreSQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MongoDB</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">JavaScript</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MySQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Flask</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Python</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;