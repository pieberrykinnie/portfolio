import React from 'react';
import ItemLayout from './ItemLayout';

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
          <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
            Architect of Enchantment
          </h2>
          <p className='font-light text-xs sm:text-sm md:text-base'>
            I&#039;m Peter, a second-year Computer Science Honours student minoring in Mathematics and Film Studies at the University of Manitoba! Long before attending university, I practiced web and game development and it drove me to where I am today. Aside from my software experience, I also have research experience in theoretical computer science and computer science education, and I&#039;ll be researching machine learning applications in computer vision. I love to build things and better myself as a student, developer, researcher and teacher. I hope one day I can inspire you to work your hardest and find your passion in technology!
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            &gt;4.2 <sub className="font-semibold text-base">GPA</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
          <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
            3+ <sub className="font-semibold text-base">fields of experience</sub>
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs?username=pieberrykinnie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="pieberrykinnie" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-8 !p-0'}>
          <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=pieberrykinnie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="pieberrykinnie" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={'col-span-full'}>
          <img className='w-full h-auto' src="https://skillicons.dev/icons?i=nextjs,react,astro,flask,tailwind,bootstrap,express,nodejs,ts,js,html,css,py,pytorch,opencv,tensorflow,r,java,c,cpp,godot,gamemakerstudio,git,github,bash,cmake,yarn,linux,ubuntu,neovim,vscode,latex,md,pr" alt="pieberrykinnie" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <img src="https://github-readme-streak-stats.herokuapp.com?user=pieberrykinnie&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="pieberrykinnie" loading="lazy" />
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <img src="https://github-readme-stats.vercel.app/api/pin/?username=pieberrykinnie&repo=svd-image-compression&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" loading="lazy" />
        </ItemLayout>
      </div>
    </section>
  );
}

export default AboutDetails;
