import axios from 'axios';
const base_url = 'https://yt-api.p.rapidapi.com';
const apikey = 'ce95d8b152msha3f02ca425dd456p1fbe74jsnac4dfa31160a';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
  },
};

export const fetchDataFromSrcNew = async (selectCatagory) => {
  try {
    const response = await axios.request(
      `${base_url}${selectCatagory}`,
      options
    );
    return await response.data.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchDataForVideoDtls = async (id) => {
  const options = {
    method: 'GET',
    url: `${base_url}/video/info`,
    params: { id: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchannelAbout = async (id) => {
  const options = {
    method: 'GET',
    url: `${base_url}/channel/about`,
    params: { id: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchRelatedVideo = async (id) => {
  const options = {
    method: 'GET',
    url: `${base_url}/related`,
    params: { id: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchSearchData = async (query) => {
  const options = {
    method: 'GET',
    url: `${base_url}/search`,
    params: { query: query },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchChannelHome = async (id) => {
  const options = {
    method: 'GET',
    url: `${base_url}/channel/home`,
    params: { id: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};

export const fetchChannelShorts = async (id) => {
  const options = {
    method: 'GET',
    url: `${base_url}/channel/shorts`,
    params: { id: id },
    headers: {
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'yt-api.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return await response.data;
  } catch (error) {
    throw new Error(`Error fetching data from source: ${error.message}`);
  }
};
