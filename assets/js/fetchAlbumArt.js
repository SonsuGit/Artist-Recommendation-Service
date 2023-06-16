// https://github.com/lacymorrow/album-art
/**
 * 아티스트 이름을 받으면 사진 URL을 보내줌
 * @param {string} artistName 아티스트 이름
 * @returns URL
 */
export async function fetchAlbumArt(artistName) {
    try {
        const response = await albumArt(artistName);
        return response;
    } catch (error) {
        return '../img/no_img.png'
    }
}