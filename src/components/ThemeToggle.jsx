import {Moon ,Sun} from 'lucide-react';
import {useEffect, useState} from 'react';
import {cn} from "@/lib/utils";
export const ThemeToggle=()=>{
     const [isDark,setisDark]=useState(false);
    useEffect(()=>{
        const theme=localStorage.getItem("theme");
        if(theme==="dark"){
            document.documentElement.classList.add('dark');
            setisDark(true);
        }
        else{
            document.documentElement.classList.remove('dark');
            setisDark(false);
        }
    },[])
     const toggletheme=()=>{
        if(isDark){
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme","light");
            setisDark(false);
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme","dark");
            setisDark(true);
        }
     }
    return (<button onClick={toggletheme}
        className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus-outline-hidden"
        )}
    > 
        {" "}
       {isDark ? (<Sun className='h-6 w-6 text-yellow-300'/> ) : (<Moon className='h-6 w-6 text-blue-900'   />)}
    </button>
    );
}