import React from 'react'

import SettingsContext, { languages } from './SettingsContext'

export default class Greeting extends React.Component {
  static get contextType () {
    return SettingsContext
  }

  render () {
    const { language } = this.context

    let greeting = 'Hello, World!'
    if (language === languages.spanish) {
      greeting = '¡Hola Mundo!'
    } else if (language === languages.french) {
      greeting = 'Bonjour le monde!'
    }

    return (
      <div>{greeting}</div>
    )
  }
}
