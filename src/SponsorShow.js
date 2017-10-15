import React from 'react';
import { sponsors as allSponsors } from './constants';
import './SponsorShow.css';
import { CSSTransitionGroup } from 'react-transition-group';

const Sponsor = props => {
  const { sponsor, preload, ...extra } = props;

  return (
    <div className={`sponsor ${preload ? 'preload' : ''}`} { ...extra }>
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
      itemIndex: 0,
      nextIndex: 0,
    };
  }

  componentWillMount() {
    this.timer = window.setInterval(() => this.advance(), 5000);
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
      itemIndex: this.state.nextIndex,
      nextIndex,
    });
  }

  render() {
    const { sponsors } = this.props;
    return (
      <div className="carousel">
        <CSSTransitionGroup
          transitionName="carousel"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <Sponsor key={this.state.itemIndex} sponsor={sponsors[this.state.itemIndex]} />
        </CSSTransitionGroup>
        <Sponsor sponsor={sponsors[this.state.nextIndex]} preload={true} />
      </div>
    );
  }
}

const SponsorShow = () => (
  <div className="container-fluid overlay">
    <SponsorCarousel sponsors={[]
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.platinum)
      .concat(allSponsors.gold)
      .concat(allSponsors.gold)
      .concat(allSponsors.gold)
      .concat(allSponsors.gold)
      .concat(allSponsors.silver)
      .concat(allSponsors.silver)
      .concat(allSponsors.bronze)}>
    </SponsorCarousel>
  </div>
);

export default SponsorShow;
