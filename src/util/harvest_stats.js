import axios from 'axios';

export const getHarvestStats = (payload) => {
    return axios({
        method: 'GET',
        url: '/api/harveststatistics/fetchstats',
        data: payload,
    })
}