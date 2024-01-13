import React from 'react'
import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard UserName={'Miguel Anger Duran'} UserID={'midudev'}/>
            <TwitterFollowCard UserName={'Tesla'} UserID={'ElonMusk'}/>
            <TwitterFollowCard UserName={'Javier Zapata'} UserID={'JavierZ_py'}/>
        </section>
    )
}