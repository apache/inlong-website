---
title: How to vote a Committer or PMC
sidebar_position: 5
---

## Initiate discussion in the community private mailing group
   Any InLong PMC member can initiate a voting discussion.
   After PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on InLong's private mailing list.
   In the discussion email, the proposer should clearly state the candidate's contribution and give the address for reviewing the corresponding contribution, so that everyone can discuss and analyze it.
   The discussion email is sent to private@inlong.apache.org. The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email.
   The following is a sample discussion email:
   ```shell
    [DISCUSS] YYYYY as an InLong XXXXXX
     
    I nominate YYYYY as an InLong XXXXXX
    
    Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
     
    So I nominated YYYYY as XXXXXX of the InLong project.
     
    1. https://github.com/apache/inlong/issues/created_by/YYYYY 
    2. https://github.com/apache/inlong/commits?author=YYYYY 
   ```
    
## Initiate vote in the community private mailing group
   If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC election vote on InLong's private mailing list.
   The voting email is sent to private@inlong.apache.org for at least 72 hours, and at least 3 votes +1 passed; if 0 votes or 1 vote -1 vote, the vote will fail; if a -1 vote is initiated, the voter needs to EXPLAIN the reason for the -1 score clearly so that everyone can understand and know.
   The following is a sample poll email: 
   ```shell
    [VOTE] YYYYY as an InLong XXXXXX
     
    Judging from the contributions in recent months, YYYYY has submitted many implementations[1],[2],[3] to the project and improved the management module for the project. During the optimization and improvement period of the project, it is hoped that more people will participate in the actual project optimization and improvement, to let the project more perfect and easier to use.
    I think making him a XXXXXX will be a recognition of his outstanding work for InLong. So, I am happy to call VOTE to accept YYYYY as an InLong XXXXXX.
     
    Voting will continue for at least 72 hours or until the required number of votes is reached.
    
    Please vote accordingly:
    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason  
      
    Here are three links to his contributions to InLong:
    1. Issues: https://github.com/apache/inlong/pulls?q=YYYYY
    2. PRs   : https://github.com/apache/inlong/issues?q=YYYYY
    3. Others:  https://xxx.com/xxx/xxx/?q=YYYYY
   ```

## Feedback on voting results
   After the voting email is over, the initiator of the vote needs to remind the voting end in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to private@inlong.apache.org.
   The following is a sample vote summary email:
   ```shell
   [RESULTS][VOTE] YYYYY as an InLong XXXXXX
   
   Hi everyone,

   The vote for "YYYYY as an InLong XXXXXX" has PASSED and closed now.

   The result is as follows:

   3 PMC  +1 Votes
   - aaa
   - bbb
   - ccc

   Vote thread:
   https://lists.apache.org/thread/aaaaaxxxx

   Then I'm going to invite YYYYY to join us.

   Thanks for everyone's support!   
   ```
   Note: If it is not passed, the result is "The vote for "YYYYY as an InLong XXXXXX" has FAILED and closed now."

## Newly added PMC notification email
   This step is only processed for the PMC that passed the vote. If the election is Committer, this step is skipped and not executed.
   Voting initiators need to send notification emails to Board’s mailing group and wait at least 72 hours; email owners send board@apache.org and CC private@inlong.apache.org; Board will analyze compliance Until there is no doubt.
   The following is an example of a new PMC notification email:
   ```shell
   [NOTICE] YYYYY for Apache InLong PMC
   
   Hi everyone,

   Apache InLong proposes to invite YYYYY to join the PMC.

   The vote result is available here: https://lists.apache.org/...
 
   Thanks!
   ```

## Initiate invitation email
   After the result summary email is sent, the poll initiator must send an invitation email to the candidates.
   The invitation email is sent to the invitee with a CC to private@inlong.apache.org; the invited candidate must reply to accept or decline the invitation through the specified email address.
   The following is an example of an email inviting candidates:
   ```shell
   [Invitation] Invitation to join Apache InLong as a XXXXXX
   
   Hi YYYYY,

   In recognition of your contributions to Apache InLong, the InLong PMC
   has recently voted to add you as a XXXXXX. The XXXXXX role gives
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

## Processing after accepting the invitation
   Create an Apache account and add the candidate account to the project.
   After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an apache account according to the guidelines.
   When signing the ICLA, the candidate needs to write the project name of “Apache InLong” in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.
   The voting initiator needs to add project team members, open a permission account for the apache project, and confirm that the candidate’s Apache account has been added to the project address: http://people.apache.org/phonebook.html?project=inlong.

## ANNOUNCE to the community
   After the above steps are completed, the vote initiator must send a notification email to the dev@inlong.apache.org mail group. The following is a sample notification email:

   ```shell
   [ANNOUNCE] New XXXXXX: YYYYY
   
   Hi everyone,
   
   The Project Management Committee(PMC) for Apache InLong has invited YYYYY to become a XXXXXX and we are pleased to announce that he has accepted.

   YYYYY is being active in the InLong community, and we are glad to see his more interactions with the community in the future.
   
   Welcome YYYYY, and please enjoy your journey.:)

   Thanks!
      
   ```   
 
At this point, the entire process is completed, and the candidate officially becomes the Committer or PMC of the project.

