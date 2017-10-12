import React, { Component } from "react"

export class IconSocialFacebook extends Component<any, null> {
  static defaultProps = {
    color: "black",
  }
  render() {
    return (
      <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M13.22846,-0.00014 L0.77266,-0.00014 C0.34566,-0.00014 -0.00014,0.34636 -0.00014,0.77266 L-0.00014,13.22706 C-0.00014,13.65336 0.34566,13.99986 0.77266,13.99986 L7.47866,13.99986 L7.47866,8.57836 L5.65376,8.57836 L5.65376,6.46576 L7.47866,6.46576 L7.47866,4.90686 C7.47866,3.09876 8.58256,2.11456 10.19606,2.11456 C10.74066,2.11246 11.28526,2.14046 11.82706,2.19786 L11.82706,4.08576 L10.70776,4.08576 C9.83066,4.08576 9.65846,4.50366 9.65846,5.11476 L9.65846,6.46366 L11.75146,6.46366 L11.47846,8.57696 L9.65986,8.57696 L9.65986,13.99986 L13.22776,13.99986 C13.65406,13.99986 13.99986,13.65406 13.99986,13.22706 L13.99986,0.77266 C13.99986,0.34636 13.65406,-0.00014 13.22776,-0.00014"
            fill={this.props.color}
          />
        </g>
      </svg>
    )
  }
}
