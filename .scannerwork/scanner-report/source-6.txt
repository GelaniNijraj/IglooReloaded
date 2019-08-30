const superagent = require('superagent');

const CONSTANTS = require('./Constants');

class HttpClient {
    constructor(url, username, password) {
        this.snow_url = url;
        this.username = username;
        this.password = password;
        this.api_path = CONSTANTS.SNOW_API_PATH;
    }

    _getBase64(string) {
        return Buffer.from(string).toString('base64')
    }

    _getAuthHeader(username,password) {
        return "Basic " + this._getBase64(username+":"+password);
    }

    get(table_name, query_params=null, sys_id=null) {
        const auth_header = this._getAuthHeader(this.username, this.password);
        var url = this.snow_url + "/" + this.api_path + "table/" + table_name;
        console.log("Calling " + url);
        return superagent
            .get(url)
            .set('Authorization', auth_header)
            .query(query_params)
    }

    put(tableName, sysId, fieldName, data) {
        console.log("Putting " + tableName);
        const auth_header = this._getAuthHeader(this.username, this.password);
        var url = this.snow_url + "/" +  this.api_path + "table/" + tableName + "/" + sysId;
        console.log(url);
        var body = {};
        body[fieldName] = data;
        var payload = JSON.stringify(body);
        
        return superagent
            .put(url)
            .send(payload)
            .set('Authorization', auth_header)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
    }
}

module.exports = HttpClient;