let paragraph = document.querySelector('#jokes');


const clickButton = async () => {
    let jokeText = await getJoke()
    paragraph.innerHTML = `<p id="jokes">${jokeText}</p>`;
};

const getJoke = async() => {
    try{
        const res = await axios.get('http://api.icndb.com/jokes/random/')
        return res.data.value.joke
    }
    catch (e) {
        return "No jokes available sorry 🤷‍♂️"
    }
};

