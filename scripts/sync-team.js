const process = require('process');
const fs = require('fs');
const axios = require('axios');

const contributorsFile = './config/contributors.json';
const docContributorsFile = './config/doc-contributors.json';

class Contributors {
  constructor(contributorsFile, docContributorsFile) {
    this.contributorsFile = contributorsFile;
    this.docContributorsFile = docContributorsFile;
  }

  async init() {
    try {
      console.log('start...');
      await this.getAllRepoData();
    } catch (err) {
      console.log(err);
      process.exit(1)
    }
  }

  async getAllRepoData() {
    await this.getContributors();
    await this.getDocContributors();
  }

  async writeFile(file, data) {
    try {
      const jsonString = JSON.stringify(data, null, 2);
      fs.writeFileSync(file, jsonString);
      console.log('write success');
    } catch (err) {
      console.error(err)
    }
  }

  async getContributors (page= 1, per_page= 100, extraContributors = [], list = []) {
    await axios.get(`https://api.github.com/repos/apache/inlong/contributors?page=${page}&per_page=${per_page}`).then(result =>{
      let data = result.data;
      list.push(...data);
      if(data.length === per_page) {
        page++;
        this.getContributors(page, per_page, extraContributors, list);
      }else {
        const repoContributors = [...list, ...extraContributors];
        this.writeFile(this.contributorsFile, repoContributors);
        console.log('writing to contributors succeeded');
      }
    });
  }

  async getDocContributors (page= 1, per_page= 100, extraContributors = [], list = []) {
    await axios.get(`https://api.github.com/repos/apache/inlong-website/contributors?page=${page}&per_page=${per_page}`).then(result =>{
      let data = result.data;
      list.push(...data);
      if(data.length === per_page) {
        page++;
        this.getDocContributors(page, per_page, extraContributors, list);
      }else {
        const repoContributors = [...list, ...extraContributors];
        this.writeFile(this.docContributorsFile, repoContributors);
        console.log('writing to doc contributors succeeded');
      }
    });
  }

}

new Contributors(contributorsFile, docContributorsFile).init()

