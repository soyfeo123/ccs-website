import { CommonButtonMain } from "../ui_elements/common";
import style from "./../modular_css/download_ccs.module.css";
import globalStyle from "./../modular_css/global.module.css";
import logo from "./../img/ccsicon.png"

function DownloadPage(){
    return (
        <div className={`${globalStyle.flyIn} ${style.mainContainer}`}>
            <div className={style.ccsLogoContainer}>
                <img src={logo} alt="Cinero Creator Suite" className={style.logo}></img>
            </div>
            <div className={style.downloadContainer}>
            <h1>Download Cinero Creator Suite</h1>
            <p style={{marginBottom: "40px", marginTop: "10px"}}>Download CCS now and start making masterpieces--no strings attached.</p>
            <CommonButtonMain link="https://google.com"><i class="fa-solid fa-download"></i> Download</CommonButtonMain>
            </div>
        </div>
    )
}

export default DownloadPage;