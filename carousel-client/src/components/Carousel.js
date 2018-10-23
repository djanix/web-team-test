import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateImage } from "../store/actions";
import styled, { css } from 'styled-components';
import Image from './Image';

class Carousel extends Component {
  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setTimer() {
    this.timer = setInterval(() => {
      this.nextImage();
    }, 10000)
  }

  getPreviousIndex = (carousel) => {
    if (carousel.currentIndex - 1 < 0) return carousel.images.length - 1;
    return carousel.currentIndex - 1;
  };

  getNextIndex = (carousel) => {
    if (carousel.currentIndex + 1 >= carousel.images.length) return 0;
    return carousel.currentIndex + 1;
  };

  previousImage = () => {
    const index = this.getPreviousIndex(this.props.carousel);
    this.props.updateImage(index);
    clearInterval(this.timer);
    this.setTimer();
  };

  nextImage = () => {
    const index = this.getNextIndex(this.props.carousel);
    this.props.updateImage(index);
    clearInterval(this.timer);
    this.setTimer();
  };

  render() {
    return (
      <Container>
        <Arrow previous onClick={this.previousImage}>&lt;</Arrow>

        <CarouselContainer>
          <ImageContainer>
            <Image media={this.props.carousel.images[this.props.carousel.currentIndex]} />
          </ImageContainer>
        </CarouselContainer>

        <Arrow next onClick={this.nextImage}>&gt;</Arrow>

        <Position>
          {this.props.carousel.images.map((item, index) => (
            <Dot active={index === this.props.carousel.currentIndex} />
          ))}
        </Position>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  carousel: state.carouselStore
});

const mapDispatchToProps = { updateImage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carousel);

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 800px;
`;

const Arrow = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: 0;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 42px;
  height: 60px;
  line-height: 60px;
  margin: 0 10px;
  opacity: 0.5;
  text-align: center;
  transition: all 0.2s;
  width: 60px;

  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  &:hover {
    opacity: 1;
  }
  
  ${props => props.next && css`
    left: initial;
    right: 0;
  `}
`;

const CarouselContainer = styled.div`
  width: calc(800px * 3);
  margin-left: -800px;
`;

const ImageContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: auto;
`;

const Position = styled.div`
  bottom: 50px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 3;
`;

const Dot = styled.span`
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  height: 6px;
  margin: 5px;
  opacity: 0.3;
  transition: all 0.2s;
  width: 6px;
  
  ${props => props.active && css`
    opacity: 0.85;
  `}
`;
