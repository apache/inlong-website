import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IndexArch from '../../../static/img/index-arch.svg';
import Button from '../../components/Button';
import config from './config';
import './index.less';

export default function() {
  const isBrowser = useIsBrowser();

  const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
  const dataSource = config?.[language];

  return (
    <div className="home-page">
      <section className="top-section" style={{backgroundImage: `url("${useBaseUrl('/img/first-page-bg.png')}"`}}>
        <div className="vertical-middle">
          <div className="product-name">
            <div className="brandname">{dataSource.brand.brandName}</div>
            <div className="projectname" style={{backgroundImage: `url("${useBaseUrl('/img/inlong-en.svg')}"`}}>
            </div>
          </div>
          <div className="product-desc2">
          {
            dataSource.brand.features.map((item, index, arr) => [
                <div key={`text-${index}`}>{item}</div>,
                index !== arr.length - 1 && <div key={`split-${index}`} className="split"></div>
            ])
          }
          </div>
          <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
          <div className="button-area">
            {
              dataSource.brand.buttons.map((b, index, arr) => (
                <Button
                  type={b.type}
                  key={index}
                  link={b.link}
                  target={b.target}
                  style={{ borderRadius: 30, marginRight: index === arr.length - 1 ? 0 : 50 }}
                >
                  {b.text}
                </Button>
              ))
            }
          </div>
        </div>
      </section>
      <section className="feature-section" style={{backgroundImage: `url("${useBaseUrl('/img/sec-page-bg.png')}")`}}>
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
        <ul>
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
        <div className="architecture-img-wrap">
          <IndexArch style={{ width: '100%' }} />
        </div>
      </section>
    </div>
  );
}
