const process = require('process');
const fs = require('fs');
const axios = require('axios');

const contributorsFile = './static/js/contributors.json';
const docContributorsFile = './static/js/doc-contributors.json';

class Contributors {
  constructor(contributorsFile,docContributorsFile) {
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


  async getContributors (page= 1, per_page= 100, extraContributors = [], list = []) {
    await axios.get(`https://api.github.com/repos/apache/inlong/contributors?page=${page}&per_page=${per_page}`).then(result =>{
      let data = result.data;
      list.push(...data);
      if(data.length === per_page) {
        page++;
        this.getContributors(page, per_page, extraContributors, list);
      }else {
        const repoContributors = [...list, ...extraContributors];
        const yamlString = JSON.stringify(repoContributors);
        fs.writeFileSync(this.contributorsFile, yamlString);
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
        const yamlString = JSON.stringify(repoContributors);
        fs.writeFileSync(this.docContributorsFile, yamlString);
        console.log('writing to doc contributors succeeded');
      }
    });
  }

}

new Contributors(contributorsFile, docContributorsFile).init()

