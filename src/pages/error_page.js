import { CommonButton } from "../ui_elements/common";
import styles from "../modular_css/errorpage.module.css"
import globalStyle from "../modular_css/global.module.css";

export default function ErrorPage(){
    return(
        <div className={`${styles.container} ${globalStyle.flyIn}`}>
        <h1>Page Not Found</h1>
        <p>The URL is invalid. The page may have been moved or removed, or simply you typed in gibberish!</p>
        <p>I personally think that you just typed in gibberish.</p>
        <CommonButton link="/">Go back to Home</CommonButton>
        </div>
    )
}