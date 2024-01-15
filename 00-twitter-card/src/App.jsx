import React from 'react'
import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'


export function App () {
    const formatUserName = (UserName) => `@${UserName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                isFollowing={true}
                UserName={'Miguel Anger Duran'}
                UserID={'midudev'}
            />

            <TwitterFollowCard
                isFollowing={false}
                UserName={'Tesla'}
                UserID={'ElonMusk'}
            />

            <TwitterFollowCard
                isFollowing={false}
                UserName={'Javier Zapata'}
                UserID={'JavierZ_py'}
            />

            <TwitterFollowCard
                isFollowing={true}
                UserName={'Ash Crypto'}
                UserID={'Ashcryptoreal'}
            />
        </section>
    )
}