import { getHarvestStats } from '../util/harvest_stats';

export const RECEIVE_STATS = "RECEIVE_STATS";
export const RECEIVE_STATS_ERROR = "RECEIVE_STATS_ERROR";

export const receiveStats = (stats) => {
    return {
        type: RECEIVE_STATS,
        stats
    }
}

export const receiveStatsError = (error) => {
    return {
        type: RECEIVE_STATS_ERROR,
        error
    }
}

export const fetchStats = (payload) => dispatch => {
    getHarvestStats(payload)
        .then(stats => dispatch(receiveStats(stats)))
            .catch((err) => dispatch(receiveStatsError(err)))
}