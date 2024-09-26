import React from 'react'

const VideoCard = ({ info }) => {
    

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='card p-3 m-3 w-72 shadow-xl bg-base-100 rounded-md'>
            <img className='rounded-md' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className='font-bold py-2 text-slate-900'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard
