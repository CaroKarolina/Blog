import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;

        setTimeout(() => {
            fetch(url, { signal })
            .then(rawResponse => {
                if (!rawResponse.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return rawResponse.json();
            })
            .then(parsedResponse => {
                setData(parsedResponse);
                setIsPanding(false); //kiedy dane zostaną pobrane z serwera funkacja zmienia wartosć na 'false' i komunikat przestaje być wyświetlany
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPanding(false);
                    setError(err.message);
                }
            })
        }, 1000);

        return () => abortController.abort();

    }, [url]); // jako 2gi arg.podano referenję do url, ponieważ to od adresu url zależy czy hook useEffect wykona się ponownie

    return { data, isPanding, error } //aby możliwe było użycie włąściwości w innych komponentach nateży je ZWRÓCIĆ w ciele funckji;
}

export default useFetch;