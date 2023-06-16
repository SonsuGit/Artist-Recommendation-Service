// ChatGPT API가 원하는 포맷(이름,이름,이름,이름)으로 데이터를 줬는지 확인하는 함수
/**
 * 포멧을 확인하는 함수
 * @param {object} response ChatGPT가 주는 resoponse
 * @returns 포멧에 맞는지 Boolean 값 return
 */
export function checkFormat(response){
    const names = response.choices[0].message.content.split(',').map(name => name.trim());
    return names.length === 4 && names.every(name => name !== '');
};