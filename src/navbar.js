import './output.css';

function navbar() {
  return (
    <div className="navbar m-10">
        <ul className='flex text-2xl'>
            <li className="pr-3" >Home</li>
            <li className="pr-3">Projects</li>
            <li className="pr-3">Resume</li>
            <li >Contact</li>
        </ul>

    </div>
  );
}

export default navbar;