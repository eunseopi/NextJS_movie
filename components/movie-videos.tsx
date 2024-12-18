import styles from "../styles/movie-videos.module.css"
import {getMovieVideo} from "../app/api/route";

async function getVideos(id: string){
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const data = await getMovieVideo(id);
    return data;
}

export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id);
    return <div className={styles.container}>
        {videos.map((video) =>
            <iframe key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
            />)
        }
    </div>
}