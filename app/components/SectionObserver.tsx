"use client"
import { useEffect } from "react"

type SectionObserverProps = {
  sectionId: string // the string to watch
}

export default function SectionObserver({ sectionId }: SectionObserverProps) {
  useEffect(() => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // remove .active-link from all nav links
            document.querySelectorAll(".nav-link").forEach((el) => {
              el.classList.remove("active-link")
            })

            // add .active-link to the correct nav link
            const targetLink = document.querySelector(`.${sectionId}-link`)
            if (targetLink) {
              targetLink.classList.add("active-link")
            }
          }
        })
      },
      {
        root: null,
        rootMargin: "0px 0px -200px 0px", // subtract 200px from bottom
        threshold: 0,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [sectionId])

  return null
}
