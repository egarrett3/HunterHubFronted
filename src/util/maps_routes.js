import axios from 'axios';

export const fetchUnitMap = () => {
    return axios({
        method: 'GET',
        url:`/api/unitMap`,
    })
}