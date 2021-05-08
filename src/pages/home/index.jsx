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
import 'animate.css';

class Home extends Language {

  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
      p1Animation: false,
      p2Animation: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 350) {
        this.setState({
          p1Animation: true
        });
      } else {
        this.setState({
          p1Animation: false
        });
      }
      if (scrollTop > 1150) {
        this.setState({
          p2Animation: true
        });
      } else {
        this.setState({
          p2Animation: false
        });
      }
    }, true);
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType, p1Animation, p2Animation } = this.state;
    return (
      <div className="home-page">
        <section className="top-section" style={{backgroundImage: 'url(' + getLink("/img/first-page-bg.png") + ')'}}>
          <Header
            currentKey="home"
            type={headerType}
            language={language}
            onLanguageChange={this.onLanguageChange}
          />
          <div className="vertical-middle animate__animated animate__fadeInLeft animate__delay-0.5s">
            <div className="product-name">
              <div className="brandname">{dataSource.brand.brandName}</div>
              <div className="projectname" style={{backgroundImage: 'url(' + getLink(`/img/inlong-en.svg`) + ')'}}>
                {/*<img src={getLink("/img/incubating.svg")}></img>*/}
              </div>
            </div>
            <div className="product-desc2">
              <div>{dataSource.brand.features[0]}</div>
              <div className="split"></div>
              <div>{dataSource.brand.features[1]}</div>
              <div className="split"></div>
              <div>{dataSource.brand.features[2]}</div>
              <div className="split"></div>
              <div>{dataSource.brand.features[3]}</div>
            </div>
            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
            <div className="button-area">
            {
              dataSource.brand.buttons.map((b, index) => <Button type={b.type} key={index} link={b.link} target={b.target}>{b.text}</Button>)
            }
            </div>
          </div>
        </section>
        <section id="page1" className="feature-section" style={{backgroundImage: 'url(' + getLink('/img/sec-page-bg.png') + ')'}}>
          <div className="title-index">01</div>
          {
            dataSource.language === 'zh' && <div className="page-title-wrap">
              <div className="page1-title-l1">{dataSource.features.title}</div>
              <div className="page1-title-l2">PRODUCT ADVANTAGES</div>
            </div>
          }
          {
            dataSource.language === 'en' && <div className="page-title-wrap">
              <div className="page1-title-l2">PRODUCT</div>
              <div className="page1-title-l1">ADVANTAGES</div>
            </div>
          }
          <ul className={` ${p1Animation ? 'animate__animated animate__fadeInUp' : ''}`}>
          {
            dataSource.features.list.map((feature, i) => (
                <Item feature={feature} key={i} index={i}/>
            ))
          }
          </ul>
        </section>
        <section className="feature-section" style={{backgroundColor: '#000'}}>
          <div className="title-index">02</div>
          {
            dataSource.language === 'zh' && <div className="page-title-wrap">
              <div className="page1-title-l1">{dataSource.architecture.title}</div>
              <div className="page1-title-l2">PRODUCT STRUCTURE</div>
            </div>
          }
          {
            dataSource.language === 'en' && <div className="page-title-wrap">
              <div className="page1-title-l2">PRODUCT</div>
              <div className="page1-title-l1">STRUCTURE</div>
            </div>
          }
          <div className={`architecture-img-wrap ${p2Animation ? 'animate__animated animate__fadeInUp' : ''}`}>
            <img className="architecture-img" src={getLink('/img/arch-img.png')}></img>
          </div>
        </section>
        <Footer logo="/img/incubator-logo.svg" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
