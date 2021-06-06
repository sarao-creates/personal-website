import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSpotify, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGem} from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div class='h-80 w-full'>
                <div className='footer-section'>
                    <div className='footer-title'>
                        <div class='w-full'>
                            <h1 class='font-mono font-extrabold text-6xl px-10 py-5'>Connect with me</h1>
                            <p class='font-mono font-regular text-2xl px-10 py-5'>I love meeting new people. You can shoot me an email at <u>sameer_rao@kenan-flagler.unc.edu</u> or connect with me on social media below.</p>
                            <div class='px-10'>
                                <div class='inline'><a target='_blank' rel='noopener noreferrer' href='https://jemi.app/sameer'><FontAwesomeIcon icon={faGem} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://instagram.com/sameer__rao'><FontAwesomeIcon icon={faInstagram} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SameerRaoVC'><FontAwesomeIcon icon={faTwitter} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/sameer-r/'><FontAwesomeIcon icon={faLinkedin} size='3x'/></a></div>
                                <div class='ml-5 inline'><a target='_blank' rel='noopener noreferrer' href='https://open.spotify.com/user/sam.i.am01?si=eb3db51c15d34fe3'><FontAwesomeIcon icon={faSpotify} size='3x'/></a></div>
                            </div>
                            <div class='px-10 w-full'>
                                <span class='pt-3 inline-block'>Made by Sameer</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer;