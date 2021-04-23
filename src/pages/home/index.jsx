import React from 'react';
import ReactDOM from 'react-dom';
import { getScrollTop, getLink } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import Item from './featureItem';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    });
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType } = this.state;
    return (
      <div className="home-page">
        <section className="top-section" style={{backgroundImage: 'url(' + getLink("/img/first-page-bg.jpg") + ')'}}>
          <Header
            currentKey="home"
            type={headerType}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="show-tips">Apache TubeMQ has been renamed to Apache InLong, the homepage will updete soon!</div>
          <div className="vertical-middle">
            <div className="product-name">
              <div className="brandname">{dataSource.brand.brandName}</div>
              <div className="projectname">{dataSource.brand.projectName}</div>
              <img src={getLink("/img/incubating.svg")}></img>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map((b, index) => <Button type={b.type} key={index} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
          </div>
        </section>
        <section className="feature-section" style={{backgroundImage: 'url(' + getLink('/img/sec-page-bg.png') + ')'}}>
          <h3>{dataSource.features.title}</h3>
          <ul>
          {
            dataSource.features.list.map((feature, i) => (
                <Item feature={feature} key={i} index={i}/>
            ))
          }
          </ul>
          <div className="ball1" style={{backgroundImage: 'url(' + getLink('/img/blue-ball.png') + ')'}}></div>
          <div className="ball2" style={{backgroundImage: 'url(' + getLink('/img/yellow-ball.png') + ')'}}></div>
        </section>
        <Footer logo="/img/incubator-logo.svg" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
