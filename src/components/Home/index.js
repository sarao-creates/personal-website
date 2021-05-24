import './index.css';
import NavBar from '../NavBar';
import ExpCard from '../ExpCard';

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
                    </div>
                    <div class='w-2/5 h-full rounded bg-sameer bg-cover'>
                    </div>

                </div>
            
            </div>

            <div class='flex justify-center items-center w-screen h-screen'>
                <div className='exp-section'>
                    <div className='exp-title'>
                        <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Experience</h1>
                    </div>
                    <div className='exp-div'>
                        <div class='w-1/3 h-full'>
                            <ExpCard bg='bg-sameer' company='Fidelity' position='Software Engineering Intern' dates='Jun 2021-Present' color='text-green-500' description='TBD'/>
                            <ExpCard bg='bg-sameer' company='180 Degrees Consulting' position='Project Leader and Consultant' dates='Jan 2020-Present' color='text-green-600' description='TBD'/>
                        </div>
                        <div class='w-1/3'>
                            <ExpCard bg='bg-sameer' company='Jemi' position='Growth Marketing Intern' dates='Sep 2020-May 2021' color='text-pink-500' description='Jemi is a creator monetization company that offers a website builder for creators to easily showcase content, engage with fans, and monetize online.'/>
                            <ExpCard bg='bg-sameer' company='VRware' position='Virtual Reality Software Engineer' dates='Mar 2020-Dec 2020' color='text-yellow-500' description='TBD'/>
                        </div>
                        <div class='w-1/3'>
                            <ExpCard bg='bg-sameer' company='CS+Social Good' position='Full Stack Engineer' dates='Jul 2020-Present' color='text-green-400' description='TBD'/>
                            <ExpCard bg='bg-sameer' company='Cisco' position='Summer Extern' dates='Jun 2018-Jul 2018' color='text-blue-900' description='TBD'/>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;