import NavBar from '../NavBar';

function More() {
    return(
        <div className='main'>
            <NavBar />
            <div class='container mx-auto w-3/4 pt-16'>
                <h1 class='font-mono font-extrabold text-6xl py-5'>More!</h1>
                <p class='font-mono text-base'>Photography. More photos <a target='_blank' rel='noopener noreferrer' href='https://vsco.co/sameerphotography/gallery'><u>here</u></a>. Instagram <a target='_blank' rel='noopener noreferrer' href="https://instagram.com/shotsbysameer"><u>here</u></a>. WIP website <a target='_blank' rel='noopener noreferrer' href="https://tender-rosalind-229394.netlify.app/"><u>here</u></a>.</p>
                <div class='flex space-x-4 pt-4'>
                    <div class='w-1/3 h-96 bg-eiffel bg-cover'></div>
                    <div class='w-1/3 h-96 bg-basilica bg-cover'></div>
                    <div class='w-1/3 h-96 bg-municipal bg-cover'></div>
                </div>
                <div class='flex space-x-4 pt-4'>
                    <div class='w-1/3 h-96 bg-parthenon bg-cover'></div>
                    <div class='w-1/3 h-96 bg-ferris bg-cover'></div>
                    <div class='w-1/3 h-96 bg-sacre bg-cover'></div>
                </div>

                <p class='font-mono text-base pt-8'>Startups.</p>
                <p class='font-mono text-base pt-8'>Music.</p>

            </div>
        </div>
    )

}

export default More;