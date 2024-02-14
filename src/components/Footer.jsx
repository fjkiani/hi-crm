import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    {/* Embed YouTube Video Start */}
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/62FYX-CFVV4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    {/* Embed YouTube Video End */}
    
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      ...
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      ...
    </div>
  </section>
);

export default Footer;
