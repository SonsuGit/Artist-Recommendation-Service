// ChatGPT API가 원하는 포맷(이름,이름,이름,이름)으로 데이터를 줬는지 확인하는 함수
function checkFormat(response){
    const names = response.choices[0].message.content.split(',').map(name => name.trim());
    return names.length === 4 && names.every(name => name !== '');
};