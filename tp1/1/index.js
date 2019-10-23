const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let argent
    let place = input[0]
    for(let i=1; i < input.length; i++){
      aled = input[i].split(' ')
      place += parseInt(aled[0])
      place -= parseInt(aled[1])
    } 
    if(place <= 100){
      argent = 1000
    }
    else if(place <= 10000){
      argent = 100
    }
    else{
      argent = 'KO'
    }
    return argent
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}