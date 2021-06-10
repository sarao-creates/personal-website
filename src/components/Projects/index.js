import Footer from '../Footer';
import NavBar from '../NavBar';
import ProjItem from '../ProjItem';
import './index.css';
import {useState, useEffect} from 'react';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    const [boolSelect, setBoolSelect] = useState(false);

    const projs = [
        {
            title: 'UNC Roommates',
            techstack: ['React', 'JavaScript', 'Firebase', 'Axios', 'Material-UI', 'Google Maps API', 'Stripe API', 'HTML/CSS'],
            description: `I created UNC Roommates because two friends and I spent months trying to find a 4th roommate for our apartment in Chapel Hill. There just wasn't an obvious destination to go for meeting new people online (COVID-19) and especially those who were also looking for housing. The current system is to use Facebook Groups which are often unapparent and inactive. So I sought to create an easy-to-use, obvious destination for finding roommates. This is also my COMP 426 Final Project. what s up what s up what s up what s up what s up what s up what s up what s up what s up what s up`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/UNCRoommates',
            more: true,
            type: 'Tech'
        },
        {
            title: 'Carolina for the Kids – Canvassing Portal',
            techstack: ['React', 'Firebase', 'Google Maps API', 'Material-UI', 'JavaScript', 'HTML/CSS'],
            description: `This was my first expeience using React and Firebase. I collaborated with six other UNC students to create a web app for Carolina for the Kids. Over the 7-month project, we went from initial Figma designs to a finished product. Click to learn more about the need for this project!`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/UNCRoommates',
            more: true,
            type: 'Tech',
        },
        {
            title: 'Personal Website',
            techstack: ['React', 'TailwindCSS', 'JavaScript', 'HTML/CSS'],
            description: `I've always wanted a personal website for myself–a place that I can look back on years later and reminisce on projects. It's also a great way to improve personal branding and coding skills! (...and I can plug in social media bios)`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/personal-website',
            more: false,
            type: 'Tech',
        },
        {
            title: `Dijkstra's Algorithm Scalable Simuation`,
            techstack: ['Java', 'HashMap', 'Priority Queue', 'Graphs', 'Object-Oriented Programming'],
            description: `Plain Java ...`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/DataStructures/tree/main/assignment5_f20',
            more: false,
            type: 'Tech',
        },
        {
            title: `Virtual Reality Application for Pitch Practice`,
            techstack: ['Unreal Engine', 'C++', 'Oculus Quest'],
            description: `Created VR scenes with another student for VRware.`,
            github: false,
            gitlink: '',
            more: true,
            type: 'Tech',
        },
        {
            title: '2048 Online Game',
            techstack: ['JavaScript', 'React', 'HTML/CSS'],
            description: `2048 is a game...`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/2048-game',
            more: false,
            type: 'Tech',
        },
        {
            title: 'Three Games, One Design',
            techstack: ['Java', 'Swing'],
            description: `Created Tic Tac Toe, Connect Four, and Othello using Java and the Swing GUI library.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/ThreeGamesOneDesign',
            more: false,
            type: 'Tech',
        }
        
    ]
    
    const [search, setSearch] = useState('');
    const [projList, setProjList] = useState(projs.filter(proj => proj.type === 'Tech').map(proj => <ProjItem info={proj}></ProjItem>))

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setProjList(projTypeList.filter(proj => proj.title.includes(search)).map(proj => <ProjItem info={proj}></ProjItem>));
    }
    
    const handleSelect = () => {
        setBoolSelect(prevSelect => !prevSelect);
        if (boolSelect === true) {
            setProjList(projs.filter(proj => proj.type === 'Tech').map(proj => <ProjItem info={proj}></ProjItem>));
            projTypeList = projs.filter(proj => proj.type === 'Tech');

        } else {
            setProjList(projs.filter(proj => proj.type === 'Business').map(proj => <ProjItem info={proj}></ProjItem>));
            projTypeList = projs.filter(proj => proj.type === 'Business');
        }
    }

    let projTypeList = projs.filter(proj => proj.type === 'Tech');
    
    document.addEventListener('change', () => {
        let checkedSkills = [...document.querySelectorAll('.projCheck')]
          .filter(input => input.checked)
          .map(input => input.value);
        
        // console.log(checkedSkills);
        // console.log(projTypeList.filter(({ techstack }) => checkedSkills.includes(techstack)))
        //const filteredProjs = projTypeList.filter(({ techstack }) => checkedSkills.includes(techstack));
        const filteredProjs = projTypeList.filter(function(proj) {
            for (let i = 0; i < proj.techstack.length; i++) {
                for (let j = 0; j < checkedSkills.length; j++) {
                    if (proj.techstack[i] === checkedSkills[j]) {
                        return true;
                    }
                }
            }

            return false;
        });
        
        setProjList(filteredProjs.map(proj => <ProjItem info={proj}></ProjItem>))

        if (checkedSkills.length === 0) {
            if (!boolSelect === true) {
                setProjList(projs.filter(proj => proj.type === 'Tech').map(proj => <ProjItem info={proj}></ProjItem>));
                projTypeList = projs.filter(proj => proj.type === 'Tech');
    
            } else {
                setProjList(projs.filter(proj => proj.type === 'Business').map(proj => <ProjItem info={proj}></ProjItem>));
                projTypeList = projs.filter(proj => proj.type === 'Business');
            }
        }
    });

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
                                    <input onChange={handleSearch} class='w-full h-12 px-3 rounded focus:outline-none border-black border border-solid' type='text' placeholder="Search project"></input>
                                 </div>
 
                                 <div class='w-1/3 inline-block px-3'>
                                     <select id='typeSelect'onChange={handleSelect} class='w-full h-12 rounded px-3 focus:outline-none border-black border border-solid'>
                                         <option selected value='Tech'>Tech</option>
                                         <option value='Business'>Business</option>
                                     </select>
                                 </div>
                                
                                 <div class='px-20 py-4 flex items-center space-x-3'>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Angular'></input> <span class='text-gray-900 font-medium text-lg'>Angular</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Axios'></input> <span class='text-gray-900 font-medium text-lg'>Axios</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Bash/Shell'></input> <span class='text-gray-900 font-medium text-lg'>Bash/Shell</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='C'></input> <span class='text-gray-900 font-medium text-lg'>C</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Firebase'></input> <span class='text-gray-900 font-medium text-lg'>Firebase</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Flask'></input> <span class='text-gray-900 font-medium text-lg'>Flask</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='HTML/CSS'></input> <span class='text-gray-900 font-medium text-lg'>HTML/CSS</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='jQuery'></input> <span class='text-gray-900 font-medium text-lg'>jQuery</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Java'></input> <span class='text-gray-900 font-medium text-lg'>Java</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='JavaScript'></input> <span class='text-gray-900 font-medium text-lg'>JavaScript</span>
                                </div>
                                 <div class='px-20 py-4 flex items-center space-x-3'>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Jupyter Notebooks'></input> <span class='text-gray-900 font-medium text-lg'>Jupyter Notebooks</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Node.js'></input> <span class='text-gray-900 font-medium text-lg'>Node.js</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Pandas'></input> <span class='text-gray-900 font-medium text-lg'>Pandas</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Postman'></input> <span class='text-gray-900 font-medium text-lg'>Postman</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Python'></input> <span class='text-gray-900 font-medium text-lg'>Python</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='React'></input> <span class='text-gray-900 font-medium text-lg'>React</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='SQL'></input> <span class='text-gray-900 font-medium text-lg'>SQL</span>
                                     <input type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Unreal Engine'></input> <span class='text-gray-900 font-medium text-lg'>Unreal Engine</span>
                                 </div>
                                 {/* <div>
                                     <button onClick={() => handleClick('test1')}>test1</button>
                                     <button onClick={() => handleClick('test2')}>test2</button>
                                 </div> */}
                                 
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
            <div class='pt-10'>
                <Footer></Footer>
            </div>
            

        </div>
    )
}

export default Projects;