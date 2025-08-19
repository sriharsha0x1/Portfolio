import {ArrowDown} from "lucide-react";
export const HeroSection=()=>{
    return(
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm Sri </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1 ">Harsha</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Bhoomandla</span>
                        
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                           I'm a passionate computer science student and open-source contributor with experience in full-stack development and problem-solving. Skilled in C++, JavaScript, React, Node.js, and MongoDB, I enjoy building impactful projects and contributing to the tech community. Currently pursuing my B.Tech in Computer Science (Cyber Security) at CVR College of Engineering, I aim to create secure and scalable solutions that make a difference!
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">View Projects </a>
                    </div>

                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary " />
                </div>
            </div>
        </section>
    )
}