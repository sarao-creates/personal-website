import Footer from '../Footer';
import NavBar from '../NavBar';
import ProjItem from '../ProjItem';
import './index.css';
import {useState} from 'react';

function Projects() {
    const [boolSelect, setBoolSelect] = useState(false);

    const projs = [
        {
            bg: 'bg-unc-roommates',
            title: 'UNC Roommates',
            techstack: ['React', 'JavaScript', 'Firebase', 'Axios', 'Material-UI', 'Google Maps API', 'Stripe API', 'HTML/CSS'],
            description: `I created UNC Roommates because two friends and I spent months trying to find a 4th roommate for our apartment in Chapel Hill. There just wasn't an obvious destination to go for meeting new people online (COVID-19) and especially those who were also looking for housing. The current system is to use Facebook Groups which are often unapparent and inactive. So I sought to create an easy-to-use, obvious destination for finding roommates. This is also my COMP 426 Final Project.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/UNCRoommates',
            more: true,
            morelink: 'https://6096427c300c42f06256a91e--serene-liskov-010cf3.netlify.app/',
            type: 'Tech'
        },
        {
            bg: 'bg-cftk',
            title: 'Carolina for the Kids – Canvassing Portal',
            techstack: ['React', 'Firebase', 'Google Maps API', 'Material-UI', 'JavaScript', 'HTML/CSS'],
            description: `This was my first expeience using React and Firebase. I collaborated with six other UNC students to create a web app for Carolina for the Kids. Traditionally, this organization tracked their door-to-door fundraising for UNC Children's Hospital through paper means. This 7-month project created a digital canvassing portal in which volunteers could log the money raised and at what specific houses they raised money via their phones. We went from initial Figma designs to a finished product. Click to learn more about the need for this project!`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/cftk',
            more: false,
            morelink: '', 
            type: 'Tech',
        },
        {
            bg: 'bg-488-graduate-hotels',
            title: 'Solving Retention for Graduate Hotels',
            techstack: ['Python', 'Jupyter Notebooks', 'Pandas'],
            description: 'Graduate Hotels, a local hotel in Chapel Hill, came to us with a problem: how do we retain our customers? Using sentiment analysis of over 84,000 Trip Advisor reviews, we classified customer segments into positive, neutral, or negative expereinced guests. We then benchmarked with competitors and identified the key areas Graduate Hotels were missing the mark on.',
            more: true,
            morelink: "https://drive.google.com/file/d/1xyr_EMQdOvk1qs0VONi_zE0rd-ySqQUV/view?usp=sharing",
            type: 'Tech'
        },
        {
            bg: 'bg-488-coffee-shop',
            title: `Increasing a Coffee Shop's Profit Margins via Machine Learning`,
            techstack: ['Python', 'Jupyter Notebooks', 'Pandas'],
            description: 'A coffee shop provided us with their sales data. Using this data, we used ML to identify complementary products and recommended dropping non-complementary products with low revenue. We then developed a Happy Hour bundle for off-peak sales hours.',
            more: true,
            morelink: "https://drive.google.com/file/d/1fU4rg21IFdJ8C7G0nxeEqi4pfy4Hi9aB/view?usp=sharing",
            type: 'Tech'
        },
        {
            bg: 'bg-vr',
            title: `Virtual Reality Application for Pitch Practice`,
            techstack: ['Unreal Engine', 'C++', 'Oculus Quest'],
            description: `Collaborated with another student at UNC to build a VR software that would help people practice pitching under realistic environments. I built out the VR scenes, body tracking feature, and VR mechanics while Jiayi worked on audio analysis, VR UI, and character animations. Also raised $400 in funding and build the business model for this project.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/VRware-Presentation-Practice',
            more: true,
            type: 'Tech',
        },
        {
            bg: 'bg-dij',
            title: `Dijkstra's Algorithm Scalable Simuation`,
            techstack: ['Java', 'HashMap', 'Priority Queue', 'Graphs', 'Object-Oriented Programming'],
            description: `Implemented Dijkstra's Algorithm using Java in my COMP 410 class. This was early in my computer science journey but a fun project nonetheless.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/DataStructures/tree/main/assignment5_f20',
            more: false,
            type: 'Tech',
        },
        {
            bg: 'bg-rest-backend',
            title: 'RESTful Interface for Developing Exam Questions',
            techstack: ['Python', 'SQL', 'Postman'],
            description: `This project is the backend for a web application for developing exam questions for a database class. Create multiple choice, short answer, or SQL questions using custom routes, stored in a SQL database backend. Learn more about the routes and how to use them at the Github repo below.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/exam-question-backend',
            more: false,
            type: 'Tech',
        },
        {
            bg: 'bg-mpower',
            title: 'mPOWER Web Development Project',
            techstack: ['React', 'NextJS', 'Firebase', 'HTML/CSS'],
            description: `Worked with a client called mPOWER, a startup. They were looking to develop the 'Yelp of Community Resources'. We took their Figma designs and made them a reality. This was part of my time at CS+SG. I did much less coding on this project as I was the Project Manager. This means I helped coordinate meetings and helped other people code.`,
            github: true,
            gitlink: 'https://github.com/cssgunc/mPOWER',
            type: 'Tech'
        }, 
        {
            bg: 'bg-2048',
            title: '2048 Online Game',
            techstack: ['JavaScript', 'React', 'HTML/CSS'],
            description: `2048 is a game...and I built this project for my COMP 426 class.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/2048-game',
            more: false,
            type: 'Tech',
        },
        {
            bg: 'bg-three-games',
            title: 'Three Games, One Design',
            techstack: ['Java', 'Swing'],
            description: `Created Tic Tac Toe, Connect Four, and Othello using Java and the Swing GUI library.`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/ThreeGamesOneDesign',
            more: false,
            type: 'Tech',
        },
        {
            bg: 'bg-website',
            title: 'Personal Website',
            techstack: ['React', 'TailwindCSS', 'JavaScript', 'AWS (S3)', 'HTML/CSS'],
            description: `I've always wanted a personal website for myself–a place that I can look back on years later and reminisce on projects. It's also a great way to improve personal branding and coding skills! (...and I can plug in social media bios). You're looking at this project right now!`,
            github: true,
            gitlink: 'https://github.com/sarao-creates/personal-website',
            more: false,
            type: 'Tech',
        },
        {
            bg: 'bg-cte-r',
            title: 'Chapel Thrill Escapes: Rameses in Wonderland Escape Room',
            techstack: ['Entrepreneurship', 'Management', 'Operations', 'Product', 'Marketing', 'Finance', 'Sales'],
            description: `This project was my baby during my time at Chapel Hill. The tangible project I wanted to give back to my school. We built the 'Rameses in Wonderland' Escape Room in 10 months and ran the room for 550+ people across 101 rooms in its first three months.`,
            github: false,
            gitlink: '',
            more: true,
            morelink: 'https://www.chapelthrillescapes.com/',
            type: 'Business'
        },
        {
            bg: 'bg-apple',
            title: 'Apple Case Competition for CSF',
            techstack: ['Consulting', 'Research', 'Finance'],
            description: `Developed recommendations for Apple regarding revenue-generating ideas, including acquiring a young AI health startup and becoming a network MVNO. Placed 1st in case compeititon.`,
            more: true,
            morelink: 'https://drive.google.com/file/d/1nrgvXNpT1KFpoy5CR_0leJPuU-EgIr3m/view?usp=sharing',
            type: 'Business'
        },
        {
            bg: 'bg-180-rmh',
            title: 'Ronald McDonald House: Merger Project',
            techstack: ['Consulting', 'Research'],
            description: 'With 180DC UNC, we were hired by the Ronald McDonald House of Chapel Hill & Durham. The two locations were set to complete a merger in 2023 of their nonprofit houses. They asked us to provide them recommendations on best nonprofit merger practices to maintain operational and cultural success post-merger. Our team worked with the Executive Directors of both houses in developing this project.',
            more: true,
            morelink: "https://drive.google.com/file/d/1LZqg3uhHeVBKMlLArdknNDx8AJcwgytt/view?usp=sharing",
            type: 'Business'
        },
        {
            bg: 'bg-180-ioh',
            title: 'Inheritance of Hope: New Product Project',
            techstack: ['Consulting', 'Research'],
            description: 'With 180DC UNC, we were hired by the Inheritance of Hope to conduct research on a new product they seeked to offer via their mobile app - legacy videos. In this project, I was the Project Leader and led a team of four other consultants in developing recommendations on the best strategy in launching this new product.',
            more: true,
            morelink: "https://drive.google.com/file/d/1fN7Dyy7i-GnZzNM2RAd1uRvanb317rmS/view?usp=sharing",
            type: 'Business'
        },
        {
            bg: 'bg-best-buy',
            title: 'Best Buy Case Competition for CSF',
            techstack: ['Consulting', 'Research', 'Finance'],
            description: `Developed recommendations for Best Buy regarding revenue-generating ideas, including expanding into smart fitness clothing and bundling solar panels with installation services via GeekSquad. Placed 1st in case compeititon.`,
            more: true,
            morelink: 'https://drive.google.com/file/d/1WDtHg-_Oe8fM8nToV1N1xKVqct1A7AeV/view?usp=sharing',
            type: 'Business'
        },
        {
            bg: 'bg-donuts',
            title: 'Do-Nut Have Cookies',
            techstack: ['Entrepreneurship', 'Sales'],
            description: `Fun 1-month entrepreneurship initiative for my BUSI 188 class. We were given $50 and asked to raise as much money as we could in a month. So...my team and I sold donuts to students on campus, with a healthy twist :) We ended up raising $350 and a class total of $850 for UN Population Fund.`,
            github: false,
            gitlink: '',
            more: true,
            morelink: 'https://www.instagram.com/donuthavecookies/',
            type: 'Business',
        },
        
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
                        <div class='w-4/5 inline-block sm:block sm:w-full'>
                            <h1 class='font-mono font-extrabold text-6xl px-32 py-5 sm:p-0 sm:pt-9 sm:block sm:w-full sm:text-center sm:text-5xl'>Projects</h1>
                        </div>  
                    </div>
                    <div className='proj-div'>
                        <div class='px-10 w-full pt-5 sm:p-0 sm:pt-5'>
                             <div class='mx-auto w-4/5 h-52 bg-blue-200 rounded sm:w-full sm:h-auto'>
                                 <div class='pt-5 px-3 w-2/3 inline-block'>
                                    <input onChange={handleSearch} class='w-full h-12 px-3 rounded focus:outline-none border-black border border-solid' type='text' placeholder="Search project"></input>
                                 </div>
 
                                 <div class='w-1/3 inline-block px-3'>
                                     <select id='typeSelect'onChange={handleSelect} class='w-full h-12 rounded px-3 focus:outline-none border-black border border-solid'>
                                         <option selected value='Tech'>Tech</option>
                                         <option value='Business'>Business</option>
                                     </select>
                                 </div>
                                 <p class='text-center hidden sm:block sm:pt-3'>Tap on a technology to filter.</p>
                                 <div class='px-20 py-4 flex items-center space-x-3 sm:p-0 sm:pt-4 sm:w-full sm:overflow-scroll'>
                                     <input id='angular' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Angular'></input> <label for='angular' class='text-gray-900 font-medium text-lg'>Angular</label>
                                     <input id='axios' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Axios'></input> <label for='axios' class='text-gray-900 font-medium text-lg'>Axios</label>
                                     <input id='bash' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Bash/Shell'></input> <label for='bash' class='text-gray-900 font-medium text-lg'>Bash/Shell</label>
                                     <input id='c' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='C'></input> <label for='c' class='text-gray-900 font-medium text-lg'>C</label>
                                     <input id='firebase' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Firebase'></input> <label for='firebase' class='text-gray-900 font-medium text-lg'>Firebase</label>
                                     <input id='flask' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Flask'></input> <label for='flask' class='text-gray-900 font-medium text-lg'>Flask</label>
                                     <input id='html' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='HTML/CSS'></input> <label for='html' class='text-gray-900 font-medium text-lg'>HTML/CSS</label>
                                     <input id='jquery' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='jQuery'></input> <label for='jquery' class='text-gray-900 font-medium text-lg'>jQuery</label>
                                     <input id='java' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Java'></input> <label for='java' class='text-gray-900 font-medium text-lg'>Java</label>
                                     <input id='javascript' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='JavaScript'></input> <label for='javascript' class='text-gray-900 font-medium text-lg'>JavaScript</label>
                                </div>
                                 <div class='px-20 py-4 flex items-center space-x-3 sm:p-0 sm:py-4 sm:w-full sm:overflow-scroll'>
                                     <input id='jup' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Jupyter Notebooks'></input> <label for='jup' class='text-gray-900 font-medium text-lg'>Jupyter Notebooks</label>
                                     <input id='node' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Node.js'></input> <label for='node' class='text-gray-900 font-medium text-lg'>Node.js</label>
                                     <input id='pandas' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Pandas'></input> <label for='pandas' class='text-gray-900 font-medium text-lg'>Pandas</label>
                                     <input id='postman' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Postman'></input> <label for='postman' class='text-gray-900 font-medium text-lg'>Postman</label>
                                     <input id='python' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Python'></input> <label for='python' class='text-gray-900 font-medium text-lg'>Python</label>
                                     <input id='react' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='React'></input> <label for='react' class='text-gray-900 font-medium text-lg'>React</label>
                                     <input id='sql' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='SQL'></input> <label for='sql' class='text-gray-900 font-medium text-lg'>SQL</label>
                                     <input id='unreal' type="checkbox" class='h-5 w-5 focus:outline-none border-gray-300 rounded-md projCheck' value='Unreal Engine'></input> <label for='unreal' class='text-gray-900 font-medium text-lg'>Unreal Engine</label>
                                 </div>
                                 
                             </div>
                             {
                                projList
                             }

                        </div>
                        <div>
                            <br></br>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class='pt-10'>
                <Footer></Footer>
            </div> */}
            <div class='h-12'>

            </div>
            
            

        </div>
    )
}

export default Projects;