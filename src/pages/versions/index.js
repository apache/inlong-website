import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from "../versions/config.json";
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
            <div className="div-one"><br/>
                <h1>{dataSource.title}</h1>
                <h3>{dataSource.newVersion}</h3>
                <p>{dataSource.newVersionExplain}</p>
                <table>
                    <tr>
                        <td>{dataSource.table.version[0].title}</td>
                        <td>
                            <a href={dataSource.table.version[0].link}>{dataSource.table.doc}</a>
                        </td>
                        <td>
                            <a href={dataSource.table.version[0].releaseUrl}>{dataSource.table.release}</a>
                        </td>
                        <td>
                            <a href="https://github.com/apache/inlong">{dataSource.table.source}</a>
                        </td>
                    </tr>
                </table>
                <br/>
                <h3>{dataSource.nextVersion}</h3>
                <p>{dataSource.nextVersionExplain}</p>
                <table>
                    <tr>
                        <td>Next</td>
                        <td>
                            <a href={dataSource.table.nextLink}>{dataSource.table.doc}</a>
                        </td>
                    </tr>
                </table>
                <br/>
                <h3>{dataSource.passVersion}</h3>
                <p>{dataSource.passVersionExplain}</p>
                <table>
                    {
                        dataSource.table.version.map((version, i) => (
                            <tr key={i} index={i}>
                                <td>{version.title}</td>
                                <td>
                                    <a href={version.link}>{dataSource.table.doc}</a>
                                </td>
                                <td>
                                    <a href={version.releaseUrl}>{dataSource.table.release}</a>
                                </td>
                                <td>
                                    <a href="https://github.com/apache/inlong">{dataSource.table.source}</a>
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </Layout>
    );
}
