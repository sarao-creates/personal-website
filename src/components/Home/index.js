import './index.css';
import NavBar from '../NavBar';
import ExpCard from '../ExpCard';
import ProjCard from '../ProjCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Home() {
    return (
        <div className='main'>
            <div class='flex justify-center items-center w-screen h-screen'>
                <div class='flex container mx-auto w-11/12 h-5/6'>
                    <div class='w-3/5 h-full' >
                        <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Sameer Rao</h1>
                        <div class='px-10 py-5'>
                            <p class='font-mono font-medium text-2xl'>I'm a junior at <a target='_blank' rel='noopener noreferrer' href='https://unc.edu'><u>UNC Chapel Hill</u></a> studying Computer Science and Business Administration as a double major.
                                I'm interested in product, consulting, statups, and the creator economy. Learn more about me <u>here</u>.
                                <br /> <br />
                                My dream job is to help companies–whether its building out products, scaling their customer base, or advising as a third-party.
                                My website showcases projects and companies I've worked with in more detail. Feel free to explore :)
                                <br /> <br />
                                Some more about me: I'm a huge <a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/playlist/7epZVe62LRTtODsMFBVY4R?si=38f4397e8fcc4bc4'><u>hip hop head</u></a>, I love playing and watching basketball, I shoot photogaphy at <a href='https://instagram.com/ShotsBySameer'><u>@ShotsBySameer</u></a>. Oh and I may bring up Chicago a bunch around you, that's my home city.
                                <br /> <br />
                                I post about tech, products, consulting, and more on my <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'><u>Twitter</u></a> and delve deeper in my <a target='_blank' rel='noopener noreferrer' href='https://medium.com/@sameer_rao'><u>Medium</u></a> articles. Check them out and feel free to connect with me!
                            </p>
                        </div>

                        <div class='px-10 py-3'>
                            <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-5'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'>Twitter</a></button> <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4'><a target='_blank' rel='noopener noreferrer' href='https://medium.com/@sameer_rao'>Medium</a></button> <button class='font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'>LinkedIn</a></button>
                        </div>
                        <div class='px-10 py-3'><FontAwesomeIcon icon={faChevronDown} /></div>
                    </div>
                    <div class='w-2/5 h-full rounded bg-sameer bg-cover'>
                    </div>

                </div>
            
            </div>

            <div class='flex justify-center items-center w-screen h-screen'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <div class='w-4/5 inline-block'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Experience</h1>
                        </div>
                        <button class='font-mono hover:bg-blue-400 rounded-lg bg-blue-200 py-2 px-2'>See all experiences</button>
                    </div>
                    <div className='exp-div'>
                        <div class='w-1/3 h-full'>
                            <ExpCard bg='bg-fidelity' company='Fidelity Investments' position='Software Engineering Intern' dates='Jun 2021-Present' color='text-green-500' description='Incoming Summer 2021 Intern. Coming Soon...'/>
                            <ExpCard bg='bg-180' company='180 Degrees Consulting' position='Project Leader and Consultant' dates='Jan 2020-Present' color='text-green-600' description={`180 Degrees Consulting is the world's largest consultancy for non-profits & social enterprises. We provide high-quality consulting services to social impact organizations.`}/>
                        </div>
                        <div class='w-1/3'>
                            <ExpCard bg='bg-jemi' company='Jemi' position='Growth Marketing Intern' dates='Sep 2020-May 2021' color='text-pink-500' description='Jemi is a creator monetization company that offers a website builder for creators to easily showcase content, engage with fans, and monetize online.'/>
                            <ExpCard bg='bg-vrware' company='VRware' position='Virtual Reality Software Engineer' dates='Mar 2020-Dec 2020' color='text-yellow-500' description='VRware is a virtual reality startup based out of Chapel Hill, North Carolina, using virtual reality to help prepare entrepreneurs for venture capital pitches.'/>
                        </div>
                        <div class='w-1/3'>
                            <ExpCard bg='bg-cssg' company='CS+Social Good' position='Full Stack Engineer' dates='Jul 2020-Present' color='text-green-400' description='An organization of technologists, designers, and thinkers passionate about maximizing the benefits of technology and mitigating its harms. Members of CS+Social Good work with local organizations to help digitize their efforts.'/>
                            <ExpCard bg='bg-cisco' company='Cisco Systems' position='Summer Extern' dates='Jun 2018-Jul 2018' color='text-blue-900' description='The Cisco High summer externship is a 4 week opportunity for the top high school students in North Carolina to learn about Cisco, Cybersecurity, design thinking, personal branding, and the Internet of Things (IoT).'/>
                        </div>
                    </div>

                </div>

            </div>

            <div class='flex justify-center items-center w-screen h-screen'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <div class='w-4/5 inline-block'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Projects</h1>
                        </div>  
                        <button class='font-mono hover:bg-blue-400 rounded-lg bg-blue-200 py-2 px-2'>See all projects</button>          
                    </div>
                    <div className='exp-div'>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-unc-roommates' title='UNC Roommates' description='Website built with ReactJS, Firebase, and Google Maps API that allows students to post and find roommmates at UNC Chapel Hill for housing. 25 total signups but hoping to scale with improvement. Currently live at: uncroommate.com'></ProjCard>
                        </div>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-dij' title={`Dijkastra's Algorithm Graph Simulator`} description={`A Java implementation of Dijkastra's Algorithm using Hashmaps and Priority Queues to create a scalable system that supports millions of nodes while maintaining O(V+ElogV) time complexity.`}></ProjCard>
                        </div>
                    </div>

                </div>

            </div>

            <div class='h-72 w-full'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <div class='w-full'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Connect with me</h1>
                            <p class='font-mono font-regular text-2xl px-10 py-5'>I love meeting new people. You can shoot me an email at <u>sameer_rao@kenan-flagler.unc.edu</u> or connect with me on social media below.</p>
                            <div class='px-10'>
                                <div class='inline'><a target='_blank' rel='noopener noreferrer' href='https://instagram.com/sameer__rao'><FontAwesomeIcon icon={faInstagram} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'><FontAwesomeIcon icon={faTwitter} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'><FontAwesomeIcon icon={faLinkedin} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/user/sam.i.am01?si=eb3db51c15d34fe3'><FontAwesomeIcon icon={faSpotify} size='3x'/></a></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home;