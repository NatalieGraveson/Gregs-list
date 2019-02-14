import House from "../models/house.js";



let _state = {
  houses: [
    new House({ rooms: '2', title: 'Shack in the dessert', price: '10000', img: 'https://c1.staticflickr.com/4/3264/2878117733_c89ffbfc2e.jpg' }),
    new House({ rooms: '4', title: 'family home in the valley', price: '300000', img: 'https://i0zpx4996xs3tf9ee378q4df-wpengine.netdna-ssl.com/wp-content/uploads/sites/8/2018/07/the-valley-6.jpg' }),
    new House({ rooms: '7', title: 'Mansion on the hill', price: '700000', img: 'http://1.bp.blogspot.com/-OF6gT4Y1D9g/TWg02muIFaI/AAAAAAAAZu0/Z6vux19prw8/s530/Runyon%2BCanyon%2Bwhite%2Bmansion.jpg' }),
  ]
}

let _subscribers = {
  houses: []
}
function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}

export default class HouseService {




  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Houses() {
    return _state.houses
  }
  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)

  }

  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.id == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }
}