import React, { Component } from 'react';
import styled from 'styled-components';

class Image extends Component {
  render() {
    return (
      <Media>
        <Info>
          <Title>{this.props.media.title}</Title>
          <Schedule>{this.props.media.schedule}</Schedule>
          <Link href={this.props.media.link} target="_blank">Learn More</Link>
        </Info>


        <Video controls src={this.props.media.url} />
      </Media>
    );
  }
}

export default Image;

const Media = styled.div`
  position: relative;
`;

const Video = styled.video`
  width: 800px;
  height: auto;
`;

const Info = styled.div`
  line-height: 1em;
  text-align: right;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px black;
  
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translateY(-50%);
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Schedule = styled.p`
  color: goldenrod;
  font-size: 16px;
  font-weight: bold;
`;

const Link = styled.a`
  border: 1px solid goldenrod;
  color: goldenrod;
  display: inline-block;
  font-size: 14px;
  padding: 0.5em;
  margin-top: 10px;
  text-decoration: none;
`;