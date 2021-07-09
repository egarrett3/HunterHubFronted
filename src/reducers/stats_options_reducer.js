import { RECEIVE_OPTIONS } from '../actions/harvest_stats_actions';

function animals(options) {
    const [opt] = options;
    let animalObj = {};
    let animal = '';
    let seasonANDyear = [];

    opt.forEach((ele) => {
        let anml = ele[0];
        let anmlData = ele[1];

        animal = anml;

        debugger
        anmlData.forEach((ele2) => {
            debugger
            if (/\d/.test(ele2)) {
                debugger
                seasonANDyear.push(ele2.trim())
            } else if (/Controlled|General/.test(ele2)) {
                debugger
                seasonANDyear.push(ele2)
            }
        })
        animalObj[animal] = [seasonANDyear];
        animal = '';
        seasonANDyear = [];
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
                // element[1] = element[1]
                //   .split(" ")
                //   .filter((str) => {
                //       /\w/.test(str)
                // });
            })

            const animalObj = animals(animalOptions);
            debugger
            return animalObj
        default:
            return state

    }
}

export default statsOptionsReducer;