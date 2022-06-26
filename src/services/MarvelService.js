class MarvelService {
    _abiBase = 'https://gateway.marvel.com:443/v1/public/';
    _abiKey = 'apikey=a8ffa63d4c24f9483538434a1fe14158'

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could't fetach url ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._abiBase}characters?limit=9&offset=240&${this._abiKey}`)
    } 
    
    getCharacter = (id) => {
        return this.getResource(`${this._abiBase}characters/${id}?${this._abiKey}`)
    }
}

export default MarvelService;