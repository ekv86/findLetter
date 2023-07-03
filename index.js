const formEl = document.querySelector('.form');
const letterEl = document.querySelector('.uniqLetter');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    let string = evt.target.children.area.value;
    let arr = string.toLocaleLowerCase().split(' ');
    
    let firstLetterArr = [];

    for (let item of arr) {
        let word = item.split('');
        let findArr = findLetter(word);
        firstLetterArr.push(findArr[0]);
    }

    let uniqueLetter = findLetter(firstLetterArr);

    letterEl.textContent = uniqueLetter[0];

    console.log(uniqueLetter[0]);
    evt.target.children.area.value = '';
}


function findLetter(arr) {
    const noRepeatLetterArr = arr.filter(
        (letter, index, array) => array.indexOf(letter) === index
    );
    const repeatLetterArr = arr.filter(
        (letter, index, array) => array.indexOf(letter) !== index
    );

    for (let i = 0; i < noRepeatLetterArr.length; i += 1) {
        for (let j = 0; j < repeatLetterArr.length; j += 1) {
            if (repeatLetterArr[j] === noRepeatLetterArr[i]) {
                let idx = noRepeatLetterArr.indexOf(noRepeatLetterArr[i]);
                noRepeatLetterArr.splice(idx, 1);
            }
        }
    }
    return noRepeatLetterArr; 
}

let stringExample = "The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler.Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. --Geoffrey James, 'The Tao of Programming'";