import React from 'react'

export const languages = {
  english: 'en',
  spanish: 'es',
  french: 'fr'
}

const SettingsContext = React.createContext({
  language: languages.english,
  setLanguage: () => {}
})

export class SettingsProvider extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      language: languages.english
    }

    this.setLanguage = this.setLanguage.bind(this)
  }

  setLanguage (language) {
    this.setState({ language })
  }

  render () {
    const settings = {
      language: this.state.language,
      setLanguage: this.setLanguage
    }

    return (
      <SettingsContext.Provider value={settings}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsContext
