import './index.css';

function ExpCard(props) {
    return(
        <div class='h-1/2 w-full'>
            <div className='height-wrapper'>
                <div class='h-full w-4/6 mx-auto'>
                    <div class='h-1/2 w-full mx-auto'>
                        <div class={`${props.bg} bg-cover h-full w-full rounded-lg shadow-lg`}>

                        </div>
                    </div>
                    <div class='h-1/2 w-full mx-auto pt-3 px-1'>
                        <h1 class='font-sans text-2xl font-semibold'>{props.company}</h1>
                        <h3 class={`font-sans text-lg font-semibold ${props.color}`}>{props.position}</h3>
                        <h3 class='font-sans text-lg font-semibold'>{props.dates}</h3>
                        <p class='overflow-ellipsis'>{props.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ExpCard;