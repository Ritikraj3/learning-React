import { useEffect, useState } from "react";

export function useWindowSize () {
    const [windowSize, SetWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      useEffect(() => {
        window.addEventListener('resize', () => {
          SetWindowSize({width: window.innerWidth,
            height: window.innerHeight,}, [])
        })
      }, [])

      return windowSize
}