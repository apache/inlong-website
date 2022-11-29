---
title: How to verify release candidate
sidebar_position: 7
---

## Download the release candidate
`release_version` is the upcoming version number, such as 1.4.0; `rc_version` is the Release Candidate, such as RC0, RC1...; KEY_ID is the GPG Key ID you created.
```shell
svn co https://dist.apache.org/repos/dist/dev/inlong/${release_version}-${rc_version}/
```

## verify the version
### Check whether the release package is complete
- Whether to include the source package
- Whether to include the signature and sha512 of the source package
- If a binary package is uploaded, the signature and sha512 are also checked

### Check the GPG signature
- Import public key
```shell
# Download KEYS
curl https://downloads.apache.org/inlong/KEYS > KEYS
# Import KEYS to local
gpg --import KEYS
```

- trust the public key
  Replace `THE_KEY_USED` with the KEY used for this version.
```shell
# After execution, enter trust -> 5(I trust ultimately) -> Y(Yes) -> quit
gpg --edit-key THE_KEY_USED
```

- Check the signature using the following command
```shell
cd ${release_version}-${rc_version}
for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i; done
```

:::note
If the keyword **`Good signature`** appears, the signature is correct.
:::

### Check the file content of the source package
Unzip `apache-inlong-${release_version}-src.tar.gz` and check the following:
- Whether the LICENSE and NOTICE file exists and whether the content is correct
- Whether all files have an ASF License header
- Whether the source code can be compiled normally
- Whether the single test can run through

:::note
You can check the compilation and unit test through `mvn clean package install`. If the compilation fails, clean up the local warehouse first.
:::

### Check binary packages
Unzip `apache-inlong-${release_version}-bin.tar.gz` and `apache-inlong-${release_version}-sort-connectors.tar.gz` and check the following:
- Whether the LICENSE and NOTICE file exists and whether the content is correct
- Whether the normal deployment is successful
- Deploy the test environment and verify whether the production and consumption can run normally
- Verify what you think might be going wrong

## Reply the email
If the verification is passed, you can refer to the following template for email replies.
```shell
+1 from me, and I checked the following items:
- [X] Download links are valid.
- [X] Checksums and PGP signatures are valid.
- [X] Source code artifacts have correct names matching the current release.
- [X] LICENSE and NOTICE files are correct for the repository.
- [X] All files have license headers if necessary.
- [X] No compiled archives bundled in the source archive.
- [X] Building is OK.
```

