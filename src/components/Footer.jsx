import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import demoVideo from "../assets/demo.mp4"; // Import the video file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="product" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* Embed Local MP4 Video Start */}
      <div className="video-responsive">
        <video width="560" height="315" controls>
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Embed Local MP4 Video End */}

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Other content here */}
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        {/* Other content here */}
      </div>

      {/* Footer Links */}
      <div className="w-full flex justify-center items-center mt-4">
        <p style={{ color: 'white' }}>
          <a href="https://JoyTech.world" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            Built by JediLabs.org
          </a>  <br/>
          <a href="https://github.com/fjkiani/ai-medical-imaging" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            Open Source 
          </a>  <br/>
          Est 2023 - {currentYear}
        </p>
      </div>
    </section>
  );
};

export default Footer;
