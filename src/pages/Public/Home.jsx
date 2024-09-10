import React from 'react';
import Pattern from '@/assets/bg.png';
import Image1 from '@/assets/ruby.png';
import Image2 from '@/assets/knowledgeCommon.png';
import Image3 from '@/assets/citizenScience.png';
import Card from '@/components/LandingPage/Card';
import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LogoHeader />
      <div
        className="flex h-[350px] w-full justify-center bg-red-800"
        style={{ backgroundImage: `url(${Pattern})`, backgroundSize: 'cover' }}
      >
        <div className="mt-[100px] flex h-[100px] w-[900px] items-center justify-center rounded-[18px] bg-white text-[24px] font-bold text-red-800">
          Open Science Press
        </div>
      </div>
      <div className="flex h-[500px] w-full justify-center bg-[#F9FAFB]">
        <div className="mt-[-80px] flex h-[300px] w-[900px] justify-between">
          <Card
            image={Image1}
            title="RUBY OA PUBLISHING"
            paragraph="Discover the future of scholarly communication with Ruby Open Access Publishing."
          />
          <Card
            image={Image2}
            title="KNOWLEDGE COMMON"
            paragraph="Join us in revolutionising academic scholarship with accessible, efficient, and impactful institutional repositories. Let’s elevate your institution’s research presence together."
            onClick={() => navigate('/home')}
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
