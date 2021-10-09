import { Component } from "react";
import ReactGodot from 'react-godot'
import './about.css'

export default class About extends Component {
  render () {
    return (
      <ReactGodot script="../../../public/assets/game/Crypto_Universe.js" pck="../../../public/assets/game/Crypto_Universe.pck" />
    )
  }
}
