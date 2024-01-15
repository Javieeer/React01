import React, { Children } from 'react'
import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'


export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing={true} UserID={'midudev'}>
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} UserID={'ElonMusk'}>
                TESLA
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} UserID={'JavierZ_py'}>
                Javier Zapata
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={true} UserID={'Ashcryptoreal'}>
                Ash Crypto
            </TwitterFollowCard>
        </section>
    )
}