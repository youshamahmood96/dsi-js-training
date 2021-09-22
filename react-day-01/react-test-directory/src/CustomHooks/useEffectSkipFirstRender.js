import { useEffect, useRef } from 'react'

function useEffectSkipFirstRender(callback,dependencyArray) {
   const ref = useRef(false)
   useEffect(()=>{
       if(!ref.current){
           ref.current = true
           return
       }
       callback()
   },[dependencyArray,callback])
}

export default useEffectSkipFirstRender
