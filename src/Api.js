class Api {

    constructor(authToken) {
      this.authToken = authToken;
    }
  
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  
    //BASE_URL = 'http://localhost:8080/api/v1';

    
    BASE_URL =  process.env.REACT_APP_PROXY;
  
    createHeaders() {
      console.log(process.env);
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
        return await fetch(this.BASE_URL + "/tour-inquiries", {
          method: 'GET',
          headers: this.createHeaders()
        });
      }
    
      async getTourInquiryById(id) {
        return await fetch(`${this.BASE_URL+  "/tour-inquiries"}/${id}`, {
          method: 'GET',
          headers: this.createHeaders()
        });
      }
    
      async deleteTourInquiry(id) {
        return await fetch(`${this.BASE_URL+  "/tour-inquiries"}/${id}`, {
          method: 'DELETE',
          headers: this.createHeaders()
        });
      }
    
      async updateTourInquiry(item, tourInquiryId) {
          console.log("item ID: " +  tourInquiryId);
        return await fetch(`${this.BASE_URL+  "/tour-inquiries"}/${tourInquiryId}`, {
          method:'PUT',
          headers: this.createHeaders(),
          body: item,
        });
      }
    
      async createTourInquiry(item) {
        return await fetch(`${this.BASE_URL+  "/bookings"}`, {
          method:'POST',
          headers: this.createHeaders(),
          body: item,
        });
      }

      //PAYMENT REQUEST
      async getAllPaymentRequests() {
        return await fetch(this.BASE_URL + "/payment-requests", {
          method: 'GET',
          headers: this.createHeaders()
        });
      }

      async createPaymentRequest(item) {
        return await fetch(`${this.BASE_URL+  "/payment-requests"}`, {
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
      return await fetch(`${this.BASE_URL+  "/makepayment"}`, {
        method:'POST',
        headers: this.createHeaders(),
        body: item,
      });
    }
    


  }
  
  export default Api;