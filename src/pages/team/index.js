import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from "../team/config.json";
import Layout from '@theme/Layout';
import './index.less';
import axios from 'axios';

export default function() {
    const isBrowser = useIsBrowser();

    const [p1Animation, setP1Animation] = useState(false);
    const [p2Animation, setP2Animation] = useState(false);

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    let contributors = isBrowser && axios({
        url: 'https://api.github.com/repos/apache/incubator-inlong/contributors',
        method: 'get',
        headers: { "Authorization": `token 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` },
        params: {
            per_page: 100
        }
    }).then(result => {
        let data = result.data;
        var eles = document.getElementById("conID");
        for(let i of data){
            var lid = document.createElement("li");
            lid.className = "mb-2";
            lid.innerHTML = "<a href='"+i.html_url+"' target='_blank'>" +
                "<img src='"+i.avatar_url+"'/>" + "<span>"+i.login+"</span>" +
                "</a>";
            eles.appendChild(lid);
        }
    })

    let doc_contributors = isBrowser &&  axios({
        url: 'https://api.github.com/repos/apache/incubator-inlong-website/contributors',
        method: 'get',
        headers: { "Authorization": `token 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` },
        params: {
            per_page: 100
        }
    }).then(result => {
        let data = result.data;
        var eles = document.getElementById("docID");
        for(let i of data){
            var lid = document.createElement("li");
            lid.className = "mb-2";
            lid.innerHTML = "<a href='"+i.html_url+"' target='_blank'>" +
                "<img src='"+i.avatar_url+"'/>" + "<span>"+i.login+"</span>" +
                "</a>";
            eles.appendChild(lid);
        }
    })


    return (
        <Layout>
            <div className="team-div"><br/>
                <h1>InLong Team</h1>
                <div>
                    <p>{dataSource.synopsis[0]}</p>
                    <p>{dataSource.synopsis[1]}</p>
                    <p>{dataSource.synopsis[2]}</p>
                </div>
                <h2>Members</h2>
                <p>{dataSource.members}</p>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Apache ID</b></td>
                            <td><b>GitHub User Name</b></td>
                            <td><b>Public Name</b></td>
                        </tr>
                        <tr>
                            <td>aloyszhang</td>
                            <td>aloyszhang</td>
                            <td>Aloys Zhang</td>
                        </tr>
                        <tr>
                            <td>dockerzhang</td>
                            <td>dockerzhang</td>
                            <td>Charles Zhang</td>
                        </tr>
                        <tr>
                            <td>gosonzhang</td>
                            <td>gosonzhang</td>
                            <td>Guocheng Zhang</td>
                        </tr>
                        <tr>
                            <td>gxcheng</td>
                            <td>guangxuCheng</td>
                            <td>Guangxu Cheng</td>
                        </tr>
                        <tr>
                            <td>jshao</td>
                            <td>jerryshao</td>
                            <td>Jerry Shao</td>
                        </tr>
                        <tr>
                            <td>junjie</td>
                            <td>chenjunjiedada</td>
                            <td>Junjie Chen</td>
                        </tr>
                        <tr>
                            <td>kaynewu</td>
                            <td>kaynewu</td>
                            <td>ZhongBo Wu</td>
                        </tr>
                        <tr>
                            <td>ke4qqq</td>
                            <td>David</td>
                            <td>Nalley</td>
                        </tr>
                        <tr>
                            <td>lamberliu</td>
                            <td>lamberliu</td>
                            <td>Lamber Liu</td>
                        </tr>
                        <tr>
                            <td>osgooli</td>
                            <td>lizhiboo</td>
                            <td>Osgoo Li</td>
                        </tr>
                        <tr>
                            <td>tison</td>
                            <td>tisonkun</td>
                            <td>Zili Chen</td>
                        </tr>
                        <tr>
                            <td>xiangli</td>
                            <td>waterlx</td>
                            <td>Xiang Li</td>
                        </tr>
                        <tr>
                            <td>yihengw</td>
                            <td>yiheng</td>
                            <td>Yiheng Wang</td>
                        </tr>
                        <tr>
                            <td>zakwu</td>
                            <td>wf123537200</td>
                            <td>Zak Wu</td>
                        </tr>
                        <tr>
                            <td>healchow</td>
                            <td>healchow</td>
                            <td>Heal Chow</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Committer</h2>
                <table>
                    <tbody>
                        <tr>
                            <td><b>Apache ID</b></td>
                            <td><b>GitHub User Name</b></td>
                            <td><b>Public Name</b></td>
                        </tr>
                        <tr>
                            <td>technoboy</td>
                            <td>technoboy-</td>
                            <td>Guo Jiwei</td>
                        </tr>
                        <tr>
                            <td>charleli</td>
                            <td>charlely</td>
                            <td>Haiji Li</td>
                        </tr>
                        <tr>
                            <td>yuanbo</td>
                            <td>yuanboliu</td>
                            <td>Yuanbo Liu</td>
                        </tr>
                        <tr>
                            <td>alfredlu</td>
                            <td>TszKitLo40</td>
                            <td>Zijie Lu</td>
                        </tr>
                        <tr>
                            <td>zirui</td>
                            <td>EMsnap</td>
                            <td>Zirui Peng</td>
                        </tr>
                        <tr>
                            <td>leezng</td>
                            <td>leezng</td>
                            <td>Daniel Li</td>
                        </tr>
                        <tr>
                            <td>jiyuanhao</td>
                            <td>shink</td>
                            <td>Yuanhao Ji</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Contributors</h2>
                <p>{dataSource.code_contributors}</p>
                <div className="contributors-div">
                    <ul id="conID" className="ul-flex">
                    </ul>
                </div>
                <p>{dataSource.doc_contributors}</p>
                <div className="contributors-div">
                    <ul id="docID" className="ul-flex">
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
