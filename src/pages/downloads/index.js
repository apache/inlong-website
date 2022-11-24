import React   from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Layout from '@theme/Layout';
import styles from './download.module.less';
import config from './config.json';
import Translate, { translate } from '@docusaurus/Translate';

export default function() {
    const isBrowser = useIsBrowser();

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    const version = "1.4.0";
    const date = "Nov. 16, 2022";

    return (
        <Layout title={translate({ message: 'Downloads' })}>
            <div className={styles.divOne}>
                <h1>{dataSource.title}</h1>
                <Translate id={dataSource.title}>Download</Translate>
                <p>{dataSource.describe}</p>
                <div className={styles.cardDiv}>
                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title}>InLong Source Code</a>
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
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-src.tar.gz.asc`}>ASC</a>
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-src.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title}>InLong Binary file</a>
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
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-bin.tar.gz.asc`}>ASC</a>
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-bin.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.leftSide}>
                            <a className={styles.title}>Connector Binary file</a>
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
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-sort-connectors.tar.gz.asc`}>ASC</a>
                                        <a target="_blank" className={styles.dropdownItem} href={`https://downloads.apache.org/inlong/${version}/apache-inlong-${version}-sort-connectors.tar.gz.sha512`}>SHA512</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{dataSource.version}</h2>
                <div className={styles.release}>
                    <p>
                        <Translate id="page.download.version.step1">Find all Apache InLong releases in the </Translate>
                        <a href="https://archive.apache.org/dist/inlong/" target="_blank"> Archive repository</a> 。
                    </p>
                    <p>
                        <a href="https://archive.apache.org/dist/incubator/inlong/">Incubating Archive repository </a>
                        <Translate id="page.download.version.step2">hosts older releases when Apache InLong was an incubator project.</Translate>
                    </p>
                </div>
                <br/>
                <h2>{dataSource.release}</h2>
                <div >
                    <Translate id="page.download.release.step1">You must</Translate>
                    <a href="https://www.apache.org/info/verification.html" target="_blank"> verify </a>
                    <Translate id="page.download.release.step2">the integrity of the downloaded files.</Translate>
                    <Translate id="page.download.release.step3">We provide OpenPGP signatures for every release file. This signature should be matched against the </Translate>
                    <a href="https://downloads.apache.org/incubator/inlong/KEYS"> KEYS </a>
                    <Translate id="page.download.release.step4">file which contains the OpenPGP keys of InLong's Release Managers.</Translate>
                    <Translate id="page.download.release.step5">
                        We also provide SHA-512 checksums for every release file. After you download the file,
                        you should calculate a checksum for your download, and make sure it is the same as ours.
                    </Translate>
                </div>
            </div>
        </Layout>
    );
}
