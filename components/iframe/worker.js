
self.onmessage = async function(event) {
    console.log('Message received from main script:', event.data);
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto",
        {
            headers: {
                "x-api-key": "test"
            }
        }
    ).then(res => res.json());
    console.log(res);
    let result = event.data * 2;
    self.postMessage(result);
};