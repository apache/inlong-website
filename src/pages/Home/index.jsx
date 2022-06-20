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

      <section className="connect-section" style={{backgroundColor: '#373740'}}>
        <div className="content-div">
          <div className="connect-div">
            <div className="connect-div-img">
              <svg t="1638515494456" className="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="14579" width="48" height="48">
                <path
                    d="M544 832v128h-128v-128h128zM512 64a288 288 0 0 1 288 288c0 110.336-60.64 203.52-151.648 251.744L640 608c-64 32-96 96-96 160h-128c0-128 96-224 170.848-274.56A160 160 0 1 0 352 352H224a288 288 0 0 1 288-288z"
                    fill="#ffffff" p-id="14580"></path>
              </svg>
            </div>
            {
              language === 'zh-CN' && <div>
                <h3>任何问题</h3>
                <p>
                  功能请求、提问或报告错误? 随时<a href="https://the-asf.slack.com/archives/C01QAG6U00L" target="_blank">GitHub Discussions</a>讨论或者<a
                    href="https://github.com/apache/incubator-inlong/issues" target="_blank">提交问题</a>。
                </p>
              </div>
            }
            {
              language === 'en' && <div>
                <h3>Any questions</h3>
                <p>
                  Features request, ask questions or report bugs? Feel free to <a href="https://github.com/apache/incubator-inlong/discussions" target="_blank">GitHub Discussion</a> or <a
                    href="https://github.com/apache/incubator-inlong/issues" target="_blank">submit an issue</a>.
                </p>
              </div>
            }
          </div>
          <div className="connect-div">
            <div className="connect-div-img">
              <svg t="1638515632177" className="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="26063" width="48" height="48">
                <path
                    d="M872 160h-720A119.84 119.84 0 0 0 32 279.36v464A119.84 119.84 0 0 0 152 864h720a120 120 0 0 0 120-120.48v-464A120 120 0 0 0 872 160zM928 743.52A56 56 0 0 1 872 800h-720A56 56 0 0 1 96 743.52v-464A56 56 0 0 1 152 224h720a56 56 0 0 1 56 55.36z"
                    fill="#ffffff" p-id="26064"></path>
                <path
                    d="M832 375.52L512 582.24 192 375.52a32 32 0 1 0-34.56 53.92l337.28 217.76a31.04 31.04 0 0 0 17.28 5.12 30.72 30.72 0 0 0 17.28-5.12l338.08-217.76A32 32 0 0 0 832 375.52z"
                    fill="#ffffff" p-id="26065"></path>
              </svg>
            </div>
            {
              language === 'zh-CN' && <div>
                <h3>加入Slack Workspace</h3>
                <p>
                  将“请求加入 Apache InLong”邮件发送到邮箱<a href="mailto:dev@inlong.apache.org">dev@inlong.apache.org</a> , 我们将邀请您加入。
                </p>
              </div>
            }
            {
              language === 'en' && <div>
                <h3>Join our slack workspace</h3>
                <p>
                  Send ‘Request to join Apache InLong’ mail to the mail list <a href="mailto:dev@inlong.apache.org">dev@inlong.apache.org</a> , we will invite you in.
                </p>
              </div>
            }
          </div>
          <div className="connect-div">
            <div className="connect-div-img">
              <svg t="1638514162507" className="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="2762" data-spm-anchor-id="a313x.7781069.0.i3" width="48"
                   height="48">
                <path
                    d="M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48a491.296 491.296 0 0 1 128.16-17.248c43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576C877.472 942.624 1024 750.784 1024 524.64c0-282.784-229.248-512-512-512z"
                    p-id="2763" fill="#ffffff"></path>
              </svg>
            </div>
            {
              language === 'zh-CN' && <div>
                <h3>欢迎贡献</h3>
                <p>
                  欢迎大家可以随时创建 <a href="https://github.com/apache/incubator-inlong" target="_blank">Pull Request</a> 贡献自己的代码。
                </p>
              </div>
            }
            {
              language === 'en' && <div>
                <h3>Contributions welcome</h3>
                <p>
                  Everyone is welcome to create <a href="https://github.com/apache/incubator-inlong" target="_blank">Pull Request</a> and contribute their own code at any time!
                </p>
              </div>
            }

          </div>
          <div className="connect-div">
            <div className="connect-div-img">
              <svg t="1638515814626" className="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="34514" width="48" height="48">
                <path
                    d="M679.68 360.107a284.16 284.16 0 0 1 32 1.92C682.667 227.84 539.52 128 375.68 128 192 128 42.667 253.013 42.667 411.52c0 91.52 49.92 166.613 133.333 224.853L142.72 736.64l116.48-58.453a569.813 569.813 0 0 0 116.693 16.64c10.454 0 21.334 0 31.147-1.28a248.32 248.32 0 0 1-10.24-69.76c0-145.494 125.013-263.68 283.093-263.68zM498.347 263.04a51.413 51.413 0 1 1-51.414 51.413 51.413 51.413 0 0 1 51.414-51.413zM265.173 367.147a51.413 51.413 0 1 1 51.414-51.414 51.413 51.413 0 0 1-51.414 51.414zM981.333 620.8c0-133.12-133.333-241.707-282.88-241.707-158.506 0-283.306 108.587-283.306 241.707s124.8 241.707 283.306 241.707a418.773 418.773 0 0 0 99.84-16.64L889.813 896l-24.96-83.2c66.774-50.133 116.694-116.693 116.694-192z m-369.92-37.333a36.693 36.693 0 1 1 36.694-36.694 36.693 36.693 0 0 1-36.694 36.694z m183.04 2.133A36.693 36.693 0 1 1 832 548.907a36.693 36.693 0 0 1-36.693 36.693z"
                    p-id="34515" fill="#ffffff"></path>
              </svg>
            </div>
            {
              language === 'zh-CN' && <div>
                <h3>微信互动</h3>
                <p>
                    欢迎大家关注微信公众号 <a href="https://github.com/apache/incubator-inlong-website/blob/master/static/img/apache-inlong-wechat.jpg" target="_blank"> Apache InLong </a>。
                </p>
              </div>
            }
            {
              language === 'en' && <div>
                <h3>Follow us on WeChat</h3>
                <p>
                  Welcome everyone to follow the WeChat public account <a href="https://github.com/apache/incubator-inlong-website/blob/master/static/img/apache-inlong-wechat.jpg" target="_blank">Apache InLong</a> .
                </p>
              </div>
            }
          </div>
          <div className="connect-div">
              <div className="connect-div-img">
                <svg t="1647868339633" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1775" width="48" height="48">
                  <path
                      d="M1024 194.56a420.352 420.352 0 0 1-120.832 33.28 210.432 210.432 0 0 0 92.16-116.224 422.4 422.4 0 0 1-133.632 51.2A209.92 209.92 0 0 0 499.2 307.2a211.968 211.968 0 0 0 5.632 47.616 596.48 596.48 0 0 1-433.152-220.16 208.896 208.896 0 0 0-28.672 105.472A204.8 204.8 0 0 0 132.096 414.72C97.28 413.696 32.256 404.48 32.256 388.608v2.56a214.528 214.528 0 0 0 173.056 204.8 193.024 193.024 0 0 1-51.2 7.168 199.68 199.68 0 0 1-38.4-3.584 210.944 210.944 0 0 0 196.608 145.92A420.864 420.864 0 0 1 51.2 836.608a438.784 438.784 0 0 1-51.2-3.072 594.944 594.944 0 0 0 322.048 94.208A593.408 593.408 0 0 0 921.6 330.24v-27.136a427.008 427.008 0 0 0 102.4-108.544z m0 0"
                      fill="#ffffff" p-id="1776"></path>
                </svg>
              </div>
              {
                  language === 'zh-CN' && <div>
                      <h3>推特互动</h3>
                      <p>
                          欢迎大家关注Twitter <a href="https://github.com/apache/incubator-inlong-website/blob/master/static/img/apache-inlong-wechat.jpg" target="_blank">@ApacheInlong</a> 。
                      </p>
                  </div>
              }
              {
                  language === 'en' && <div>
                      <h3>Follow us on Twitter</h3>
                      <p>
                          Follow the latest developments of the project on <a href="https://twitter.com/ApacheInlong" target="_blank">@ApacheInlong</a> .
                      </p>
                  </div>
              }
          </div>
        </div>
      </section>

    </div>
  );
}
