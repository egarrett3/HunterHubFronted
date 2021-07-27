import { getHarvestStats, getHarvestOptions } from '../util/harvest_stats';

export const RECEIVE_STATS = "RECEIVE_STATS";
export const RECEIVE_OPTIONS = "RECEIVE_OPTIONS";
export const RECEIVE_STATS_ERROR = "RECEIVE_STATS_ERROR";

export const receiveStats = (stats) => {
    return {
        type: RECEIVE_STATS,
        stats
    }
}

export const receiveOptions = (options) => {
    return {
        type: RECEIVE_OPTIONS,
        options
    }
}

export const setStatsFilter = (zone) => {
    return {
        type: RECEIVE_STATS,
        zone
    }
}

export const receiveStatsError = (error) => {
    return {
        type: RECEIVE_STATS_ERROR,
        error
    }
}

export const receiveUnit = (unit) => {
    return {
        type: RECEIVE_STATS,
        unit
    }
}

export const fetchStats = (payload) => dispatch => {
    getHarvestStats(payload)
        .then(stats => {
                dispatch(receiveStats(stats))})
            .catch((err) => dispatch(receiveStatsError(err)))
}

export const fetchOptions = () => dispatch => {
    getHarvestOptions()
        .then(options => {
                dispatch(receiveOptions(options))})
            .catch((err) => dispatch(receiveStatsError(err)))
}