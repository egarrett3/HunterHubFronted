import { RECEIVE_OPTIONS } from '../actions/harvest_stats_actions';

function animals(options) {
    const [opt] = options;
    let animalObj = {};
    let general = [];
    let controlled = [];
    let cntrl = false;

    opt.forEach((ele) => {
        let anml = ele[0];
        let anmlData = ele[1];

        anmlData.forEach((ele2) => {
            
            if (cntrl) {
                if (/\d/.test(ele2)) controlled.push(ele2);
            } else {
                if (/\d/.test(ele2)) general.push(ele2);
            }
            
            if (/Controlled/.test(ele2)) {
                cntrl = true
            } 
            
            // if (/\d/.test(ele2)) {
            //     seasonANDyear.push(ele2.trim())
            // } else if (/Controlled|General/.test(ele2)) {
            //     seasonANDyear.unshift(ele2)
            // }
        })
        animalObj[anml] = {
            general: general,
            controlled: controlled
        };
        general = [];
        controlled = [];
        cntrl = false;
    })

    return animalObj;
}

const statsOptionsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_OPTIONS:
            const options = action.options.data.result
            const animalOptions = [];
            // const optionsFilter = new RegExp('[\w]','gi')

            options.forEach((element) => {
                animalOptions.push(Object.entries(element));
            });
            
            animalOptions[0].forEach((element) => {
                element[1] = element[1]
                  .split(" ")
                  .join("")
                  .replace(/\t/g, "")
                  .split("\r\n");
            })

            const animalObj = animals(animalOptions);
            return animalObj
        default:
            return state

    }
}

export default statsOptionsReducer;