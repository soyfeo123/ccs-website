import React from 'react';
import styles from './../modular_css/layout.module.css';
import { Link, Outlet } from 'react-router-dom';
import ccsIcon from './../img/ccsicon.png';
import { Divider } from './common';

function TopbarItem(props){
    return (
        <Link to={props.link} className={`${styles.baritem} ${props.bold ? styles.baritem_bold : ""}`}>{props.children}</Link>
    )
}

function Layout(props){
    return (
        <div className={styles.flexcontainer}>
            <div className={styles.topbar}>
                <TopbarItem link="/" bold={true}><img src={ccsIcon} style={{width: "3em", height: "3em", marginRight: "10px"}}></img>Cinero Creator Suite</TopbarItem>
                <TopbarItem link="/about">About Us</TopbarItem>
                <TopbarItem link="/download-ccs">Download CCS</TopbarItem>
                <TopbarItem link="/app/main">Dashboard</TopbarItem>
            </div>
            <div className={styles.pagecontainer}>
                <Outlet />
                {props.children}
                <Divider></Divider>
            </div>
        </div>
    );
}

export default Layout;