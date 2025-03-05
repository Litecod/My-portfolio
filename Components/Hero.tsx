"use client"


import { useTheme } from "next-themes";


const Hero = () => {

    const { theme } = useTheme();
    return (
        <div className=" max-w-[75rem] mx-auto text-center">
            <h4>Hi,</h4>
            <h1 className="text-[2rem] md:text-[4rem] font-bold">I'm Light Samuel</h1>
            <h1 className="text-[2rem] md:text-[4rem] font-bold" >Frontend Developer</h1>
            <p className={`${theme === "dark" ? "text-[#ffffffc4]" : "text-[#000000c4]"} mt-[1rem] md:mt-[2rem]`}>I am a <span className="text-[#00c400f2]">passionate web developer</span> dedicated to <span className="text-[#00a900f2]">crafting exceptional digital experiences</span>. With a strong foundation in <span className="text-[#00a900f2]">front-end developnment</span>, I continuously seek to <span className="text-[#00a900f2]">learn new technologies</span> and refine my <span className="text-[#00a900f2]">skills</span>. As a <span className="text-[#00a900f2]">creative</span> developer, I thrive on <span className="text-[#00a900f2]">collaboration</span>, working with others to build <span className="text-[#00a900f2]">innovative</span> and <span className="text-[#00a900f2]">impactful solutions</span></p>
        </div>
    )
}

export default Hero