const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    const nb_carton = input[0]
    let charge = 0
    let nb_AR = 1
    for(let i = 1; i <= nb_carton;){
      charge += input[i]
      if(charge <= 100){
        i++
      }
      else{
        nb_AR++
        charge = 0
      }
    }
    return nb_AR
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