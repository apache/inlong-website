import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from "../users/config.json";
import Layout from '@theme/Layout';
import './index.less';

export default function() {
    const isBrowser = useIsBrowser();

    const [p1Animation, setP1Animation] = useState(false);
    const [p2Animation, setP2Animation] = useState(false);

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    return (
        <Layout>
            <div className="users-div"><br/>
                <div className="users-top-div">
                    <h3>{dataSource.content}</h3>
                </div>
                <div className="users-middle-div">
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/data-logo.png" className="img-style" alt="腾讯大数据"/>
                        </div>
                        <div className="img-div1">
                            <img src="/img/users/enterprise-wechat-logo.png" className="img-style"  alt="企业微信"/>
                        </div>

                    </div>
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/game-logo.png" className="img-style" alt="腾讯游戏"/>
                        </div>
                        <div className="img-div1 middle-div-margin4">
                            <img src="/img/users/money-logo.png" className="img-style" alt="财付通"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/pay-logo.png" className="img-style" alt="微信支付"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1 middle-div-margin1">
                            <img src="/img/users/meeting-logo.png" className="img-style" alt="腾讯会议"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1 middle-div-margin2">
                            <img src="/img/users/qq-music-logo.png" className="img-style"  alt="QQ音乐"/>
                        </div>
                    </div>
                    {/*<div className="middle-div1">*/}

                    {/*</div>*/}
                </div>
            </div>
        </Layout>
    );
}
