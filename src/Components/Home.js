import React, {useState, useEffect} from 'react'
import RenderContent from './RenderContent';
// import './home.scss'

const Home = () => {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return ()=> window.removeEventListener("scroll", handleScroll)

  },[])

  return (<>
    <div className="paralx">
      <div
        className="paralx_background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />

      <div
        className="paralx_background-triangles"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      />
      <div className="paralx_content">
        <RenderContent name={"Kishore"} company={"Sacrolabs Pvt."} designation={"Trainee Engineer"}/>
      </div>
      </div>
      </>
  )
}

export default Home