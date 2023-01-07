import React from 'react';
import myPhoto from './../../assets/about/me.png';

function About() {
  return (
    <div className='bg-base-200 p-10' id='#about'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3'>
        <div className='w-[300px] lg:w-full'>
          <img src={myPhoto} alt='my photo' className='rounded' />
        </div>
        <div className='w-[300px] lg:w-full flex flex-col justify-center items-center'>
          <h1 className='lg:text-5xl text-secondary text-center font-bold'></h1>
          <p className='lg:text-lg text-sm'>
            Hi! My name is Wildan and I am a full-stack developer currently studying Informatic
            Management at Polytechnic State of Malang. I live in Kab. Tulungagung Ds.Karangrejo. I
            have a strong foundation in computer science and have experience in both front-end and
            back-end development. I am proficient in a variety of programming languages. In my free
            time, I enjoy staying up-to-date on the latest technology trends and expanding my skill
            set through online courses and self-study. I am a hard worker and am always looking for
            new opportunities to learn and grow as a developer. I am excited to explore potential
            job opportunities and make a positive impact as a member of a development team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
