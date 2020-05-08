const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=92595890d842b311067612ad582ab2fb`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}