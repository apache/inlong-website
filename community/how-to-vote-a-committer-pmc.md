---
title: How to Vote a Committer or PMC Member
sidebar_position: 5
---

## Initiate discussion in the community private mailing group
Any InLong PMC member can initiate a voting discussion.
After PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on InLong's private mailing list.
In the discussion email, the proposer should clearly state the candidate's contribution and give the address for reviewing the corresponding contribution, so that everyone can discuss and analyze it.
The discussion email is sent to private@inlong.apache.org. The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email.
The following is a template  discussion email:
```shell
[DISCUSS] ${Candidate_Full_Name} as an InLong ${Committer or PMC Member}
 
I nominate ${Candidate_Full_Name} as an InLong ${Committer or PMC Member}

Judging from the contributions in recent months, ${Candidate_Full_Name} has submitted many implementations[1],[2] to the project and improved the ${Candidate_Module_Name} module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
 
So I nominated ${Candidate_Full_Name} as a ${Committer or PMC Member} of the InLong project.
 
1. https://github.com/apache/inlong/issues/created_by/${Candidate_GitHub_ID} 
2. https://github.com/apache/inlong/commits?author=${Candidate_GitHub_ID}
```

:::caution
You can communicate with candidates in advance to obtain his/her full name, and replace the `${Candidate_Full_Name}`.
:::

## Initiate vote in the community private mailing group
If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC Member election vote on InLong's private mailing list.
The voting email is sent to private@inlong.apache.org for at least 72 hours, and at least 3 votes +1 passed; if 0 votes or 1 vote -1 vote, the vote will fail; if a -1 vote is initiated, the voter needs to EXPLAIN the reason for the -1 score clearly so that everyone can understand and know.
The following is a template  poll email: 
```shell
[VOTE] ${Candidate_Full_Name} as an InLong ${Committer or PMC Member}
 
Judging from the contributions in recent months, ${Candidate_Full_Name} has submitted many implementations[1],[2],[3] to the project and improved the ${Candidate_Module_Name} module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
I think making him a ${Committer or PMC Member} will be a recognition of his outstanding work for InLong. So, I am happy to call VOTE to accept ${Candidate_Full_Name} as an InLong ${Committer or PMC Member}.
 
Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:
[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason  
  
Here are three links to his contributions to InLong:
1. Issues: https://github.com/apache/inlong/issues/created_by/${Candidate_GitHub_ID}
2. PRs   : https://github.com/apache/inlong/pulls/created_by/${Candidate_GitHub_ID}
3. Others:  https://xxx.com/xxx/xxx/?q=${Candidate_GitHub_ID}
```

## Feedback on voting results
After the voting email is over, the initiator of the vote needs to `remind the voting end` in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to private@inlong.apache.org.
The following is a template  vote summary email:
```shell
[RESULTS][VOTE] ${Candidate_Full_Name} as an InLong ${Committer or PMC Member}

Hi everyone,

The vote for "${Candidate_Full_Name} as an InLong ${Committer or PMC Member}" has PASSED and closed now.

The result is as follows:

3 PMC Member +1 Votes
- ${the name 1 of PMC Member}
- ${the name 2 of PMC Member}
- ${the name 3 of PMC Member}

Vote thread:
${vote_thread_url}

Then I'm going to invite ${Candidate_Full_Name} to join us.

Thanks for everyone's support!   
```

:::caution
If it is not passed, the result is "The vote for "${Candidate_GitHub_ID} as an InLong ${Committer or PMC Member}" has FAILED and closed now."
:::

## Newly added PMC Member notification email
This step is only processed for the PMC Member that passed the vote. If the election is Committer, this step is skipped and not executed.
Voting initiators need to send notification emails to Board’s mailing group and wait at least 72 hours; email owners send board@apache.org and CC private@inlong.apache.org; Board will analyze compliance Until there is no doubt.
The following is an example of a new PMC Member notification email:
```shell
[NOTICE] ${Candidate_Full_Name} for Apache InLong PMC

Hi everyone,

Apache InLong proposes to invite ${Candidate_Full_Name} to join the PMC.

The vote result is available here: ${vote_thread_url}

Thanks!
```

## Initiate invitation email
After the result summary email is sent, the poll initiator must send an invitation email to the candidates.
The invitation email is sent to the invitee with a CC to private@inlong.apache.org; the invited candidate must reply to accept or decline the invitation through the specified email address.
The following is an example of an email inviting candidates:
```shell
[Invitation] Invitation to join Apache InLong as a ${Committer or PMC Member}

Hi ${Candidate_Full_Name},

In recognition of your contributions to Apache InLong, the InLong PMC
has recently voted to add you as a ${Committer or PMC Member}. The a ${Committer or PMC Member} role gives
you access to merge patches into Apache InLong and is also a
stepping-stone towards membership in the
Project Management Committee (PMC). We hope that you accept
this invitation and continue to help us make Apache InLong better.

If you'd like to accept, you will need to send an Individual
Contributor License Agreement (ICLA) to secretary@apache.org, CCing
private@inlong.apache.org, and request an Apache account name as
described at http://www.apache.org/dev/new-committers-guide.html if
you don’t already have one, once you get an account name, or if you
have one already, please email it to me.

NOTICE: when you fill out ICLA file, the value of preferred Apache id(s)
        needs to be a valid ID, including:
        1. The ID must not already be in use in https://people.apache.org/committer-index.html;
        2. The characters "-" and "_" are not allowed in id;
        3. The id must consist of lowercase alphanumeric characters only,
           start with an alphabetic character, have a minimum length of 3 characters,
           and have no special characters.

With the expectation of your acceptance, welcome!

The Apache InLong PMC
```

:::note
When signing the ICLA, the candidate needs to write the project name of “Apache InLong” in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.
:::

## Processing after accepting the invitation
Create an Apache account and add the candidate account to the project.
After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an apache account according to the guidelines.
The voting initiator needs to add project team members, open a permission account for the apache project, and confirm that the candidate’s Apache account has been added to the [Apache InLong](http://people.apache.org/phonebook.html?project=inlong) project.

## ANNOUNCE to the community
After the above steps are completed, the vote initiator must send a notification email to the dev@inlong.apache.org mail group. The following is a template  notification email:
```shell
[ANNOUNCE] New ${Committer or PMC Member}: ${Candidate_Full_Name}

Hi everyone,

The Project Management Committee(PMC) for Apache InLong has invited ${Candidate_Full_Name} to become a ${Committer or PMC Member} and we are pleased to announce that he has accepted.

${Candidate_Full_Name} is being active in the InLong community, and we are glad to see his more interactions with the community in the future.

Welcome ${Candidate_Full_Name}, and please enjoy your journey.:)

Thanks!
   
```  
 
At this point, the entire process is completed, and the candidate officially becomes the Committer or PMC Member of the project.

