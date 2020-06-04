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
      return await fetch(`${this.BASE_URL+  "/guides"}`, {
        method:'POST',
        headers: this.createHeaders(),
        body: item,
      });
    }

    // TOUR INQUIRIES

    async getAllTourInquiries() {
        return await fetch(this.BASE_URL + "/tourInquiries", {
          method: 'GET',
          headers: this.createHeaders()
        });
      }
    
      async getTourInquiryById(id) {
        return await fetch(`${this.BASE_URL+  "/tourInquiries"}/${id}`, {
          method: 'GET',
          headers: this.createHeaders()
        });
      }
    
      async deleteTourInquiry(id) {
        return await fetch(`${this.BASE_URL+  "/tourInquiries"}/${id}`, {
          method: 'DELETE',
          headers: this.createHeaders()
        });
      }
    
      async updateTourInquiry(item, tourInquiryId) {
          console.log("item ID: " +  tourInquiryId);
        return await fetch(`${this.BASE_URL+  "/tourInquiries"}/${tourInquiryId}`, {
          method:'PUT',
          headers: this.createHeaders(),
          body: item,
        });
      }
    
      async createTourInquiry(item) {
        return await fetch(`${this.BASE_URL+  "/tourInquiries"}`, {
          method:'POST',
          headers: this.createHeaders(),
          body: item,
        });
      }

      //PAYMENT REQUEST

      async createPaymentRequest(item) {
        return await fetch(`${this.BASE_URL+  "/paymentRequests"}`, {
          method:'POST',
          headers: this.createHeaders(),
          body: item,
        });
      }


    // //PAYMENT PROCESS WITHOUT PAYPAL YET
    async getDepositAmountByInquiryId(inquiryId) {
      return await fetch(`${this.BASE_URL+  "/getdepositamount"}/${inquiryId}`, {
        method: 'GET',
        headers: this.createHeaders()
      });
    }

    //PAYMENT PROCESS - PAYPAL
      
    async createPayment(item) {
      return await fetch(`${this.BASE_URL+  "/payments"}`, {
        method:'POST',
        headers: this.createHeaders(),
        body: item,
      });
    }
    //  async createPayment(item, tourInquiryId) {
    //     return await fetch(`${this.BASE_URL+  "/payments"}/${tourInquiryId}`, {
    //       method:'POST',
    //       headers: this.createHeaders(),
    //       body: item,
    //     }); 
    //   }

    //   async updatePayment(item, tourInquiryId) {
    //   return await fetch(`${this.BASE_URL+  "/payments"}/${tourInquiryId}`, {
    //     method:'PUT',
    //     headers: this.createHeaders(),
    //     body: item,
    //   });
    // }


  }
  
  export default Api;