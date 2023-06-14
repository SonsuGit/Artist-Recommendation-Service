/**
 * 카드를 클릭하면 입력된 artistName에 맞는 스포티파이 검색 페이지를 새로 열어줌
 * @param {*} artistName 아티스트 이름
 */
export function cardClick(artistName) {
    const SEARCH_URL = 'https://open.spotify.com/search/'
    window.open(SEARCH_URL + artistName);
}