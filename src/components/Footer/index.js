import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGem} from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div class='h-80 w-full sm:h-auto'>
                <div className='footer-section'>
                    <div className='footer-title'>
                        <div class='w-full'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5 sm:block sm:w-full sm:px-7 sm:text-center sm:py-3 sm:text-5xl'>Connect with me</h1>
                            <p class='font-mono font-regular text-2xl px-10 py-5 sm:text-base sm:text-center'>I love meeting new people. You can shoot me an email at <u>sameer_rao@kenan-flagler.unc.edu</u> or connect with me on social media below.</p>
                            <div class='px-10 sm:px-3 sm:text-center'>
                                <div class='inline'><a target='_blank' rel='noopener noreferrer' href='https://jemi.app/sameer'><FontAwesomeIcon icon={faGem} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://instagram.com/sameer__rao'><FontAwesomeIcon icon={faInstagram} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'><FontAwesomeIcon icon={faTwitter} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'><FontAwesomeIcon icon={faLinkedin} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/user/sam.i.am01?si=eb3db51c15d34fe3'><FontAwesomeIcon icon={faSpotify} size='3x'/></a></div>
                            </div>
                            <div class='px-10 w-full sm:px-3'>
                                <span class='pt-3 inline-block sm:block sm:text-center sm:pb-5'>Made by Sameer</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;