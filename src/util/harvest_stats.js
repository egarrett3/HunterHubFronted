import axios from 'axios';

export const getHarvestStats = (payload) => {
    const animal = payload.animal;
    const season = payload.season;
    const year = payload.year;

    return axios({
        method: 'GET',
        url: `/api/harveststatistics/${season}/${animal}/${year}`,
    })
}

export const getHarvestOptions = () => {
    return axios({
        method: 'GET',
        url: `/api/harvestoptions`,
    })
}