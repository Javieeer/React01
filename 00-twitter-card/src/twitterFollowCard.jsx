export function TwitterFollowCard ({UserName, UserID}) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de Javier" 
                    src={`https://unavatar.io/twitter/${UserID}`} />
                <div className='tw-followCard-info'>
                    <strong>{UserName}</strong>
                    <span className='tw-followCard-userName'>@{UserID}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Follow
                </button>
            </aside>
        </article>
    )
}