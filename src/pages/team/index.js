import React, { useState }  from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import useBaseUrl from '@docusaurus/useBaseUrl';
import config from "../team/config.json";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import './index.less';

export default function() {
    const isBrowser = useIsBrowser();

    const [p1Animation, setP1Animation] = useState(false);
    const [p2Animation, setP2Animation] = useState(false);

    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    const { siteConfig } = useDocusaurusContext();
    const team = siteConfig.customFields.team;
    const contributors = siteConfig.customFields.contributors;
    const docContributors = siteConfig.customFields.docContributors;

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
                    <thead>
                        <tr>
                            <td><b>Apache ID</b></td>
                            <td><b>GitHub User Name</b></td>
                            <td><b>Public Name</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.members.map((member, i) => (
                                <tr key={i} index={i}>
                                    <td>{member.apacheID}</td>
                                    <td>{member.githubName}</td>
                                    <td>{member.publicName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h2>Committer</h2>
                <table>
                    <thead>
                        <tr>
                            <td><b>Apache ID</b></td>
                            <td><b>GitHub User Name</b></td>
                            <td><b>Public Name</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team.committers.map((committer, i) => (
                                <tr key={i} index={i}>
                                    <td>{committer.apacheID}</td>
                                    <td>{committer.githubName}</td>
                                    <td>{committer.publicName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <h2>Contributors</h2>
                <p>{dataSource.code_contributors}</p>
                <div className="contributors-div">
                    <ul id="conID" className="ul-flex">
                        {
                            contributors.map((contributor, i) => (
                                <li className="mb-2" key={i} index={i}>
                                    <a href={contributor.html_url} target="_blank">
                                        <img src={contributor.avatar_url} /><span>{contributor.login}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <p>{dataSource.doc_contributors}</p>
                <div className="contributors-div">
                    <ul id="docID" className="ul-flex">
                        {
                            docContributors.map((docContributor, i) => (
                                <li className="mb-2" key={i} index={i}>
                                    <a href={docContributor.html_url} target="_blank">
                                        <img src={docContributor.avatar_url} /><span>{docContributor.login}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Layout>
    );
}
