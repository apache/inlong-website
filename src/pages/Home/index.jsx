import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import IndexArch from '../../../static/img/index-arch.svg';
import Button from '../../components/Button';
import config from './config';
import styles from './home.module.less';

export default function() {
  const isBrowser = useIsBrowser();

  const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
  const dataSource = config?.[language];

  return (
    <div className={styles.homePage}>
      <section className={styles.topSection} style={{backgroundImage: `url("${useBaseUrl('/img/first-page-bg.png')}"`}}>
        <div className={styles.verticalMiddle}>
          <div className={styles.productName}>
            <div className={styles.brandName}>{dataSource.brand.brandName}</div>
            <div className={styles.projectName} style={{backgroundImage: `url("${useBaseUrl('/img/inlong-en.svg')}"`}}>
            </div>
          </div>
          <div className={styles.productDesc2}>
          {
            dataSource.brand.features.map((item, index, arr) => [
                <div key={`text-${index}`}>{item}</div>,
                index !== arr.length - 1 && <div key={`split-${index}`} className={styles.split}></div>
            ])
          }
          </div>
          <p className={styles.productDesc}>{dataSource.brand.briefIntroduction}</p>
          <div className={styles.buttonArea}>
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
      <section className={styles.featureSection} style={{backgroundImage: `url("${useBaseUrl('/img/sec-page-bg.png')}")`}}>
        <div className={styles.titleIndex}>01</div>
        {
          language === 'zh-CN' && <div className={styles.pageTitleWrap}>
            <div className={styles.page1TitleL1}>{dataSource.features.title}</div>
            <div className={styles.page1TitleL2}>PRODUCT ADVANTAGES</div>
          </div>
        }
        {
          language === 'en' && <div className={styles.pageTitleWrap}>
            <div className={styles.page1TitleL2}>PRODUCT</div>
            <div className={styles.page1TitleL1}>ADVANTAGES</div>
          </div>
        }
        <ul>
        {
          dataSource.features.list.map((feature, i) => (
            <li key={i} index={i}>
              <div className={styles.featureIcon} style={{backgroundImage: `url("${useBaseUrl(feature.img)}")`}} />
              <div>
                <h4>{feature.title}</h4>
                <p>{feature.content}</p>
              </div>
            </li>
          ))
        }
        </ul>
      </section>
      <section className={styles.featureSection} style={{backgroundColor: '#000'}}>
        <div className={styles.titleIndex}>02</div>
        {
          language === 'zh-CN' && <div className={styles.pageTitleWrap}>
            <div className={styles.page1TitleL1}>{dataSource.architecture.title}</div>
            <div className={styles.page1TitleL2}>PRODUCT STRUCTURE</div>
          </div>
        }
        {
          language === 'en' && <div className={styles.pageTitleWrap}>
            <div className={styles.page1TitleL2}>PRODUCT</div>
            <div className={styles.page1TitleL1}>STRUCTURE</div>
          </div>
        }
        <div className={styles.architectureImgWrap}>
          <IndexArch style={{ width: '100%' }} />
        </div>
      </section>
    </div>
  );
}
