import {Link} from 'react-router-dom';

function NavBar() {

    return(
        <div>
            <div class='absolute inline-block top-6 left-28 sm:left-4 sm:top-3'>
                <Link to='/' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:text-blue-400 rounded-md text-sm font-medium sm:px-1 sm:py-1">SR</span></Link>
            </div>
            <div class="absolute inline-block right-24 top-6 sm:left-4 sm:top-10">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to='/about' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:px-1 sm:py-1">About</span></Link>
                <Link to='/experience' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:px-1 sm:py-1">Experience</span></Link>
                <Link to='/projects' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:px-1 sm:py-1">Projects</span></Link>
                <Link to='/writing' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:px-1 sm:py-1">Writing</span></Link>
                <Link to='/more' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-lg hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium sm:px-1 sm:py-1">More</span></Link>
            </div>
        </div>
        
    )

}

export default NavBar;