const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/api/users');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/users`, {user: data});
    return response.data;
}