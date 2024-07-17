import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsYoutube,
} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-2 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='font-serif whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 font-serif py-1 bg-gradient-to-r from-pink-200 via-indigo-900 to-black rounded-lg text-white'>
                cyber
              </span>
              Tailor
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title
                className='underline font-extrabold text-lg'
                title='Quick Link'
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://cyberfashion.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  CyberTailor Learn
                </Footer.Link>
                <Footer.Link
                  href='/https://cyberfashion.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  cyberTailor Market
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className='underline font-extrabold '
                title='Join us'
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/sahandghavidel'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Whatsapp
                </Footer.Link>
                <Footer.Link href='#'>Telegram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className='underline font-extrabold '
                title='Legal'
              />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex text-center sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by='eastech'
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6  sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
