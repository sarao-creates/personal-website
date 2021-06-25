import './index.css';

function ProjCard(props) {
    return(
        <div class='h-full w-full sm:h-auto sm:mb-7'>
            <div className='height-wrapper'>
                <div class='h-full w-11/12 mx-auto shadow-proj z-10 rounded-lg overflow-hidden bg-white'>
                    <div class='proj-card-div'>
                        <h1 class='font-sans text-3xl font-semibold px-5 pt-5 lg:text-xl'>{props.title}</h1>
                        <p className='proj-card-description'>{props.description}</p>
                    </div>
                    <div class='h-4/5 w-full mx-auto'>
                        <div class={`${props.bg} bg-cover h-full w-full lg:w-proj`}>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjCard;