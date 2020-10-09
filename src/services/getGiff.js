const apiKey = 'MkotoGSfoi0B9GJp2mPEKwtvHMKc9J6n';

const getGiff = ({keyword = 'morty'}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response;
        const giff = data.map(image => {
            const {images, title, id} = image;
            const {url} = images.downsized_medium;
            return {url, title, id}     
            })
        return giff;
      })
}
export default getGiff;