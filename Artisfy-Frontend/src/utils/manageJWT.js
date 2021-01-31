import moment from 'moment';
import jwt_decode from 'jwt-decode'

const manageJWT = () => {
    if (localStorage.getItem("jwtToken") !== null) {
        var jwtToken = ''
        jwtToken = localStorage.getItem('jwtToken')

        var createdAt = moment.unix(jwt_decode(jwtToken).createdAt).format("DD/MM/YYYY hh:mm:ss");
        var expiredAt = moment.unix(jwt_decode(jwtToken).expiredAt).format("DD/MM/YYYY hh:mm:ss");
        var now = moment().format("DD/MM/YYYY hh:mm:ss");

        var created = moment(createdAt, "DD/MM/YYYY hh:mm:ss");
        var expired = moment(expiredAt, "DD/MM/YYYY hh:mm:ss");
        var actual = moment(now, "DD/MM/YYYY hh:mm:ss");

        var diff = expired.diff(created, 'seconds');
        var diffActual = expired.diff(actual, 'seconds');


        return {
            createdAt,
            expiredAt,
            diff,
            diffActual
        }

    } else {
        let diffActual = 0
        return {
            diffActual   
        }
    }

}

export default manageJWT;
