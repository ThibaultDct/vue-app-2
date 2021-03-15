import firebase from "firebase";
import axios from "axios";
import * as type from "./store/types"
import store from "./store/store"

const userURL = "https://citybuilder.thibaultdct.fr/api/user";
const cityURL = "https://citybuilder.thibaultdct.fr/api/city";
const stockURL = "https://citybuilder.thibaultdct.fr/api/stock";

export async function disconnect () {
    store.dispatch({
      type: type.ResetUser
    })
    store.dispatch({
      type: type.ResetCityData
    })
    store.dispatch({
      type: type.ResetStock
    })
    await firebase.auth().signOut()
}

export async function getUser () {
    const uuid = firebase.auth().currentUser.uid
    await axios.get(userURL + "?firebase_id=eq." + uuid)
      .then(response => (
          store.dispatch({
              type: type.SetUser,
              user: response.data[0]
          })
      ))
      .catch(error => console.log(error))
    console.log(store.state.user)
}

export async function getCityData () {
    await axios.get(cityURL + "?user=eq." + store.state.user.user_id)
    .then(response => (
      store.dispatch({
        type: type.SetCityData,
        city: response.data[0]
      })
    ))
    .catch(error => console.log(error))
}

export async function getStockData () {
    await axios.get(stockURL + "?city=eq." + store.state.city_data.city_id)
    .then(response => (
      store.dispatch({
        type: type.SetStock,
        stock: response.data[0]
      })
    ))
    .catch(error => console.log(error))
}

export async function saveProgression () {
    console.log("Saving data...")
    console.log(store.state.city_data)
    await axios.put(cityURL + "?city_id=eq." + store.state.city_data.city_id, store.state.city_data)
      .catch(error => console.log(error))
    console.log("Data saved.")
}