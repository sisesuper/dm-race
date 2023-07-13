import axios from '@/utils/axios/Axios';

export default  (data, url,method='POST') => axios.request({
    data:data,
    url: url,
    header: {},
    method: method,
})
