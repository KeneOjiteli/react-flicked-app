import {useEffect, useState} from 'react';

const useFetch = (url) =>{
//set an empty variable to hold objects
    const [data, setData] = useState(null);
    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const abort = new AbortController();
        setTimeout(() =>{
        fetch(url, {signal: abort.signal})
        .then((res) =>{
            if(!res.ok){
                throw Error('cannot find resource');
            }
            // console.log(res);
            return res.json();
        })
        .then((data) =>{
            console.log(data);
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log('Fetch error aborted');
            }else{
            console.log(error.message);
            setError(error.message);
            setLoading(false);
        }
        })
        }, 1000)
        return () =>{
           abort.abort()
        }
     }, [url]);
    
    
     return {data, loading, error}
}

export default useFetch;