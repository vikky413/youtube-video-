import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video , onSelectVideo }) => {
    return (
        <div onClick={()=> onSelectVideo(video)} className='list-group'>
            <div className='list-group-item '>
                <img  alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
                <b className='title'>{video.snippet.title} </b>
            </div>
        </div>
    )
}

export default VideoItem