import axios from "axios";

export const fetchData = (db) => {
    switch (db) {
        case '/bigdata': {
            return axios.get('http://www.filltext.com/?rows=1000&' +
                'id={number|1000}&' +
                'firstName={firstName}&' +
                'delay=3&' +
                'lastName={lastName}&' +
                'email={email}&' +
                'phone={phone|(xxx)xxx-xx-xx}&' +
                'address={addressObject}&' +
                'description={lorem|32}');
        }
        case '/smalldata': {
            return axios.get('http://www.filltext.com/?rows=32&' +
                'id={number|1000}&firstName={firstName}&' +
                'lastName={lastName}&' +
                'email={email}&' +
                'phone={phone|(xxx)xxx-xx-xx}&' +
                'address={addressObject}&' +
                'description={lorem|32}');
        }
    }
}