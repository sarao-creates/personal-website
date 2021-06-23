import './index.css';

function ExpCard(props) {
    return(
        <div class='h-1/2 w-full sm:h-auto sm:mb-7'>
            <div className='height-wrapper'>
                <div class='h-full w-4/6 mx-auto sm:w-full lg:w-11/12'>
                    <div class='h-1/2 w-full mx-auto shadow-lg z-10 lg:h-auto'>
                        <div class={`${props.bg} bg-cover h-full w-full rounded-lg sm:h-exp lg:h-tablet-exp`}>

                        </div>
                    </div>
                    <div class='h-1/2 w-full mx-auto pt-3 px-1'>
                        <h1 class='font-sans text-2xl font-semibold sm:text-center'>{props.company}</h1>
                        <h3 class={`font-sans text-lg font-semibold sm:text-center ${props.color}`}>{props.position}</h3>
                        <h3 class='font-sans text-lg font-semibold sm:text-center'>{props.dates}</h3>
                        <div className='desc-div'>
                            <p className='desc-overflow sm:text-center'>{props.description}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExpCard;