import React from 'react'

import SettingsContext, { languages } from './SettingsContext'

export default class Settings extends React.Component {
  static get contextType () {
    return SettingsContext
  }

  render () {
    const { language, setLanguage } = this.context

    return (
      <div>
        <select value={language} onChange={(e) => { setLanguage(e.target.value) }}>
          { Object.keys(languages).map(lang => {
            return (
              <option key={languages[lang]} value={languages[lang]}>{lang}</option>
            )
          }) }
        </select>
      </div>
    )
  }
}
