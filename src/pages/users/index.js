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
                    <h1>{dataSource.title}</h1>
                    <p>{dataSource.content}</p>
                </div>
                <div className="users-middle-div">
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/data-logo.png" className="img-style" alt="腾讯大数据"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/game-logo.png" className="img-style" alt="腾讯游戏"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1">
                            <img src="/img/users/pay-logo.png" className="img-style" alt="微信支付"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1 middle-div-margin3">
                            <img src="/img/users/meetting-logo.png" className="img-style"  alt="腾讯会议"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1 middle-div-margin2">
                            <img src="/img/users/money-logo.png" className="img-style"  alt="财付通"/>
                        </div>
                    </div>
                    <div className="middle-div1">
                        <div className="img-div1 middle-div-margin1">
                            <img src="/img/users/brain-logo.png" className="img-style" alt="平台大脑"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
