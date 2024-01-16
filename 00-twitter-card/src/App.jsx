import React, { Children } from 'react'
import './App.css'
import './twitterFollowCard'
import { TwitterFollowCard } from './twitterFollowCard'

const userList = [
    {
        name: 'Javier Zapata',
        id: 'JavierZ_py',
        isfollowing: true
    },
    {
        name: 'Miguel Angel Duran',
        id: 'midudev',
        isfollowing: false
    },
    {
        name: 'TESLA',
        id: 'ElonMusk',
        isfollowing: true
    },
    {
        name: 'Ash Crypto',
        id: 'Ashcryptoreal',
        isfollowing: true
    }
]

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