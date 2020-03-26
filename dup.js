https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word) {
    const nawiasy = ["(", ")"];
    var wordArr = [...word];
    wordArr = wordArr.map(el => el.toUpperCase());
    //wordArr.sort();
    var wynik = [];
    var powtorzone = [];

    wordArr.forEach((el) => {
        if (wordArr.lastIndexOf(el) != wordArr.indexOf(el) && !powtorzone.includes(el)) { powtorzone.push(el) };

    });

    //let k = 0;
    wynik = wordArr.map((el) => {
        if (powtorzone.includes(el)) {
            //k = Math.abs(k - 1);
            return nawiasy[1];
        }
        else return nawiasy[0];
    });
    console.log(wordArr);
    console.log(powtorzone);
    console.log(wynik.join(""));
}

duplicateEncode("din"); //"((("
duplicateEncode("recede"); //"()()()"