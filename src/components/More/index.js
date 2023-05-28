import NavBar from '../NavBar';

function More() {
    return(
        <div className='main'>
            <NavBar />
            <div class='container mx-auto w-3/4 pt-16 sm:w-full'>
                <h1 class='font-mono font-extrabold text-6xl py-5 sm:text-center'>More!</h1>
                <p class='font-mono text-base sm:text-center'>Photography. More photos <a target='_blank' rel='noopener noreferrer' href='https://vsco.co/sameerphotography/gallery'><u>here</u></a>. Instagram <a target='_blank' rel='noopener noreferrer' href="https://instagram.com/shotsbysameer"><u>here</u></a>.</p>
                <div class='flex space-x-4 pt-4 sm:block sm:p-0'>
                    <div class='w-1/3 h-96 bg-eiffel bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                    <div class='w-1/3 h-96 bg-basilica bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                    <div class='w-1/3 h-96 bg-municipal bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                </div>
                <div class='flex space-x-4 pt-4 sm:block sm:p-0'>
                    <div class='w-1/3 h-96 bg-parthenon bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                    <div class='w-1/3 h-96 bg-ferris bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                    <div class='w-1/3 h-96 bg-sacre bg-cover sm:w-11/12 sm:mx-auto sm:rounded sm:mt-4'></div>
                </div>

                <br></br>
                <br></br>
                <p class='font-mono text-base pt-8 sm:text-center'>Startups. WIP - trying to get more involved with startups and venture capital. So far have just been learning and reading newsletters but would love to learn more so please reach out!</p>
                
                <br></br>
                <br></br>
                <p class='font-mono text-base pt-8 sm:text-center'>Music. Note: Spotify Widget Embeds only show the canonical order as of now. Visit my playlist to see the custom sorting order, which features recently added songs at the top.</p>
                <div class='pt-4'>
                    <iframe src="https://open.spotify.com/embed/playlist/7epZVe62LRTtODsMFBVY4R?theme=0" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                {/* <div class='pt-4'>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSbAW-4I1dotKFS1eHeEbwmAIJDCLaf2PArTueWvGX52v9zr8F-T8YsVq83WMLd9jAcTko8yDhaFBQl/pubhtml?gid=1973148427&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                </div> */}

            </div>
            <div class='h-12'></div>
        </div>
    )

}

export default More;