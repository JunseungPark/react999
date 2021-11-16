import react from "react";

const YoutubeItem = (props) => {
    console.log(props)
    const youtubeLink = `https://www.youtube.com/watch?v=${props.video.id.videoId}`;

    return (
        <div>
            <a href={youtubeLink}>
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title}>
                </img>
                <p className="title">
                    {props.video.snippet.title}
                </p>
            </a>
        </div>
    )
}

export default YoutubeItem;