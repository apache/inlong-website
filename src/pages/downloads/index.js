import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './download.module.less';
import config from './config.json';

export default function() {
    const isBrowser = useIsBrowser();

    const [p1Animation, setP1Animation] = useState(false);
    const [p2Animation, setP2Animation] = useState(false);

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    const version = "1.4.0";
    const date = "Nov. 16, 2022";


    return (
        <Layout>
            <div className={styles.divOne}>
                <h1>{dataSource.title}</h1>
                <p>{dataSource.describe}</p>
                <div className={styles.cardDiv}>
                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title} href="">InLong Source Code</a>
                            <div className={styles.description}>Here you can download files to InLong source code</div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.versionInfo}>
                                Latest Version ·
                                <span>{version}</span><br/>
                                Release Date ·
                                <span>{date}</span>
                            </div>
                            <div className={styles.buttonRow}>
                                <div className={styles.buttonCard}>
                                    <button className={styles.buttonDown}>
                                        Download
                                    </button>
                                    <div className={styles.styledDropdown}>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-src.tar.gz`}>SRC</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-src.tar.gz.asc`}>ASC</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-src.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title} href="">InLong Binary file</a>
                            <div className={styles.description}>The InLong binary can be downloaded here</div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.versionInfo}>
                                Latest Version ·
                                <span>{version}</span><br/>
                                Release Date ·
                                <span>{date}</span>
                            </div>
                            <div className={styles.buttonRow}>
                                <div className={styles.buttonCard}>
                                    <button className={styles.buttonDown}>
                                        Download
                                    </button>
                                    <div className={styles.styledDropdown}>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-bin.tar.gz`}>BIN</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-bin.tar.gz.asc`}>ASC</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-bin.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title} href="">Connector Binary file</a>
                            <div className={styles.description}>Here you can download files to InLong connector binaries</div>
                        </div>
                        <div className={styles.rightSide}>
                            <div className={styles.versionInfo}>
                                Latest Version ·
                                <span>{version}</span><br/>
                                Release Date ·
                                <span>{date}</span>
                            </div>
                            <div className={styles.buttonRow}>
                                <div className={styles.buttonCard}>
                                    <button className={styles.buttonDown}>Download</button>
                                    <div className={styles.styledDropdown}>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-sort-connectors.tar.gz`}>BIN</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-sort-connectors.tar.gz.asc`}>ASC</a>
                                        <a className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-sort-connectors.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{dataSource.version}</h2>
                {
                    language === "zh-CN" &&  <div className={styles.release}>
                        <p>
                            如果你想要预览 Apache InLong 已发布的所有版本，请查看
                            <a href="https://archive.apache.org/dist/inlong/" target="_blank"> Archive repository</a> 。
                        </p>
                        <p>
                            <a href="https://archive.apache.org/dist/incubator/inlong/">Incubating Archive repository </a>
                            存储着 Apache InLong 旧版孵化器项目的备份归档，你也可以随时查阅它们。
                        </p>
                    </div>
                }
                {
                    language === "en" &&  <div className={styles.release}>
                        <p>
                            Find all Apache InLong releases in the
                            <a href="https://archive.apache.org/dist/inlong/" target="_blank"> Archive repository </a>.
                        </p>
                        <p>
                            <a href="https://archive.apache.org/dist/incubator/inlong/">Incubating Archive repository </a>
                            hosts older releases when Apache InLong was an incubator project.
                        </p>
                    </div>
                }
                <br/>
                <h2>{dataSource.release}</h2>
                {
                    language === "zh-CN" && <div>
                        您必须
                        <a href="https://www.apache.org/info/verification.html" target="_blank">验证</a>
                        下载文件的完整性。
                        我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的
                        <a href="https://downloads.apache.org/incubator/inlong/KEYS"> KEYS </a>
                        文件匹配。
                        我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。
                    </div>
                }
                {
                    language === "en" && <div>
                        You must
                        <a href="https://www.apache.org/info/verification.html" target="_blank"> verify </a>
                        the integrity of the downloaded files.
                        We provide OpenPGP signatures for every release file. This signature should be matched against the
                        <a href="https://downloads.apache.org/incubator/inlong/KEYS"> KEYS </a>
                        file which contains the OpenPGP keys of InLong's Release Managers.
                        We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.
                    </div>
                }
            </div>
        </Layout>
    );
}
