import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from '../../components/Button';
import config from './config';
import './index.less';
// import 'animate.css';

export default function() {
  const isBrowser = useIsBrowser();

  const [p1Animation, setP1Animation] = useState(false);
  const [p2Animation, setP2Animation] = useState(false);

  // componentDidMount() {
  //   window.addEventListener('scroll', () => {
  //     const scrollTop = getScrollTop();
  //     if (scrollTop > 350) {
  //       this.setState({
  //         p1Animation: true
  //       });
  //     } else {
  //       this.setState({
  //         p1Animation: false
  //       });
  //     }
  //     if (scrollTop > 1150) {
  //       this.setState({
  //         p2Animation: true
  //       });
  //     } else {
  //       this.setState({
  //         p2Animation: false
  //       });
  //     }
  //   }, true);
  // }

  const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
  const dataSource = config?.[language];

  return (
    <div className="home-page">
      <section className="top-section" style={{backgroundImage: `url("${useBaseUrl('/img/first-page-bg.png')}"`}}>
        <div className="vertical-middle animate__animated animate__fadeInLeft animate__delay-0.5s">
          <div className="product-name">
            <div className="brandname">{dataSource.brand.brandName}</div>
            <div className="projectname" style={{backgroundImage: `url("${useBaseUrl('/img/inlong-en.svg')}"`}}>
              {/* <img src="/static/img/incubating.svg"></img> */}
            </div>
          </div>
          <div className="product-desc2">
            <div>{dataSource.brand.features[0]}</div>
            <div className="split"></div>
            <div className="dist">{dataSource.brand.features[1]}</div>
            <div className="split"></div>
            <div className="dist">{dataSource.brand.features[2]}</div>
            <div className="split"></div>
            <div className="dist">{dataSource.brand.features[3]}</div>
          </div>
          <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
          <div className="button-area">
          {
            dataSource.brand.buttons.map((b, index) => <Button type={b.type} key={index} link={b.link} target={b.target}>{b.text}</Button>)
          }
          </div>
        </div>
      </section>
      <section id="page1" className="feature-section" style={{backgroundImage: `url("${useBaseUrl('/img/sec-page-bg.png')}")`}}>
        <div className="title-index">01</div>
        {
          language === 'zh-CN' && <div className="page-title-wrap">
            <div className="page1-title-l1">{dataSource.features.title}</div>
            <div className="page1-title-l2">PRODUCT ADVANTAGES</div>
          </div>
        }
        {
          language === 'en' && <div className="page-title-wrap">
            <div className="page1-title-l2">PRODUCT</div>
            <div className="page1-title-l1">ADVANTAGES</div>
          </div>
        }
        <ul className={` ${p1Animation ? 'animate__animated animate__fadeInUp' : ''}`}>
        {
          dataSource.features.list.map((feature, i) => (
            <li key={i} index={i}>
              <div className="feature-icon" style={{backgroundImage: `url("${useBaseUrl(feature.img)}")`}} />
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
              </div>
            </li>
          ))
        }
        </ul>
      </section>
      <section className="feature-section" style={{backgroundColor: '#000'}}>
        <div className="title-index">02</div>
        {
          language === 'zh-CN' && <div className="page-title-wrap">
            <div className="page1-title-l1">{dataSource.architecture.title}</div>
            <div className="page1-title-l2">PRODUCT STRUCTURE</div>
          </div>
        }
        {
          language === 'en' && <div className="page-title-wrap">
            <div className="page1-title-l2">PRODUCT</div>
            <div className="page1-title-l1">STRUCTURE</div>
          </div>
        }
        <div className={`architecture-img-wrap ${p2Animation ? 'animate__animated animate__fadeInUp' : ''}`}>
          <img className="architecture-img" src={useBaseUrl('/img/arch-img.png')}></img>
        </div>
      </section>
    </div>
  );
}
