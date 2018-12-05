import React, { Component } from 'react';

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.selectLanguage = this.selectLanguage.bind(this);
  }


  selectLanguage(selectedLanguage) {
    this.setState({ selectedLanguage })
  }

  render () {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className="languages">
        {
          languages.map((language, index) => {
            return (
              <li style={{ color: '#d0021b' }} key={index}
                onClick={this.selectLanguage.bind(null, language)}>
                {language}
              </li>
            )
          }
          )}
      </ul>
    )
  }
}
