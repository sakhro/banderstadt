import Router from 'next/router'
import { useEffect, useState } from "react"

function useProgressHandler() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onStart = () => setVisible(true)
    const onComplete = () => setVisible(false)

    Router.events.on('routeChangeStart', onStart)
    Router.events.on('routeChangeComplete', onComplete)

    return () => {
      Router.events.off('routeChangeStart', onStart)
      Router.events.off('routeChangeComplete', onComplete)
    }
  }, [])

  return ({
    visible
  })
}

export {
  useProgressHandler
}