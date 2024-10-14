import LogoHeader from '@/components/Knowledgecommon/LogoHeader';
import Pattern from '@/assets/bg.png';
import Author1 from '@/assets/author1.png';
import CitizenScience from '@/assets/citizenScienceLogo.png';
import Instagram from '@/assets/instagram.svg';
import Facebook from '@/assets/facebook.svg';
import Twitter from '@/assets/twitterx.svg';
import Settings from '@/assets/Settingsdot.svg';
import ArticleCard from '@/components/Knowledgecommon/ArticleCard';
import Vector from '@/assets/Vector.svg';
import MetricsScore from '@/components/Knowledgecommon/MetricsScore';
import SocialMediaIcons from '@/components/Knowledgecommon/SocialMediaIcons';
import { useNavigate } from 'react-router-dom';
const AuthorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LogoHeader />
      <div
        className="flex h-[200px] w-full flex-col items-center justify-center bg-red-800"
        style={{ backgroundImage: `url(${Pattern})`, backgroundSize: 'cover' }}
      >
        <img
          className="h-[74px] w-[74px] rounded-[37px]"
          src={Author1}
          alt=""
        />
        <p className="h-[18px] w-auto text-[14px] font-semibold text-[#fff]">
          Dr. Bonnie Barstow
        </p>
        <p className="h-[18px] w-auto text-[14px] font-normal text-[#fff]">
          @rafsal.n
        </p>
      </div>
      <div className="flex h-[145px] w-full items-center justify-center">
        <div className="mt-[-40px] flex h-full w-[441px] flex-col items-end justify-between">
          <div className="flex h-[69px] w-full">
            <div className="flex h-[69px] w-[269px] flex-col items-start justify-center rounded-[18px] bg-white px-[10px]">
              <p className="text-[12px] font-semibold text-[#545454]">
                Workspace (company / institute)
              </p>
              <p className="text-[12px] font-bold text-[#0B0B0B]">
                Farook College
              </p>
            </div>
            <div className="ml-[5px] flex h-[69px] w-[165px] flex-col items-start justify-center rounded-[18px] bg-white px-[10px]">
              <p className="text-[12px] font-semibold text-[#545454]">
                Position
              </p>
              <p className="text-[12px] font-bold text-[#0B0B0B]">Student</p>
            </div>
          </div>
          <div className="h-[69px] w-[441px]">
            <div className="flex h-[69px] w-full items-center justify-center rounded-[18px] bg-white">
              <div className="flex h-[37px] w-[387px] justify-between">
                <div className="item-center h-[36px] w-[170px] flex justify-center items-center overflow-hidden rounded-[18px] border-[2px]">
                  <img
                    className="h-[24px] w-[69px]"
                    src={CitizenScience}
                    alt=""
                  />
                  <p className="h-full w-[110px] text-[12px] font-bold  flex items-center justify-center ml-[-25px]">
                    Citizen Science
                  </p>
                </div>
                <SocialMediaIcons Images={Instagram} />
                <SocialMediaIcons Images={Facebook} />
                <SocialMediaIcons Images={Twitter} />
                <SocialMediaIcons Images={Settings} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[20px] w-full items-center justify-center">
        <p className="text-[15px] font-semibold text-[#776968]">
          Research Activity
        </p>
      </div>
      <div className="flex h-[600px] w-full justify-end">
        <div className="h-full w-[960px]">
          <div className="mt-[10px] flex h-[600px] w-full items-start justify-center">
            <ArticleCard
              ArticleTitle="Innovative Strategies for Enhancing Business Growth in the Digital Age"
              ArticleTopic="Hellenic Plant Protection Journal"
              Category="Journal article"
              PublishedDate="01 Jan 2022"
              AuthorImage={Author1}
              AuthorName="A. Majeed"
              onClick={() => navigate('/article')}
            />
          </div>
        </div>
        <div className="h-full w-[340px]">
          <div className="ml-[10px] flex h-[375px] w-[323px] flex-col items-center justify-between rounded-[27px] bg-white">
            <div className="mt-[20px] flex h-[20px] w-full items-center justify-center">
              <div className="flex h-full w-[270px] justify-between">
                <p className="text-[12px] font-semibold text-[#000]">
                  Royalty Score
                </p>
                <img src={Vector} alt="" />
              </div>
            </div>
            <div className="flex h-[100px] w-full flex-col">
              <div className="relative flex h-[75px] w-full items-center justify-center before:absolute before:h-[71px] before:w-full before:border-l-[4px] before:border-red-500 before:content-['']">
                <p className="flex h-full w-full items-center justify-center text-[64px] font-bold">
                  384
                </p>
              </div>
              <p className="flex h-[20px] w-full items-center justify-center">
                Score
              </p>
            </div>
            <div className="mb-[20px] flex h-[120px] w-full flex-col items-center justify-center">
              <MetricsScore Title="Citation" Score="22" />
              <MetricsScore Title="Peer Reviews" Score="12" />
              <MetricsScore Title="Citizen Score" Score="07" />
              <MetricsScore Title="Download" Score="22" />
              <MetricsScore Title="Alt metrics" Score="13" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
