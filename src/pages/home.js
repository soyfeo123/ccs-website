import { useState, useEffect } from "react";
import style from "./../modular_css/home.module.css";
import globalStyle from "./../modular_css/global.module.css";
import ccsIcon from "./../img/ccsicon.png"
import { CommonButton, CommonButtonMain, Divider } from "../ui_elements/common";

const TypingEffect = ({ texts, typingSpeed = 25, pauseDuration = 5000 }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
  
    useEffect(() => {
      let timeout;
      if (isTyping) {
        if (charIndex < texts[currentIndex].length) {
          timeout = setTimeout(() => {
            setCurrentText((prev) => prev + texts[currentIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsTyping(false), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          timeout = setTimeout(() => {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          }, typingSpeed / 2); // Faster erasing
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }
      }
  
      return () => clearTimeout(timeout);
    }, [charIndex, isTyping, texts, currentIndex, typingSpeed, pauseDuration]);
  
    return <>{currentText}</>;
  };

function Home(props){
    return(
        <div className={globalStyle.flyIn}>
            <div className={style.bragging_about_self}>
                <div className={style.left_flex}>
                  <img src={ccsIcon} alt="The icon would go here, but I guess he was lazy today."></img>
                </div>
                <div className={style.flex}>
                    <h1><span style={{color: "rgb(235, 64, 52)"}}>Cinero</span> <span style={{color: "rgb(52, 235, 55)"}}>Creator</span> <span style={{color: "rgb(52, 183, 235)"}}>Suite</span> is...</h1>
                    <h1 className={style.typewriter}><TypingEffect texts={["a dream for Roblox filmmakers.",
                      "a new way to tell stories.",
                      "the bridge from movie to Roblox.",
                      "the new way to make Roblox movies."]}></TypingEffect></h1>
                      <p>The ultimate toolkit for creating professional Roblox movies—fast, easy, and no coding required.</p>
                      <CommonButtonMain link="/download-ccs"><i class="fa-solid fa-download"></i> Download Now</CommonButtonMain>
                </div>
            </div>
            <div className={style.create_stunning}>
               <h1>Create Stunning Roblox Movies with Ease</h1>
               <p>Cinero Creator Suite is your one-stop solution for simple and powerful movie editing, effortless publishing, and seemless transition integration into the Roblox platform.</p>
               <p>A complete toolkit for creating high-quality Roblox movies. <b>Zero</b> coding required.</p>
            </div>
            <Divider/>
            <div className={style.why_choose}>
              <h2>Why Choose CCS?</h2>
              <ul>
                <li><b>🎥 Intuitive Editing</b> - Edit movies with a simple, easy-to-use, and powerful interface, ideal for Roblox movie creation.</li>
                <li><b>⚡ Efficient Export</b> - Gone are the days of writing the code by hand! PaLito Solute automatically exports your movies to direct code.</li>
                <li><b>📂 Tidy Projects</b> - Keep your projects tidy with movies being stored in 1 file.</li>
                <li><b>📩 Directly to Cinero</b> - The export can directly be imported into Cinero, which allow for quick releases.*</li>
                <li><b>✨ Friendly Community</b> - We have a friendly* community who is ready to help you at any moment.</li>
                
              </ul>
            </div>
            <Divider/>
            {/*<div className={style.pricingSection}>
              <h1>Pricing</h1>
              <p>Purchase individual software, or get the Creator plan and get all-in-one with future software included.</p>
              <div className={style.pricesContainer}>
                <h2>Free</h2>
                <p>Get Cinero Creator Suite for free. Purchase only the software you need. Perfect for indie creators.</p>
                <CommonButton link="/download-ccs">0 Robux</CommonButton>
                <h2>Creator</h2>
                <p>Get Cinero Creator Suite and every single software at once, including future ones. Perfect for Roblox movie studios.</p>
                <h4>500 Robux {"("}one-time purchase{")"}</h4>
              </div>
            </div><Divider/>*/}
            <div className={style.faq}>
              <h2>Frequently Asked Questions</h2>
              <h3>Q: What tools are included in Cinero Creator Suite {"(CCS)"}?</h3>
              <p>A: Right now, we have PaLito Solute, the ultimate video editor for Roblox films. Although, more are to come, like PaLito Imprint, an all-in-one overlay editor for frames which can be integrated into Solute easily. </p>
              <h3>Q: Is CCS free?</h3>
              <p>A: Yes! Every part of the toolkit and the toolkit itself is free {"(as of 17/Nov/2024)"}.</p>
              <h3>Q: Can I use CCS to create non-Roblox movies?</h3>
              <p>A: If what you mean by "Non-Roblox Movies" is movies without the Roblox-style to be published on Roblox, yes, you can. However, if you're going to make non-Roblox movies to be published outside of Roblox, I recommend other software, like DaVinci Resolve, since this toolkit is specially designed for Roblox.</p>
              <h3>Q: Who is CCS designed for?</h3>
              <p>Any passionate creator who wants to make Roblox movies and see them on the Big Screen {"(on Roblox. Would be awesome if it were a real Big Screen though.)"}.</p>
              <h3>Q: What are the system requirements for CCS?</h3>
              <p>You can check them out on the Download page.</p>
            </div>
            <Divider/>
            <div className={style.ctaSection}>
              <h1>Ready to Make Some Roblox Movies?</h1>
              <p>Get started now and make Roblox movies like a pro--<b>no strings attached.</b></p>
              <CommonButtonMain link="/download-ccs"><i class="fa-solid fa-download"></i> Download CCS</CommonButtonMain>
              <Divider/>
              <h2>Need Help?</h2>
              <p>Join our community!</p>
              <CommonButton link="https://discord.gg/jahGejNVBs"><i class="fa-brands fa-discord"></i> Discord Community</CommonButton>
            </div>
        </div>
    )
}

export default Home;