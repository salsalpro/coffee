'use client'
import Lottie from 'react-lottie-player'
import coffee2 from '@/public/lottie/coffee2.json'


export default function Coffee2() {
    return (
        <Lottie
        loop
        animationData={coffee2}
        play
        style={{ width: 450 , maxHeight:'100%', height: 450 , maxWidth:'100%' }}
      />
    )
}