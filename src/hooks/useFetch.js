import { useEffect, useState ,} from "react";
import {API_URL} from '@env';

function                                                                                                                                                    useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}${url}`);
                const _response = await response.json();
                setData(_response);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return { error, loading, data };

};
export default useFetch;