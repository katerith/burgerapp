import { useState, useEffect } from 'react';

export default httpClient => {
    const [ error, setError ] = useState(null);

    const reqInterceptor = httpClient.interceptors.request.use(req => {
        setError(null);
        return req;
    });

    const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
        setError(err);
    });
        
    useEffect(() => { // when it mounts
        return () => {  // when it unmounts
            httpClient.interceptors.request.eject( reqInterceptor );
            httpClient.interceptors.response.eject( resInterceptor );
        }
    }, [reqInterceptor, resInterceptor]); 
    // it will run when [reqInterceptor, resInterceptor] change

    const errorConfirmedHandler = () => {
        setError(null);
    }

    return [error, errorConfirmedHandler]
}