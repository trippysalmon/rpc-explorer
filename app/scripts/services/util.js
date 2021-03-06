'use strict';
/*global $:false */

function errorCallbackScoped(myscope)
{
    return function (data) {
        if (typeof data === 'string') {
            myscope.error = data;
        } else if (data["data"] && data["data"]["error"]) {
            myscope.error = data["data"]["error"];
        } else {
            myscope.error = JSON.stringify(data, null, 4);
        }
    };
}

angular.module('rpcExplorerApp')
    .service('SrvUtil', function SrvUtil() {

        var srv = {};
        srv.errorCallbackScoped = errorCallbackScoped;
        return srv;
    });
