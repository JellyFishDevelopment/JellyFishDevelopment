import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
      <div className="grid grid-cols-3 mt-10 content-center gap-3 text-center">

        <div className=''>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="instagram logo"
          />
        </div>

      
        <div className='justify-center items-center text-left pl-36 w-fit'>
          <h6 className='font-bold'>Menu</h6>
          <ul className='text-normal'>
            <li className='pt-2 text-foreground hover:text-white ease-in-out duration-300'>
              <a href="#">Início</a>
            </li>
            <li className='pt-2 text-foreground hover:text-white ease-in-out duration-300'>
              <a href="#">Projetos</a>
            </li>
            <li className='pt-2 text-foreground hover:text-white ease-in-out duration-300'>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <div className='flex-row ml-20'>
          <p className='mb-3 text-center font-bold'>Redes Sociais</p>

            <div className='flex gap-4 justify-center'>

              <a href="https://www.instagram.com/jellyfishdevelopment/" target="_blank">
                  <Image
                      src={instagramLogo}
                      width={40}
                      height={40}
                      alt="instagram logo"
                  />
              </a>
              <a href="https://www.linkedin.com/in/leticiaboza/" target='_blank'>
                  <Image
                      src={linkedinLogo}
                      width={40}
                      height={40}
                      alt="linkedin logo"
                  />
              </a>

              <a href="https://wa.me/5513991063173" target='_blank'>
                  <Image
                      src={whatsappLogo}
                      width={40}
                      height={40}
                      alt="whatsapp logo"
                  />
              </a>
            </div>
          </div>

      </div>  
  
    );
}