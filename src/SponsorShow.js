import React from 'react';
import { sponsors } from './constants';
import './SponsorShow.css';

const Sponsor = props => {
  const { sponsor, order, ...extra } = props;

  return (
    <div className={`sponsor carousel-${order}`} { ...extra }>
      <a href={sponsor.url}>
        <img className="sponsor-image" src={`logos/${sponsor.logo}`} />
      </a>
      <h1 className="sponsor-name">{sponsor.name}</h1>
    </div>
  );
};

class SponsorCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      prevIndex: 0,
      itemIndex: 0,
      nextIndex: 0,
    };
  }

  componentWillMount() {
    this.timer = window.setInterval(() => this.advance(), 1000);
    this.advance();
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  advance() {
    const { sponsors } = this.props;
    const nextIndex = Math.floor(Math.random() * sponsors.length);

    this.setState({
      prevIndex: this.state.itemIndex,
      itemIndex: this.state.nextIndex,
      nextIndex,
    });
  }

  render() {
    const { sponsors } = this.props;
    return (
      <div className="carousel">
        <Sponsor sponsor={sponsors[this.state.prevIndex]} order="prev" />
        <Sponsor sponsor={sponsors[this.state.itemIndex]} order="current" />
        <Sponsor sponsor={sponsors[this.state.nextIndex]} order="next" />
      </div>
    );
  }
}

const SponsorShow = () => (
  <div className="container-fluid overlay">
    <SponsorCarousel sponsors={[]
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.platinum)
      .concat(sponsors.gold)
      .concat(sponsors.gold)
      .concat(sponsors.gold)
      .concat(sponsors.gold)
      .concat(sponsors.silver)
      .concat(sponsors.silver)
      .concat(sponsors.bronze)}>
    </SponsorCarousel>
  </div>
);

export default SponsorShow;
