function newLang(lang) {
    const newEle = document.createElement('li');
    newEle.innerHTML = `${lang}`
    document.querySelector('.language').appendChild(newEle);
}
newLang("C++")
newLang("GoLang")
newLang("Java")