import React from 'react';
import Projects from './Projects';

function Portofolio() {
  const projects = [
    {
      id: 1,
      projectImage:
        'https://camo.githubusercontent.com/a65470ee63d5bde992f942e489b990e255d9821de5a0666f67a1f28205e89cc9/68747470733a2f2f692e696d6775722e636f6d2f726d4b444778472e706e67',
      projectName: 'Offset Finder',
      projectDesc: 'I am using DearPyGui as a GUI and string matching algorithm as a main function',
      projectLink: 'https://github.com/MrWildanMD/offset-finder',
    },
    {
      id: 2,
      projectImage:
        'https://camo.githubusercontent.com/09824c8d0fae2ba1b20aadbe62aa8bfe970a76ddd795d9f487df53af6cf23670/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f373139462d72755756474d7934427a3574686b715363394e4e2d37654830765f614e6f483539665f65536d72484f3474507378486f426a6170333368673672622d773d773232302d7277',
      projectName: 'NU Coin',
      projectDesc: 'I am using Laravel as a PHP Framework and Bootstrap as a UI Component',
      projectLink: 'https://github.com/MrWildanMD/NUCOIN',
    },
    {
      id: 3,
      projectImage:
        'https://scontent.fmlg2-1.fna.fbcdn.net/v/t39.30808-6/270428353_4699900080092480_5342193126781271360_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFQgM6N04b8WBAes0qFIQxDcbhAeVyd7qZxuEB5XJ3uptV7VbgQ6mz6Mp9fhY9tnxCYiSyoBFBvJZxRe86hAsnD&_nc_ohc=3sufCVv6Sf8AX8TM97W&_nc_zt=23&_nc_ht=scontent.fmlg2-1.fna&oh=00_AfCi-9EqRzcDwR1qkXoWV4xhihPwZvkXgocNiHOUWYzKBg&oe=63BE16E5',
      projectName: 'Auto Coloring',
      projectDesc: 'I am using Hotpot AI and Selenium to automate the process',
      projectLink: 'https://github.com/MrWildanMD/autoclr',
    },
    {
      id: 4,
      projectImage:
        'https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/27/06/a1/2706a109-2033-bcaa-b976-bb33589893fe/AppIcon-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png',
      projectName: 'E-KTP Reader',
      projectDesc:
        'I am using Flutter as a Mobile App Framework and NFC Technologies as a E-KTP Chip Reader',
      projectLink: 'https://github.com/MrWildanMD/ektp_reader',
    },
    {
      id: 5,
      projectImage:
        'https://w7.pngwing.com/pngs/808/569/png-transparent-ram-computer-memory-computer-hardware-ram-text-computer-logo.png',
      projectName: 'Memory Dumper',
      projectDesc: 'I am using Kotlin native android and C++ to dump memory process',
      projectLink: 'https://github.com/MrWildanMD/MemDumper',
    },
    {
      id: 6,
      projectImage: 'https://miro.medium.com/max/850/0*fGgalC4K6eoao_Fx.png',
      projectName: 'Springboot REST API Sample',
      projectDesc: 'I am using Java Springboot to deliver REST API Services',
      projectLink: 'https://github.com/MrWildanMD/SpringCRUDRestExample',
    },
    {
      id: 7,
      projectImage: 'https://blk.pangkepkab.go.id/photo/logo.png',
      projectName: 'BLK Pangkep',
      projectDesc: 'I am using Java as a Mobile App Native',
      projectLink: 'https://github.com/MrWildanMD/BLKPangkep',
    },
    {
      id: 8,
      projectImage: 'https://www.freecodecamp.org/news/content/images/2021/10/golang.png',
      projectName: 'Go-Skeleton',
      projectDesc: 'I am using Golang as a Microservice provider',
      projectLink: 'https://github.com/MrWildanMD/Go-Skeleton',
    },
    {
      id: 9,
      projectImage:
        'https://cdn6.f-cdn.com/contestentries/885370/21524268/582585caad7bf_thumb900.jpg',
      projectName: 'ShopeeAutofy',
      projectDesc: 'I am using Python and Selenium webdriver to automate flash sale process',
      projectLink: 'https://github.com/MrWildanMD/ShopeeAutofy',
    },
  ];
  return (
    <div id='#projects'>
      <h1 className='text-lg lg:text-3x1 font-bold text-secondary text-center pt-10'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1'>
        {projects.map((project, i) => (
          <Projects key={i} project={project}></Projects>
        ))}
      </div>
    </div>
  );
}

export default Portofolio;
