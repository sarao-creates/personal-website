import './index.css';

function ProjCard(props) {
    return(
        <div class='h-full w-full'>
            <div className='height-wrapper'>
                <div class='h-full w-11/12 mx-auto shadow-proj z-10 rounded-lg overflow-hidden'>
                    <div class='h-1/5 w-full mx-auto'>
                        <h1 class='font-sans text-3xl font-semibold px-5 pt-7'>{props.title}</h1>
                        <p class='font-sans text-lg font-regular px-5 pt-1'>{props.description}</p>
                    </div>
                    <div class='h-4/5 w-full mx-auto pt-3'>
                        <div class={`${props.bg} bg-cover h-full w-full`}>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjCard;