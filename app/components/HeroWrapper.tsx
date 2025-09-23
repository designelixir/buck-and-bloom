"use client"
import { useEffect, useState } from "react"
import HeroSunburst from "./HeroSunburst"
import HeroText from "./HeroText"
import SectionObserver from "./SectionObserver"

export default function HeroWrapper() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="hero-wrapper flex-center-center" style={{minHeight: '100vh', minWidth: "100vw"}}>
      <SectionObserver sectionId="hero"></SectionObserver>
      <HeroSunburst />
      {showText && <HeroText />}
    </div>
  )
}
