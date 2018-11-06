import React from 'react'

import { SettingsProvider } from './SettingsContext'

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <SettingsProvider>
          {this.props.children}
        </SettingsProvider>
      </div>
    )
  }
}
