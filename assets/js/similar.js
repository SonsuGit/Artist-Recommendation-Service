import { cardClick } from "./cardClick.js";

let $input = document.querySelector('#artistInput');
let $button = document.querySelector('button');
let data = [{
    "role": "system",
    "content": "좋아하는 가수를 입력받아서 그와 유사한 가수 4명의 이름을 나열해줘. Never provide additional context. only answer in this format: name1,name2,name3,name4 "
}];
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;
$button.addEventListener('click', async e => {
    // 검색 UI 숨기기
    document.getElementById('initial-UI').classList.add('hidden');
    // 로딩 표시 보여주기
    document.getElementById('loadingIndicator').classList.remove('hidden');
    
    e.preventDefault();
    if ($input.value.length == 0) {
        alert('아티스트명을 입력해주세요.');
        return; // 입력값이 없을 경우 함수 종료
    }

    const userInputData = $input.value; // userInputData 변수 선언

    data.push({
        "role": "user",
        "content": userInputData
    });

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
    });

    const response = await res.json();

    if (!checkFormat(response)) {
        alert('아티스트의 이름이 옳지 않거나 정보가 적습니다.');
        return;
    }
    let ArtistNameList = response.choices[0].message.content.split(",");
    const cardContainer = document.getElementById('cardContainer');
    const cardTemplate = document.getElementById('cardTemplate');

    cardContainer.innerHTML = '';
    
    console.log(response)
    // chatGPT가 보낸 아티스트 이름 리스트로 카드템플릿 추가하기
    for (const i of ArtistNameList) {
        const albumArtURL = await fetchAlbumArt(i);
        const card = cardTemplate.content.cloneNode(true);
        card.querySelector('img').src = albumArtURL;
        card.querySelector('p').textContent = i;
        card.querySelector('.cardTemplate').addEventListener("click", () => cardClick(i)); // 클릭 이벤트 리스너 추가
        cardContainer.appendChild(card);
    }
    // 받은 데이터가 맞는지
    console.log(response.choices[0].message.content)
    // 로딩 표시 숨기기
    document.getElementById('loadingIndicator').classList.add('hidden');
    // 카드 컨테이너
    document.getElementById('cardContainer').classList.remove('hidden');
});