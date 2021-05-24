import './index.css';

function Home() {
    return (
        <div className='main'>
            <div class='flex justify-center items-center w-screen h-screen'>
                <div class='flex container mx-auto w-11/12 h-5/6'>
                    <div class='w-3/5 h-full ' >
                        <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Sameer Rao</h1>
                        <div class='px-10 py-5'>
                            <p class='font-mono font-medium text-2xl'>I'm a junior at <a target='_blank' href='https://unc.edu'><u>UNC Chapel Hill</u></a> studying Computer Science and Business Administration as a double major.
                                I'm interested in product, consulting, statups, and the creator economy.
                                <br /> <br />
                                My dream job is to help companies–whether its building out products, scaling their customer base, or advising as a third-party.
                                My website showcases projects and companies I've worked with in more detail. Feel free to explore :)
                                <br /> <br />
                                Some more about me: I'm a huge <a target='_blank' href='https://open.spotify.com/playlist/7epZVe62LRTtODsMFBVY4R?si=38f4397e8fcc4bc4'><u>hip hop head</u></a>, I love playing and watching basketball, I shoot photogaphy at <a href='https://instagram.com/ShotsBySameer'><u>@ShotsBySameer</u></a>. Oh and I may bring up Chicago a bunch around you, that's my home city.
                                <br /> <br />
                                I post about tech, products, consulting, and more on my <a target='_blank' href='https://twitter.com/SameerRaoVC'><u>Twitter</u></a> and delve deeper in my <a target='_blank' href='https://medium.com/@sameer_rao'><u>Medium</u></a> articles. Check them out and feel free to connect with me!
                            </p>
                        </div>

                        <div class='px-10 py-3'>
                            <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-5'><a target='_blank' href='https://twitter.com/SameerRaoVC'>Twitter</a></button> <button class='mr-3 font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4'><a target='_blank' href='https://medium.com/@sameer_rao'>Medium</a></button> <button class='font-mono font-bold hover:bg-blue-400 rounded-lg bg-blue-200 py-3 px-4'><a target='_blank' href='https://www.linkedin.com/in/sameer-r/'>LinkedIn</a></button>
                        </div>
                    </div>
                    <div class='w-2/5 h-full bg-sameer bg-cover'>
                    </div>

                </div>
            
            </div>

        </div>
    )
}

export default Home;