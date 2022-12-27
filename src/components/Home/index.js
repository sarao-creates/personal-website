import './index.css';
import NavBar from '../NavBar';
import ExpCard from '../ExpCard';
import ProjCard from '../ProjCard';
import {Link} from 'react-router-dom';
import Footer from '../Footer';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
    return (
        <div className='main'>
            <NavBar />
            <div class='flex justify-center items-center w-screen h-screen sm:h-full'>
                <div class='flex container mx-auto w-11/12 h-5/6 sm:w-full sm:flex-col-reverse'>
                    <div class='w-3/5 h-full sm:w-full sm:block' >
                        <h1 class='font-mono font-extrabold text-6xl px-10 py-5 sm:block sm:w-full sm:px-7 sm:text-center sm:py-3 sm:text-5xl lg:text-5xl'>Sameer Rao</h1>
                        <div class='px-10 py-5 sm:block sm:px-7 sm:py-3'>
                            <p class='font-mono font-medium text-home-about-xl sm:text-base sm:text-center lg:text-home-about'>I'm a senior at <a target='_blank' rel='noopener noreferrer' href='https://unc.edu'><u>UNC Chapel Hill</u></a> studying Computer Science and Business Administration.
                                I'm interested in business strategy, new technologies, and startups making change. 
                                <br /><br />
                                In Fall 2023, I will start my career at Boston Consulting Group in their Dallas, Texas office. I'm excited for all the new things I will learn and incredible people I will meet.
                                <br /> <br />
                                Right now, I am building an escape room with <a target='_blank' rel='noopener noreferrer' href='https://www.chapelthrillescapes.com/'><u>Chapel Thrill Escapes</u></a>. This project has been in the works for years, and I'm happy to announce we'll be launching in early 2023 at UNC Chapel Hill. 
                                <br /> <br />
                                Aside from school and career, I'm a huge <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/playlist/7epZVe62LRTtODsMFBVY4R?si=38f4397e8fcc4bc4'><u>hip hop head</u></a>, I love playing and watching basketball, I shoot photogaphy at <a href='https://instagram.com/ShotsBySameer'><u>@ShotsBySameer</u></a>, and I enjoy experiences from concerts to new food spots.
                                <br /> <br />
                                Feel free to connect with me below :)
                            </p>
                        </div>

                        <div class='px-10 py-3 sm:px-7 sm:text-center'>
                            <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-5 sm:px-3'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'>Twitter</a></button> <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4 sm:px-3'><a target='_blank' rel='noopener noreferrer' href='https://medium.com/@sameer-rao'>Medium</a></button> <button class='font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4 sm:px-3'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'>LinkedIn</a></button>
                        </div>
                        <div class='px-10 py-3 sm:hidden'><FontAwesomeIcon icon={faChevronDown} /></div>
                    </div> 
                    <div class='w-2/5 h-5/6 rounded bg-sameer bg-cover sm:block sm:relative sm:top-0 sm:h-72 mt-20 sm:w-5/6 sm:mx-auto sm:bg-sameer-mob'>
                    </div>

                </div>
            
            </div>

            <div class='flex justify-center items-center w-screen h-screen sm:h-full lg:mt-5'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <div class='w-4/5 inline-block sm:w-full lg:w-auto'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5 sm:block sm:w-full sm:px-7 sm:text-center sm:py-3 sm:text-5xl lg:text-5xl'>Experience</h1>
                        </div>
                        <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'><button class='focus:outline-none font-mono hover:bg-blue-400 rounded-lg bg-blue-200 py-2 px-2 sm:block sm:mx-auto sm:mt-3 sm:mb-6'>See all experiences</button></a>
                    </div>
                    <div className='exp-div'>
                        <div class='w-1/3 h-full sm:w-full sm:h-auto lg:w-full'>
                            <ExpCard bg='bg-bcg' company='Boston Consulting Group' position='Associate' dates='Sept 2023-Present' color='text-green-700' description='BCG is a global consulting firm that partners with leaders in business and society to tackle their most important challenges.'></ExpCard>
                            <ExpCard bg='bg-180' company='180 Degrees Consulting' position='VP of Marketing' dates='Jan 2020-Aug 2022' color='text-green-600' description={`180 Degrees Consulting is the world's largest consultancy for non-profits & social enterprises. We provide high-quality consulting services to social impact organizations.`}/> 
                        </div>
                        <div class='w-1/3 sm:w-full lg:w-full'>
                            <ExpCard bg='bg-cte' company='Chapel Thrill Escapes' position='Chief Executive Officer' dates='Jan 2020-Present' color='text-gray-500' description='The first student-run, student-built escape room built at UNC Chapel Hill. Launching January 2023.'/>
                            <ExpCard bg='bg-fidelity' company='Fidelity Investments' position='Software Engineering Intern' dates='Jun 2021-Aug 2021' color='text-green-500' description='Worked as full stack engineer on an Infrastructure project at Fidelity Investments. Learned about automation and back-end management of applications.'/>                           
                            {/* <ExpCard bg='bg-vrware' company='VRware' position='Virtual Reality Software Engineer' dates='Mar 2020-Dec 2020' color='text-yellow-500' description='VRware is a virtual reality startup based out of Chapel Hill, North Carolina, using virtual reality to help prepare entrepreneurs for venture capital pitches.'/> */}
                        </div>
                        <div class='w-1/3 sm:w-full lg:w-full'>
                            <ExpCard bg='bg-cmg' company='CMG Consulting' position='Summer Associate' dates='Jun 2022-Aug 2022' color='text-blue-700' description='CMG is a strategic consulting firm that  partners with enterprise leaders to enable their potential to transform, grow and thrive.'/>
                            <ExpCard bg='bg-jemi' company='Jemi' position='Growth Marketing' dates='Sept 2020-May 2021' color='text-pink-500' description='Jemi is a creator monetization company that offers a website builder for creators to easily showcase content, engage with fans, and monetize online.'/>
                            {/* <ExpCard bg='bg-cssg' company='CS+Social Good' position='Full Stack Engineer' dates='Jul 2020-Present' color='text-green-400' description='An organization of technologists, designers, and thinkers passionate about maximizing the benefits of technology and mitigating its harms. Members of CS+Social Good work with local organizations to help digitize their efforts.'/> */}
                            {/* <ExpCard bg='bg-cisco' company='Cisco Systems' position='Summer Extern' dates='Jun 2018-Jul 2018' color='text-blue-900' description='The Cisco High summer externship is a 4 week opportunity for the top high school students in North Carolina to learn about Cisco, Cybersecurity, design thinking, personal branding, and the Internet of Things (IoT).'/> */}
                        </div>
                    </div>

                </div>

            </div>

            <div class='flex justify-center items-center w-screen h-screen sm:h-auto'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <div class='w-4/5 inline-block sm:w-full lg:w-auto'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5 sm:block sm:w-full sm:px-7 sm:text-center sm:py-3 sm:text-5xl lg:text-5xl'>Projects</h1>
                        </div>  
                        <Link to='projects'><button class='focus:outline-none font-mono hover:bg-blue-400 rounded-lg bg-blue-200 py-2 px-2 sm:block sm:mx-auto sm:mt-3 sm:mb-6'>See all projects</button></Link>          
                    </div>
                    <div className='exp-div'>
                        <div class='w-1/2 h-full sm:w-full sm:h-auto'>
                            <ProjCard bg='bg-unc-roommates' title='UNC Roommates' description='Website built with ReactJS, Firebase, and Google Maps API that allows students to post and find roommmates at UNC Chapel Hill for housing. 25 total signups but hoping to scale with improvement. Currently live at: uncroommate.com'></ProjCard>
                        </div>
                        <div class='w-1/2 h-full sm:w-full sm:h-auto'>
                            <ProjCard bg='bg-dij' title={`Dijkastra's Algorithm Graph Simulator`} description={`A Java implementation of Dijkastra's Algorithm using Hashmaps and Priority Queues to create a scalable system that supports millions of nodes while maintaining O(V+ElogV) time complexity.`}></ProjCard>
                        </div>
                    </div>

                </div>

            </div>

            <Footer></Footer>

        </div>
    )
}

export default Home;