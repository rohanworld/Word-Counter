var textArea = document.getElementById("content");
var charactersCount = document.getElementById("cCount");
var wordsCount = document.getElementById("wCount");

textArea.oninput=()=>{
    let characters = textArea.value;
    // console.log(characters);
    charactersCount.textContent = characters.replace(/\s/g, '').length;
    
    let words = textArea.value.split(' ').filter((item)=>{
        return item!='';
    });
    wordsCount.textContent = words.length;
    // console.log(words);
}