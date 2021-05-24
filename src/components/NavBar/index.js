import {Link} from 'react-router-dom';

function NavBar() {

    return(
<nav class="w-11/12 h-4 mx-auto">
    <div class="ml-32">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <Link to='/about' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</span></Link>
        <Link to='/projects' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</span></Link>
        <Link to='/writing' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Writing</span></Link>
        <Link to='/more' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">More</span></Link>
        <Link to='/contact' style={{textDecoration: 'none', marginTop: '5px', padding: '0'}}><span class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</span></Link>
    </div>
</nav>
    )

}

export default NavBar;