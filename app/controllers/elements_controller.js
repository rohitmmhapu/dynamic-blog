import { Controller } from "stimulus"

export default class extends Controller {

  sort(){

  let elements = document.getElementById('elements')
  let element_items = Array.from(document.getElementByClassName('element-item'))
  let elements = element_items.map((element, index) {
     return {id: element.dataset.id, position: index + 1}


  })

console.log(elements)

  }






  
}