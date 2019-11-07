import React from 'react';
import { Hatchery } from './modules/Zerg';

export default class BaseFactory extends React.Component {
  static spawn(type, contents) {
    switch (type) {
      case 'zerg':
        return <Hatchery>{contents}</Hatchery>;
      default:
        return undefined;
    }
  }
}
