"use client"


import { useTheme } from "next-themes"
import { useState } from "react"


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [toggle, setToggle] = useState(true)


    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        setToggle(prev => !prev)
    }


    return (
            <div className="relative w-[3rem] h-[1.7rem] bg-[#acacac] rounded-full p-[0.3rem] duration-500" onClick={() => handleClick()}>
                <div className={`w-[1.1rem] h-[1.1rem] bg-[#fff] rounded-full duration-500  ${toggle ? "float-left" : "float-right"}`}></div>
            </div>
    )
}

export default ThemeToggle
