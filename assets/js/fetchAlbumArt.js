// https://github.com/lacymorrow/album-art
async function fetchAlbumArt(artistName) {
    try {
        const response = await albumArt(artistName);
        return response;
    } catch (error) {
        return './assets/img/no_img.webp'
    }
}