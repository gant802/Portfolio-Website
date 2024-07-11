import React from "react";
import MyMission from "../Components/myMission";
import MyProjects from "../Components/myProjects";
import BlogComponent from "../Components/blogComponent";
import WhyMe from "../Components/whyWorkWithMe";
import Footer from "../Components/footer";
import 'boxicons'
import { useEffect } from "react";




function Home() {

    //! Example for my final project API
    // useEffect(() => {
    //     fetch('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
    //         headers: { 'X-Api-Key': 'bMxQSkd43Sy3FQYD50efrg==XxNceF4LNlS0s0LS'}
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])


    return (
        <div id="home-container">
            <div id="intro-container">
                <div id="intro-left-side">
                    <img src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg" alt="Picture of me" />
                    <a href="https://www.linkedin.com/in/grant-r-cummings" rel="noopener" target="_blank"><box-icon type='logo' name='linkedin-square'></box-icon></a>
                    <a href="https://medium.com/@grantcummings4429" rel="noopener" target="_blank"><box-icon name='medium' type='logo' ></box-icon></a>
                    <a href="https://github.com/gant802" rel="noopener" target="_blank"><box-icon name='github' type='logo' ></box-icon></a>
                    <a href="https://www.instagram.com/gant802/" rel="noopener" target="_blank"><box-icon type='logo' name='instagram-alt'></box-icon></a>
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