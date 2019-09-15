import axios from "axios";

//request data for selected location

export const requestLocationData = location => {
    return axios.get(`https://api.openaq.org/v1/latest?location=${location}`);
};

// request all the data for suggestions

export const getAllLocations = () => {
    return axios.get(
        "https://api.openaq.org/v1/locations?country[]=GB&limit=10000"
    );
};
