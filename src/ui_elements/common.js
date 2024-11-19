import { Link } from 'react-router-dom';
import commonStyles from './../modular_css/common_ui.module.css';

function CommonButton(props){
    return(
        <Link to={props.link} className={commonStyles.button}>{props.children}</Link>
    )
}

function CommonButtonMain(props){
    return(
        <Link to={props.link} className={`${commonStyles.button} ${commonStyles.foreground}`}>{props.children}</Link>
    )
}

function Divider(props){
    return(
        <div style={{width: "100%", height: "1px", backgroundColor: "var(--backcolor)", marginTop: "30px", marginBottom: "30px"}}></div>
    )
}

export {CommonButton, Divider, CommonButtonMain}