const fromText = document.querySelector(".from-text");
toText = document.querySelector(".to-text"),
selectTag = document.querySelectorAll("select"),
exchangeB = document.querySelector(".exchange"),
translateBtn = document.querySelector("button");

selectTag.forEach((tag, id) => {
    // console.log(tag);
    for(const country_code in countries){
        console.log(countries[country_code]);
        let select;
        if(id == 1 && country_code == "en-GB"){
            select = "selected";
        }else if(id == 1 && country_code == "hi-IN"){
            select = "selected";
        }
        let option = `
            <option value="${country_code}" ${select}>${countries[country_code]}
        </option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchangeB.addEventListener("click", () => {
    let tempText = fromText.value;
    templang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = templang;
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value,
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    let apiUrl = `
        https://api.mymemory.translated.net/get?q=${text}!&langpair=${translateFrom}|${translateTo}
    `;
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data);
        toText.value = data.responseData.translatedText;
    })
});

// 23:47