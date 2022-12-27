import {useEffect} from 'react';
import NavBar from '../NavBar';

function Writing() {

    // useEffect(() => {
    //     window.mediumWidget(); 
    // }, [])

    return(
        <div className='main'>
            <NavBar />
            <div>
                <div class='container mx-auto w-3/4 pt-16'>
                    <h1 class='font-mono font-extrabold text-6xl py-5'>Writing</h1>
                    <p class='font-mono text-base'>About tech, products, consulting, startups, and experiences. I'm somewhat active, trying to write more!</p>
                    <p class='font-mono text-base'><a target='_blank' rel='noopener noreferrer' href='https://sameer-rao.medium.com'><u>sameer-rao.medium.com</u></a></p>
                    {/* <div id="medium-widget"></div> */}
   
                </div>
                <div class='h-12'></div>

            </div>

        </div>
    )
}

export default Writing;