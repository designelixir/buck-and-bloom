"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function HeroSunburst() {
  const sunburstContainerRef = useRef<HTMLDivElement | null>(null)
  const sunburstRef = useRef<HTMLDivElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const hasRun = sessionStorage.getItem("heroSunburstDone")

    // if it already ran this visit, skip animation and hide container
    if (hasRun) {
      if (sunburstContainerRef.current) {
        sunburstContainerRef.current.style.display = "none"
      }
      return
    }

    // ✅ Force scroll to top when HeroSunburst mounts
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })

    const sunburstContainer = sunburstContainerRef.current
    const sunburst = sunburstRef.current
    const logo = logoRef.current
    if (!sunburst || !logo || !sunburstContainer) return

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("heroSunburstDone", "true") // mark as complete
      }
    })

    // 1. Sunburst fades in
    tl.fromTo(sunburst, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.25 })

    // 2. Logo fades in and grows
    tl.fromTo(logo, { opacity: 0, width: 0 }, { opacity: 1, width: "300px", duration: 1.5 }, "<0.25")

    // 3. Sunburst shrinks + fades out
    tl.fromTo(sunburst, { scale: 1, opacity: 1 }, { scale: 0, opacity: 0, duration: 1 }, "<2")

    // 4. Logo scales down
    tl.fromTo(logo, { height: "60%" }, { height: "150px", duration: 0.5 }, "<0")

    // 5. Container shrinks
    tl.fromTo(
      sunburstContainer,
      { height: "100vh", minHeight: "100vh", maxHeight: "100vh" },
      { top: 8, height: "150px", minHeight: "unset", maxHeight: "unset", duration: 0.5 },
      "<0"
    )

    // 6. Remove container
    tl.to(sunburstContainer, { display: "none", opacity: 0, width: 0, height: 0, duration: 0, delay: 1 }, ">")

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div id="sunburstContainer" className="flex-center-center" ref={sunburstContainerRef}>
      <div className="sunburst flex-center-center" ref={sunburstRef}></div>
      <div className="sunburst-logo" ref={logoRef}></div>
      <style jsx>{`
    
        #sunburstContainer {min-width: 100vw; position: fixed; top: 0; left: 0; z-index: 101; width: 100%; overflow: clip; max-width: 100vw; min-height: 100vh; height: 100vh; max-height: 100vh;}
        .sunburst {width: 100%; position: absolute; max-width: 800px; aspect-ratio: 1; background-image: url('/sunburst.svg'); background-repeat: no-repeat; background-position: center; background-size: contain;}
        .sunburst-logo {position: absolute; height: 60%; aspect-ratio: 1; background-image: url('/Buck&Bloom-TileLogo.png'); background-repeat: no-repeat; background-position: center; background-size: contain;}
        @media only screen and (max-width: 600px) {.sunburst {background-size: 800px auto!important; height: 99vh}}
      `}</style>
    </div>
  )
}
