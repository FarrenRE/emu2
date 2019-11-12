import React from 'react'
import { Zergling, Roach } from './modules/Zerg'

export default class ModuleFactory {
  static spawn(data) {
    switch (data.name) {
      case 'zergling':
        return <Zergling />
      case 'roach':
        return <Roach />
      default:
        return undefined
    }
  }
}
