import React from 'react';
import College from '@/assets/farookcollege.png';
import Pattern from '@/assets/bg.png';
import Image1 from '@/assets/ruby.png';
import Image2 from '@/assets/knowledgeCommon.png';
import Image3 from '@/assets/citizenScience.png';
import Arrow from '@/assets/rightArrow.png';
import Card from '@/components/LandingPage/Card'
const Home = () => {
  return (
    <div>
      <div className="w-full h-[100px] bg-white flex justify-start items-center">
        <div className='w-[300px] h-[90px] flex justify-center items-center'>
          <img className='ml-[30px]' src={College} alt="College Logo" />
        </div>
      </div>
      <div className='w-full h-[350px] bg-red-800 flex justify-center'
      style={{ backgroundImage: `url(${Pattern})`,backgroundSize: 'cover'}}>
        <div className='w-[900px] h-[100px] bg-white font-bold  flex justify-center items-center mt-[100px] rounded-[18px] text-[24px] text-red-800'>Open Science Press</div>
      </div>
      <div className="w-full h-[500px] bg-[#F9FAFB] flex justify-center">
        <div className="w-[900px] h-[300px] mt-[-80px] flex justify-between">
        <Card
        image={Image1}
        title="RUBY OA PUBLISHING"
        paragraph="Discover the future of scholarly communication with Ruby Open Access Publishing."
        />
          <Card
          image={Image2}
          title="KNOWLEDGE COMMON"
          paragraph="Join us in revolutionising academic scholarship with accessible, efficient, and impactful institutional repositories. Let’s elevate your institution’s research presence together."  
          />
          <Card
          image={Image3}
          title="CITIZEN SCIENCE"
          paragraph="Join us in shaping the future of science communication and fostering collaboration between researchers and the public. Let’s make science accessible to all!"  
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
