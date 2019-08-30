const HttpClient = require("./HttpClient");

class SnowManager {
    constructor(config){
        this.config = config;
        this.http_client = new HttpClient(
            this.config.url,
            this.config.username,
            this.config.password
        );
    }

    getAllRows(tableName, queries = []){
        var query_params = {};
        var searchQueries = queries;
        if(this.config.app_name)
            searchQueries.push('sys_scope.name='+ this.config.app_name);
        else
            searchQueries.push('sys_scope='+ this.config.app_scope)
        query_params.sysparm_query = searchQueries.join('^');
        return new Promise((resolve, reject) => {
            this.http_client
                .get(tableName, query_params)
                .then((response) => {
                    try{
                        var files = response.body.result;
                        resolve(files);
                    } catch(err) {
                        reject(err);
                    }
                }, (err) => {
                    reject(err);
                });
        });
    }

    getSingleRow(tableName, sysId){
        var query_params = {
            'sys_id': sysId
        };

        if (this.config.app_name)
            query_params.sysparm_query = 'sys_scope.name=' + this.config.app_name;
        else
            query_params.sysparm_query = 'sys_scope=' + this.config.app_scope;
        return new Promise((resolve, reject) => {
            this.http_client
                .get(tableName, query_params)
                .then((response) => {
                    var result = response.body.result;
                    if (result != undefined && result.length > 0)
                        resolve(result[0]);
                    reject(new Error('No row found with given sys_id'));
                }, (err) => {
                    reject(err);
                });
        });
    }

    updateField(tableName, sysId, fieldName, data){
        return new Promise((resolve, reject) => {
            this.http_client
                .put(tableName, sysId, fieldName, data)
                .then((response) => {
                    try{
                        var files = response.body.result;
                        resolve(files);
                    } catch(err) {
                        reject(err);
                    }
                }, (err) => {
                    reject(err);
                });
        });
    }
}

module.exports = SnowManager;