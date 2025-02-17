import React from "react";
import SocialIcons1 from "../assets/SocialIcons1.png";
import SocialIcons2 from "../assets/SocialIcons2.png";
import SocialIcons3 from "../assets/SocialIcons3.png";
import SocialIcons4 from "../assets/SocialIcons4.png";
import SocialIcons5 from "../assets/SocialIcons5.png";

const SocialIcons = () => {
  return (
    <section className="flex flex-col items-center py-10 bg-black text-white">
      <p className="text-lg font-semibold mb-4">AdTask Ai works with</p>

      {/* Social Icons */}
      <div className="flex space-x-8">
        <img src={SocialIcons1} alt="Google Ads" className="w-[112px] h-[107px] mt-[21px]" />
        <img src={SocialIcons2} alt="TikTok" className="w-[112px] h-[107px] mt-[21px]" />
        <img src={SocialIcons3} alt="Meta" className="w-[112px] h-[107px] mt-[21px]" />
        <img src={SocialIcons4} alt="LinkedIn" className="w-[112px] h-[107px] mt-[21px]" />
        <img src={SocialIcons5} alt="Amazon" className="w-[112px] h-[107px] mt-[21px]" />
      </div>
    </section>
  );
};

export default SocialIcons;