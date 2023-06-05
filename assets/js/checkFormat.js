/**
 * 전달해준 답이 format에 맞는지 판단함
 * @param {object} response ChatGPT가 전달해준 답
 * @returns 그 답이 빈칸이 아닌 4개의 이름인지 아닌지 Boolean
 */
function checkFormat(response){
    const names = response.choices[0].message.content
    .split(',').map(name => name.trim());
    return names.length === 4 && names.every(name => name !== '');
};