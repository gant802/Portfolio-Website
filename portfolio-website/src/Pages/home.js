import React from "react";
import MyMission from "../Components/myMission";
import MyProjects from "../Components/myProjects";
import BlogComponent from "../Components/blogComponent";
import WhyMe from "../Components/whyWorkWithMe";
import Footer from "../Components/footer";
import 'boxicons'




function Home() {
    

    return (
        <div id="home-container"> 
            <div id="intro-container">
                <div id="intro-left-side">
                   <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="Picture of me"/>
                   <box-icon type='logo' name='linkedin-square'></box-icon>
                   <box-icon name='medium' type='logo' ></box-icon>
                   <box-icon name='github' type='logo' ></box-icon>
                   <box-icon type='logo' name='instagram-alt'></box-icon>
                </div>
                <div id="intro-right-side">
                    <h2>Write some text here to briefly introduce me</h2>
                    <p>Write a brief paragraph about me and what I do</p>
                </div>
            </div>
            <MyMission />
            <MyProjects />
            <BlogComponent />
            <WhyMe />
            <Footer />
        </div>
    )
}


export default Home