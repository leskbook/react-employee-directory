
import axios from "axios";
const url = 'https://randomuser.me/api/?results=30';

//api call
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ApiSearch: function () {
        return axios.get(url)

    }
}