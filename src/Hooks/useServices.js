import { useEffect, useState } from "react";

function useServices() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(resp => resp.json())
            .then(json => setServices(json));
    }, []);
    return [services];
}
export default useServices;
