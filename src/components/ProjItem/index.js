import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';


function ProjItem(props) {

    const checkButtons = () => {
        if (props.info.github === true && props.info.more === true) {
            return (
                <div class='pt-3'>
                    <a href={props.gitlink} target='_blank' rel='noopener noreferrer'><button class='focus:outline-none'><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></button></a>
                    <button class='ml-3 focus:outline-none'><FontAwesomeIcon icon={faInfoCircle} size='2x'></FontAwesomeIcon></button>
                </div>
            )
        }
        else if (props.info.github === true) {
            return (
                <div class='pt-3'>
                    <a href={props.info.gitlink} target='_blank' rel='noopener noreferrer'><button><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></button></a>
                </div>
            )
        }

        else if (props.info.more === true) {
            <div class='pt-3'>
                <button><FontAwesomeIcon icon={faInfoCircle} size='2x'></FontAwesomeIcon></button>
            </div>

        }
    }

    return(
        <div class='mx-auto w-3/4 mt-10 h-80 bg-purple-50 border-2 border-solid border-blue-200 rounded sm:w-11/12'>
            <div id='content' class='py-5 px-5 flex w-full h-full'>
                <div class='w-2/5 bg-blue-200 h-full sm:hidden'></div>
                <div class='w-3/5 px-3 sm:w-full'>
                    <h1 class='font-bold font-sans text-3xl sm:text-2xl'>{props.info.title}</h1>
                    <h3 class='font-sans text-lg font-normal leading-snug'>Technologies used: {props.info.techstack.length === 1 ? props.info.techstack[0] : props.info.techstack.slice(0, props.info.techstack.length - 1).join(', ') + ", and " + props.info.techstack.slice(-1)}</h3>
                    <div className='proj-desc-div'>
                        <p className='proj-desc-overflow'>{props.info.description}</p>
                    </div>                
                    {checkButtons()}
                </div>
            </div>

        </div>
    )
}

export default ProjItem;