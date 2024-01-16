import React, { Children } from 'react'
import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'


export function App () {

    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing={true} UserID={'midudev'}>
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard initialIsFollowing={false} UserID={'ElonMusk'}>
                TESLA
            </TwitterFollowCard>

            <TwitterFollowCard initialIsFollowing={false} UserID={'JavierZ_py'}>
                Javier Zapata
            </TwitterFollowCard>

            <TwitterFollowCard initialIsFollowing={true} UserID={'Ashcryptoreal'}>
                Ash Crypto
            </TwitterFollowCard>
        </section>
    )
}