import { useEffect, useState } from "react";

function usePersons() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./persons.json')
            .then(resp => resp.json())
            .then(json => setPersons(json));
    }, []);
    return [persons];
}
export default usePersons;
