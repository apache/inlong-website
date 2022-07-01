import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from '../downloads/config.json';
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
        <div className="down-div"><br/>
          <h2>{dataSource.topTitle}</h2>
          <p>{dataSource.topPrompt}</p>
          <table>
            <tbody>
            <tr>
              <td>Release</td>
              <td>Date</td>
              <td>Link</td>
              <td>Crypto files</td>
            </tr>
            <tr>
              <td>InLong Source Code</td>
              <td>Jun 20, 2022</td>
              <td>
                <a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz">
                  apache-inlong-1.2.0-incubating-src.tar.gz
                </a>
              </td>
              <td>
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.asc">ASC</a>]
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.sha512">SHA512</a>]
              </td>
            </tr>
            <tr>
              <td>InLong Binary file</td>
              <td>Jun 20, 2022</td>
              <td>
                <a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-bin.tar.gz">
                  apache-inlong-1.2.0-incubating-bin.tar.gz
                </a>
              </td>
              <td>
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.asc">ASC</a>]
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.sha512">SHA512</a>]
              </td>
            </tr>
            <tr>
              <td>Connector Binary file</td>
              <td>Jun 20, 2022</td>
              <td>
                <a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-sort-connectors.tar.gz">
                  apache-inlong-1.2.0-incubating-sort-connectors.tar.gz
                </a>
              </td>
              <td>
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.asc">ASC</a>]
                [<a href="https://downloads.apache.org/inlong/1.2.0-incubating/apache-inlong-1.2.0-incubating-src.tar.gz.sha512">SHA512</a>]
              </td>
            </tr>
            </tbody>
          </table>

          <br/>
          <h3>{dataSource.releaseTitle}</h3>
          {
              language === 'zh-CN' && <div>
                您必须 <a href="https://www.apache.org/info/verification.html">验证</a> 下载文件的完整性。
                我们为每个发布文件提供 OpenPGP 签名。此签名应与包含 InLong 发布经理的 OpenPGP 密钥的 <a
                  href="https://downloads.apache.org/incubator/inlong/KEYS">KEYS</a> 文件匹配。
                我们还为每个发布文件提供 <code>SHA-512</code> 校验和。下载文件后，您应该计算下载的校验和，并确保它与我们提供的相同。
              </div>
          }
          {
              language === 'en' && <div>
                You must <a href="https://www.apache.org/info/verification.html">verify</a> the integrity of the downloaded files.
                We provide OpenPGP signatures for every release file. This signature should be matched against the <a
                  href="https://downloads.apache.org/incubator/inlong/KEYS">KEYS</a> file which contains the OpenPGP keys of InLong's Release Managers.
                We also provide <code>SHA-512</code> checksums for every release file. After you download the file, you should calculate a checksum for your download, and make sure it is the same as ours.
              </div>
          }
          <br/>

          <h3>{dataSource.olderTitle}</h3>
          <p>{dataSource.olderPrompt}</p>

          <table  id="olderTable">
            <tbody>
            <tr>
              <td>Version</td>
              <td>Date</td>
              <td>Release notes</td>
              <td>Source</td>
              <td>Crypto files</td>
            </tr>
            {
              dataSource.olderData.map((data, i) => (
                  <tr key={i} index={i}>
                    <td>{data.version}</td>
                    <td>{data.date}</td>
                    <td>
                      <a href={data.releaseUrl}>{data.release}</a>
                    </td>
                    <td>
                      <a href={data.sourceUrl}>{data.source}</a>
                    </td>
                    <td>
                      [<a href={data.ascUrl}>{data.asc}</a>]
                      [<a href={data.shaUrl}>{data.sha}</a>]
                    </td>
                  </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </Layout>
  );
}
