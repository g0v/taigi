import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:例句鈕仔');

export default class 例句鈕仔 extends React.Component {

  render() {
    let { 來開例句 } = this.props;
    if (來開例句 == undefined) {
      return (
        <span className=''>
        </span>
      );
    }

    return (
      <span className='ui icon button'>
        <div
          onClick={來開例句.bind(this)}
          title='例句'>
          <i className='icon external'></i>
        </div>
      </span>

    );
  }
}
