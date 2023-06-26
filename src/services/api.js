
const callToApi = () => {
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
    .then((response) => response.json())
    .then((data) => {
        const dataWithId = data.map((eachQuote) => ({
            ...eachQuote,
            id: crypto.randomUUID()
        }));
        return dataWithId;
    });
};

export default callToApi;