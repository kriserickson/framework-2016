/*global Framework7, Dom7 */

(function (Framework7, $$) {
    'use strict';



    function req (path, success, error, retry) {
        retry = retry || 0;
        return $$.ajax({
            url: 'https://api.github.com/' + path,
            success: success,
            error: function (xhr) {
                if (retry < urls.length - 1) {
                    req(path, success, error, retry += 1);
                } else {
                    error(xhr);
                }
            }
        });
    }

    var githubapi = {

        users: function (success, error) {
            return req('users', success, error);
        }

    };

    window.githubapi = githubapi;

}(Framework7, Dom7));
