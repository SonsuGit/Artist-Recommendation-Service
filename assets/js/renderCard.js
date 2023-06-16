import { fetchAlbumArt } from "./fetchAlbumArt.js";
import { cardClick } from "./cardClick.js";

export async function renderCard(receivedArtistName, ArtistDescription){
    const $cardContainer = document.getElementById('cardContainer');
    const $cardTemplate = document.getElementById('cardTemplate');
    const albumArtURL = await fetchAlbumArt(receivedArtistName);
    const ArtistName = receivedArtistName.trim();

    const card = $cardTemplate.content.cloneNode(true);
    card.querySelector('img').src = albumArtURL;
    card.querySelector('h2').textContent = ArtistName;
    if(ArtistDescription){
        card.querySelector('p').textContent = ArtistDescription;
    }
    card.querySelector('.cardTemplate').addEventListener("click", () => cardClick(ArtistName)); // 클릭 이벤트 리스너 추가
    cardContainer.appendChild(card);
}