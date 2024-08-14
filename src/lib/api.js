import axios from 'axios';
const base_url = 'https://yt-api.p.rapidapi.com';
const apikey = '3ca45cd138msh0f1626b0b69d2a9p17e52bjsn260c4f7ae56a';
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
