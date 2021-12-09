import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ExternalLinkIcon, ChatIcon, ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'


function upvote (setPostScore) {
  setPostScore = setPostScore + 1git
  setPostScore.log(setPostScore)
}
 //some
function Feed( {postscore, setPostScore} ) {
  const [count, setCount] = useState(0);
  const [open, expandPost] = useState(false);

  return (
    <div className="bg-bgBlue w-screen h-screen">
      <div className="text-white"> woah</div>

      <div className="bg-cardBlue m-10 rounded-lg max-w-3xl drop-shadow-2xl flex drop-shadow" onClick={() => expandPost(open => !open)}>

        <div className="m-4 flex flex-col items-center">
          <ChevronUpIcon w={8} h={8} color='white' onClick={() => setCount(count + 1)}/>
          <div className="text-white text-xs">{count}</div>
          <ChevronDownIcon w={8} h={8} color='white' onClick={() => setCount(count + 1)}/>
        </div>

        <div className="bg-white my-4 w-64 h-32 rounded-lg"></div>

        <div className="m-4">
          <div className="text-white font-semibold text-xl max-w-xl">Some Descriptive Title (maybe clickbait)</div>
          <p className="text-white font-normal text-sm max-w-lg h-16 overflow-hidden mt-1">tex tex tex tx tex t et xet xettex tet xtet xet te xet xet xete txetxteet xetx tex tex te xtex et xet extx et etx t etx et ext exte xt te xte xete t xetx et ext</p>
          <div className="flex mt-4">
            <div className="bg-white w-4 h-4 rounded-full"></div>
            <div className="text-white mx-2 font-normal text-xs">some username</div>
          </div>
        </div>

        <div>
          <div className="m-4 flex flex-col items-center">
              <ChatIcon w={5} h={5} color='white'/> 
              <div className="text-white text-xs mt-1">200</div>
          </div>
          <div className="m-4 flex flex-col items-center">
              <ExternalLinkIcon w={6} h={6} color='white'/>
              <div className="text-white text-xs mt-1">200</div>
          </div>
        </div>

        <div className={open ? "h-96" : "h-auto"}></div>

      </div>
      
    </div>
  )
}

// Feed.getInitialProps = async () => {
//   const [postscore, setPostScore] = useState([0])
//   return { postscore, setPostScore}
// }

export default Feed
