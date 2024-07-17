import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div
      className='flex bg-fuchsia-50 
      shadow mx-6 mt-5 text-xs flex-col border
       border-blue-950

     justify-center items-center  text-center'
    >
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='my-2 dark:text-black'>
          Want to learn more about tailoring and upgrading your stack?
        </h2>
        <Button
          gradientDuoTone='purpleToPink'
          className='
        font-light mx-10  p-0'
        >
          <a
            className='text-xs'
            href='https://cyberfashion.onrender.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            CyberTailor Online Training
          </a>
        </Button>
        <p className='text-gray-500 dark:text-black my-2'>
          Join the next cohort of likely minded
        </p>
      </div>
    </div>
  );
}
