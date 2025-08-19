import { ThemeToggle } from "../components/ThemeToggle"
import {StarBackground} from "../components/StarBackground"
import {NavBar} from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"



export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

       {/*Theme toggle*/}
        <ThemeToggle />
        {/*Background*/}
        <StarBackground />
        {/*Navbar*/}
        <NavBar />
        {/*main*/}
        <main>
            <HeroSection />
        </main>

    </div>
}