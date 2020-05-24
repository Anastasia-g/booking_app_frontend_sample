class Api {

    constructor(authToken) {
      this.authToken = authToken;
    }
  
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  
    BASE_URL = 'http://localhost:8080/api/v1';
  
    createHeaders() {
      //  console.log(this.authToken);
      return this.authToken ? {
        ...this.headers,
        'Authorization': 'Bearer ' + this.authToken
      } : this.headers;
    }
  
    async getAllGuides() {
      return await fetch(this.BASE_URL + "/guides", {
        method: 'GET',
        headers: this.createHeaders()
      });
    }
  
    async getGuideById(id) {
      return await fetch(`${this.BASE_URL+  "/guides"}/${id}`, {
        method: 'GET',
        headers: this.createHeaders()
      });
    }
  
    async deleteGuide(id) {
      return await fetch(`${this.BASE_URL+  "/guides"}/${id}`, {
        method: 'DELETE',
        headers: this.createHeaders()
      });
    }
  
    async updateGuide(item, guideid) {
        console.log("item ID: " +  guideid);
      return await fetch(`${this.BASE_URL+  "/guides"}/${guideid}`, {
        method:'PUT',
        headers: this.createHeaders(),
        body: item,
      });
    }
  
    async createGuide(item) {
      return await fetch(this.BASE_URL +  "/guides", {
        method:'POST',
        headers: this.createHeaders(),
        body: JSON.stringify(item),
      });
    }
  }
  
  export default Api;