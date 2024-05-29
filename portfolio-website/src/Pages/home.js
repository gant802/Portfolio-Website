import React from "react";
import MyMission from "../Components/myMission";
import MyProjects from "../Components/myProjects";
import BlogComponent from "../Components/blogComponent";
import WhyMe from "../Components/whyWorkWithMe";
import Footer from "../Components/footer";

function Home() {
    return (
        <div>
            <div>This is the home page</div>
            <MyMission />
            <MyProjects />
            <BlogComponent />
            <WhyMe />
            <Footer />
        </div>
    )
}


export default Home