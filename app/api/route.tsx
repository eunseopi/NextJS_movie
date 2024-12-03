export async function getData() {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    return response.json();
}

export async function getMovieInfo(id: string) {
    const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}`);
    return response.json();
}

export async function getMovieVideo(id: string) {
    const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`);
    return response.json();
}