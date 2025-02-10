'use client'
import Lottie from 'react-lottie-player'
import coffee from '@/public/lottie/coffee.json'


export default function Coffee() {
    return (
        <Lottie
        loop
        animationData={coffee}
        play
        style={{ width: 450 , maxHeight:'100%', height: 450 , maxWidth:'100%' }}
      />
    )
}