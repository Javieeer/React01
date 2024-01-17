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
            {
                userList.map( user => {
                    const { name, id, isfollowing } = user
                    return (
                        <TwitterFollowCard 
                            key={id}
                            UserID={id}
                            initialIsFollowing={isfollowing}
                        >
                            {name}
                        </TwitterFollowCard>

                    )
                })
            }
        </section>
    )
}