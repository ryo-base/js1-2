
let question = prompt('日本の首都は？') ;
const answer = '東京';

   
if (question === answer) {
    alert('正解です');
} else {
    alert('不正解です！');
    while (question !== answer) {
        let question = prompt('日本の首都は？');
        if (question === answer) {
            alert('正解です');
            break;
        } else {
            alert('不正解です！');
        }
    };
}
