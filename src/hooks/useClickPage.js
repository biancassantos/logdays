import { useRef, useEffect } from "react"

// clicks a link automatically and opens a page when the app loads

const useClickPage = () => {
  const pageLinkRef = useRef(null)

  useEffect(() => {
    pageLinkRef.current.click()
  }, [])

  return pageLinkRef
}

export default useClickPage