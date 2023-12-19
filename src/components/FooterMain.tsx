import logo from '../../public/Logo_Polvo.svg'
import Image from 'next/image';
import instagramLogo from '../../public/svg-tec/instagram_logo.svg';
import linkedinLogo from '../../public/svg-tec/linkedin_logo.svg';
import whatsappLogo from '../../public/svg-tec/whatsapplogo.svg';

export function FooterMain(){
    return (
      <div className="grid grid-cols-3 mt-10 content-center">

        <div className='mr-40'>
              <a href="#">
                  <Image 
                      src={logo}
                      width={200}
                      height={200}
                      alt="Picture of a JellyFish"
                  />
              </a>
          </div>

          <div className='grid w-fit content-center gap-3 text-center'>
              <a href="#" className='flex items-center gap-1'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M10.55 2.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 3 19.254v-9.31c0-.663.293-1.292.8-1.72zm1.933 1.147a.75.75 0 0 0-.966 0L4.767 9.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573z"></path></svg>
                  </div>
                  <div>
                    Início
                  </div>
              </a>

              <a href="#" className='flex items-center gap-1'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M30 18H20v6.468a5.022 5.022 0 0 0 2.861 4.52L25 30l2.139-1.013A5.022 5.022 0 0 0 30 24.467zm-5 9.786l-1.283-.607A3.012 3.012 0 0 1 22 24.468V20h6v4.468a3.012 3.012 0 0 1-1.717 2.71zM17 18H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12v-2H5v-5h12zM27 4h-5a2 2 0 0 0-2 2v9h2V6h5v9h2V6a2 2 0 0 0-2-2M15 4H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 13V6h10v7z"></path></svg>
                </div>
                <div>
                  Projetos
                </div>
              </a>

              <a href="#" className='flex items-center gap-1'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"></path></svg>
                </div>
                <div>
                  Contato 
                </div>
              </a>
          </div>

          <div className='flex-row ml-20'>
              <p className='mb-3 text-center font-normal'>Redes Sociais</p>

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