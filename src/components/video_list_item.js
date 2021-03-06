import React from 'react';

const VideoListItem = ({video , onVideoSelect}) =>{
	const ImageURL = video.snippet.thumbnails.default.url;
	return(
		<li onClick={() => onVideoSelect(video)} className='list-group-item'>
		<div className='media-left'>
		<img className='media-object' src={ImageURL}/>
		</div>
	<div className='media-body'>
	<div className='media-heading'>{video.snippet.title}</div>
	</div>
	</li>
	);
}

export default VideoListItem;