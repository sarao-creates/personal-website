import Footer from '../Footer';
import NavBar from '../NavBar';
import ProjCard from '../ProjCard';
import ProjItem from '../ProjItem';
import './index.css';
import {useState} from 'react';

function Projects() {

    const [techArr, setTechArr] = useState([]);
    const [boolSelect, setBoolSelect] = useState(false);

    const projs = [
        {
            title: 'UNC Roommates',
            techstack: ['React', 'JavaScript', 'Firebase', 'Axios', 'Material-UI', 'Google Maps API'],
            description: `I created UNC Roommates because two friends and I spent months trying to find a 4th roommate for our apartment in Chapel Hill. There just wasn't an obvious destination to go for meeting new people online (COVID-19) and especially those who were also looking for housing. The current system is to use Facebook Groups which are often unapparent and inactive. So I sought to create an easy-to-use, obvious destination for finding roommates. This is also my COMP 426 Final Project. what s up what s up what s up what s up what s up what s up what s up what s up what s up what s up`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/UNCRoommates',
            more: true,
            type: 'Tech'
        },
        {
            title: 'Sup Roommates',
            techstack: ['Firebase'],
            description: `s up`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/UNCRoommates',
            more: true,
            type: 'Tech',
        }
        
    ]

    const [projList, setProjList] = useState(projs.filter(proj => proj.type === 'Tech').map(proj => <ProjItem info={proj}></ProjItem>))


    
    const handleSelect = () => {
        setBoolSelect(prevSelect => !prevSelect);
        if (boolSelect === true) {
            setProjList(projs.filter(proj => proj.type === 'Tech').map(proj => <ProjItem info={proj}></ProjItem>));
        } else {
            setProjList(projs.filter(proj => proj.type === 'Business').map(proj => <ProjItem info={proj}></ProjItem>));
        }
    }

    const handleCheck = () => {
        console.log('test')
        
    }

    return(
        <div className='main'>
            <NavBar></NavBar>
            <div class='flex justify-center items-center w-screen'>
                <div className='proj-section'>
                    <div className='proj-title'>
                        <div class='w-4/5 inline-block'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Projects</h1>
                        </div>  
                    </div>
                    <div className='proj-div'>
                        <div class='px-10 w-full'>
                             <div class='mx-auto w-4/5 h-52 bg-blue-200 rounded'>
                                 <div class='pt-5 px-3 w-2/3 inline-block'>
                                    <input class='w-full h-12 px-3 rounded focus:outline-none border-black border border-solid' type='text' placeholder="Search project"></input>
                                 </div>
 
                                 <div class='w-1/3 inline-block px-3'>
                                     <select onChange={handleSelect} class='w-full h-12 rounded px-3 focus:outline-none border-black border border-solid'>
                                         <option selected value='Tech'>Tech</option>
                                         <option value='Business'>Business</option>
                                     </select>
                                 </div>

                                 <div class='px-20 py-4 flex items-center space-x-3'>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Angular</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Axios</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Bash/Shell</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>C</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Firebase</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Flask</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>HTML/CSS</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>jQuery</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Java</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>JavaScript</span>
                                </div>
                                 <div class='px-20 py-4 flex items-center space-x-3'>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Jupyter Notebooks</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Node.js</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Pandas</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Postman</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Python</span>
                                     <input onChange={handleCheck} type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>React</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>SQL</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md'></input> <span class='text-gray-900 font-medium text-lg'>Unreal Engine</span>
                                 </div>
                                 
                             </div>

                             {/* <ProjItem title='UNC Roommates' techstack='React, Firebase, Axios, Material-UI, Google Maps API' description={`I created UNC Roommates because two friends and I spent months trying to find a 4th roommate for our apartment in Chapel Hill. There just wasn't an obvious destination to go for meeting new people online (COVID-19) and especially those who were also looking for housing. The current system is to use Facebook Groups which are often unapparent and inactive. So I sought to create an easy-to-use, obvious destination for finding roommates. This is also my COMP 426 Final Project. what s up what s up what s up what s up what s up what s up what s up what s up what s up what s up`} github={true} gitlink={'https://github.com/sarao-creates/UNCRoommates'} more={true}></ProjItem>
                             <ProjItem></ProjItem>

                             <ProjItem></ProjItem> */}
                             {
                                //  comp_projs.filter(proj => proj.techstack.includes('React') || proj.techstack.includes('Firebase')).map(proj => <ProjItem info={proj}></ProjItem>)
                                projList
                             }

                        </div>
                    </div>
                </div>
            </div>

            {/* COMMENTED CODE BELOW WAS PRIOR CODE. THINKING OF CHANGING IT UP TO A SELECTOR SYSTEM*/}
            {/* <div class='flex justify-center items-center w-screen h-screen'>
                <div className='proj-section'>
                    <div className='proj-title'>
                        <div class='w-4/5 inline-block'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Projects</h1>
                        </div>  
                    </div>
                    <div className='proj-div'>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-unc-roommates' title='UNC Roommates' description='Website built with ReactJS, Firebase, and Google Maps API that allows students to post and find roommmates at UNC Chapel Hill for housing. 25 total signups but hoping to scale with improvement. Currently live at: uncroommate.com'></ProjCard>
                        </div>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-dij' title={`Dijkastra's Algorithm Graph Simulator`} description={`A Java implementation of Dijkastra's Algorithm using Hashmaps and Priority Queues to create a scalable system that supports millions of nodes while maintaining O(V+ElogV) time complexity.`}></ProjCard>
                        </div>
                    </div>

                </div>

            </div>
            <div class='flex justify-center items-center w-screen h-screen'>
                <div className='proj-section'>
                    <div class='flex h-full'>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-unc-roommates' title='Canvassing Portal for Carolina for the Kids' description={`Built a donor management portal with six students for Carolina for the Kids, an organization that raises $420,000 each year for the patients of UNC Children's Hospital. A large portion of fundraising comes from door-to-door canvassing efforts. This project digitizes that process using React and Firebase.`}></ProjCard>
                        </div>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-dij' title={`Virtual Reality Application for Pitch Practice`} description={`Collaborated with a fellow student to build out multiple virtual reality scenes where students, entrepreneurs, and leaders could practice presentations and pitches in a realistic virtual environment. Implemented with Unreal Engine and Oculus Quest with support for audio recordings, hosted on vrware.tech`}></ProjCard>
                        </div>
                    </div>

                </div>

            </div>

            <div class='flex justify-center items-center w-screen h-screen'>
                <div className='proj-section'>
                    <div class='flex h-full'>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-unc-roommates' title='Exam Question RESTful Interface Backend' description={``}></ProjCard>
                        </div>
                        <div class='w-1/2 h-full'>
                            <ProjCard bg='bg-dij' title={`Drug Misuse`} description={`Drug Misuse Data Analysis`}></ProjCard>
                        </div>
                    </div>

                </div>

            </div> */}

            <Footer></Footer>

        </div>
    )
}

export default Projects;