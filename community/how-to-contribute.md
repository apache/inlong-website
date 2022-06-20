---
title: How to Contribute
sidebar_position: 1
---

The Apache InLong community welcomes contributions from anyone with a passion for distributed systems! InLong has many different opportunities for contributions -- write new examples/tutorials, add new user-facing libraries or participate on the documentation effort.

We use a review-then-commit workflow in InLong for all contributions.

**For larger contributions or those that affect multiple components:**

1. **Engage**: We encourage you to work with the InLong community on the [GitHub Issues](https://github.com/apache/inlong/issues) and [developer’s mailing list](/docs/contact) to identify good areas for contribution.
2. **Design:** More complicated contributions will likely benefit from some early discussion in order to scope and design them well.

**For all contributions:**

1. **Code:** The you-know-what part.
2. **Review:** Submit a pull request with your contribution to our [GitHub Repo](https://github.com/apache/inlong). Work with a committer to review and iterate on the code, if needed.
3. **Commit:** Once at least 2 InLong committer has approved the pull request, a InLong committer will merge it into the master branch (and potentially backport to stable branches in case of bug fixes).

We look forward to working with you!

## Engage

### Mailing list(s)

We discuss design and implementation issues on the [dev@inlong.apache.org](mailto:dev@inlong.apache.org) mailing list, which is archived [here](https://lists.apache.org/list.html?dev@inlong.apache.org). Join by emailing [`dev-subscribe@inlong.apache.org`](mailto:dev-subscribe@inlong.apache.org).

### GitHub Issues

We are using [GitHub Issues](https://github.com/apache/inlong/issues) as the issue tracking
and project management tool, as well as a way to communicate among a very diverse and distributed set of contributors. To be able to gather feedback, avoid frustration, and avoid duplicated efforts all InLong related work are being tracked there.

If you do not already have an GitHub account, sign up [here](https://github.com/signup).

If a quick [search](https://github.com/apache/inlong/issues) doesn’t turn up an existing GitHub issue for the work you want to contribute, create it. Please discuss your idea with a committer in GitHub or, alternatively, on the developer mailing list.

If there’s an existing GitHub issue for your intended contribution, please comment about your intended work. Once the work is understood, a committer will assign the issue to you. If an issue is currently assigned, please check with the current assignee before reassigning.

For moderate or large contributions, you should not start coding or writing a design document unless there is a corresponding GitHub issue assigned to you for that work. Any change requires an associated GitHub issue.

## Design

To avoid potential frustration during the code review cycle, we encourage you to clearly scope and design non-trivial contributions with the InLong community before you start coding.

We are using "InLong Improvement Proposals" for managing major changes to InLong. The list of all proposals is maintained in the InLong wiki at [this page](https://github.com/apache/inlong/wiki).

## Commit (committers only)

Once the code has been peer reviewed by a committer, the next step is for the committer to merge it into the Github repo.

Pull requests should not be merged before the review has approved from at least 2 committer.

For more about merging pull request, please refer to [this page](https://github.com/apache/inlong/pulls)

If you add a module or modify the content of the pom.xml file, you need to perform LICENSE maintenance for third-party dependencies. For details, refer to [How to maintain third-party dependencies](how-to-maintain-3rd-party-dependencies.md). 

## Report a security issue
InLong community cares deeply about the security and actively addresses any security issues as the top priority. 
We follow the Apache security guidelines for [handling security issues](https://www.apache.org/security/), please see the Apache doc about handling security issues. 
If you find any security issue, please send a vulnerability report to [security@apache.org](mailto:security@apache.org), the InLong security team will assess the issue immediately and work with the reporter on a plan to fix it. 
Please do not disclose the issue to any public forum before working with the security team.