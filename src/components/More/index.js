import NavBar from '../NavBar';

function More() {
    return(
        <div className='main'>
            <NavBar />
            <div class='container mx-auto w-3/4 pt-16 sm:w-full'>
                <h1 class='font-mono font-extrabold text-6xl py-5 sm:text-center'>More!</h1>
                <p class='font-mono text-base sm:text-center'>Photography. More photos <a target='_blank' rel='noopener noreferrer' href='https://vsco.co/sameerphotography/gallery'><u>here</u></a>. Instagram <a target='_blank' rel='noopener noreferrer' href="https://instagram.com/shotsbysameer"><u>here</u></a>. WIP website <a target='_blank' rel='noopener noreferrer' href="https://tender-rosalind-229394.netlify.app/"><u>here</u></a>.</p>
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

                <p class='font-mono text-base pt-8 sm:text-center'>Startups.</p>
                <p class='font-mono text-base pt-8 sm:text-center'>Music.</p>

            </div>
            <div class='h-12'></div>
        </div>
    )

}

export default More;