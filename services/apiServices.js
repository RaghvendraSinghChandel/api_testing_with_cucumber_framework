const axios = require('axios');
const config = require('../config/default');

class ApiService {
    constructor() {
        this.baseUrl = config.baseUrl;
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
    }

    async post(endpoint, data) {
        try {
            const response = await axios.post(`${this.baseUrl}${endpoint}`, data, { headers: this.headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async get(endpoint) {
        try {
            const response = await axios.get(`${this.baseUrl}${endpoint}`, { headers: this.headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async patch(endpoint, data=null) {
        try {
            const response = await axios.patch(`${this.baseUrl}${endpoint}`,data || {}, {headers: this.headers});
            return response
        } catch (error) {
            return error.response;
        }
    }

    async put(endpoint, data = null) {
        try {
            const response = await axios.put(`${this.baseUrl}${endpoint}`,data || {}, {headers: this.headers});
            return response
        } catch (error) {
            return error.response;
        }
    }

    async delete(endpoint) {
        try {
            const response = await axios.delete(`${this.baseUrl}${endpoint}`, {headers: this.headers});
            return response
        } catch (error) {
            return error.response;
        }
    }
}

module.exports = ApiService;
