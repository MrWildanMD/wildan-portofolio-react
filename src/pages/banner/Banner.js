import React from 'react';
import Lottie from 'lottie-react';
import Typewriter from 'typewriter-effect';
import devAnimation from './../../assets/banner/99312-developer-skills.json';

function Banner() {
  return (
    <div className='bg-base-200 p-10' id='#home'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3'>
        <div className='w-[300px] lg:w-full'>
          <Lottie loop={true} autoplay={true} animationData={devAnimation}></Lottie>
        </div>
        <div className='w-[300px] lg:w-full flex flex-col justify-center items-center'>
          <h1 className='lg:text-5xl text-secondary text-center font-bold'>
            <Typewriter
              options={{
                strings: ['Hello 👋', 'I am Wildan Mauluddana', 'A Fullstack Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className='py-6 lg:text-lg text-sm text-center'>
            I am a fullstack developer with a strong background in both front-end and back-end
            technologies. I have experience building dynamic and responsive websites and web
            applications, and also skilled in some languages such as Java, Kotlin, Dart, Javascript,
            C++, and Python. In addition to my technical expertise, I am a problem-solver and team
            player, able to work effectively with others to design and develop successful projects.
            I always looking to learn and expand his skills, and always excited to take on new
            challenges in the field of fullstack development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
