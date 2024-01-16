import { useState } from "react"
export function TwitterFollowCard ({children, UserID = 'Uknown', initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button isFollowing'
        : 'tw-followCard-button'
    
    const handleClick = () => {setIsFollowing(!isFollowing)}
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de Javier" 
                    src={`https://unavatar.io/twitter/${UserID}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-userName'>@{UserID}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-Following">{text}</span>
                    <span className="tw-followCard-stopFollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}