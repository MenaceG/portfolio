import Navbar from '../navbar';
import '../output.css';
import IconCloud from '../components/iconcloud';

function projects() {
    return (
      <div className='project mb-10 min-w-200'>
          <Navbar />
        <h2 className="font-bold text-3xl mb-4">Projects</h2>
        <div className="projectList flex w-200">

          <div className="mindCheck border-2 border-[#1c1c1e] rounded-lg w-100 m-2">
            <img src={mindCheck} className="w-100"></img>
            <p className='dark:text-white/70'>MindCheck</p>
            <ul className="grid grid-cols-4 gap-1 text-xs w-90">
              <li className="px-4 py-1 bg-gray-800 rounded-full">React</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">PostgreSQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MongoDB</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">JavaScript</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">MySQL</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Flask</li>
              <li className="px-4 py-1 bg-gray-800 rounded-full">Python</li>
            </ul>
          </div>

          <div className="mindCheck border-2 border-[#1c1c1e] rounded-lg w-100 m-2">
            <img src={mindCheck} className="w-100"></img>
            <p className='dark:text-white/70'>MindCheck</p>
            <ul className="grid grid-cols-4 gap-1 text-xs w-90">
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

)};

export default projects;