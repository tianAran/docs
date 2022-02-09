function kiwi_geolocate(which) {
    var ff = kiwi_isFirefox();
    if (ff && ff <= 28) return;

    var server;
    if (which == undefined) which = (new Date()).getSeconds();
    which = which % 3;
    switch (which) {
        case 0:
            server = 'ipapi.co/json';
            break;
        case 1:
            server = 'get.geojs.io/v1/ip/geo.json';
            break;
        case 2:
            server = 'ifconfig.io/all.json';
            break;
        default:
            break;
    }

    kiwi_ajax('https://' + server,
        function(json) {
            if (json.AJAX_error === undefined) {
                console.log('GEOLOC ' + server);
                console.log(json);
                geoloc_json(json);
            } else {
                if (geo.retry++ < 3) {
                    kiwi_geolocate(which + 1);
                } else {
                    console.log('AdBlock enabled, using other APIs...');
                    kiwi_ajax('https://api.wolfx.jp/geoip.php', function(json) {
                        json = {
                            city: json.city,
                            country: json.country_name
                        };
                        console.log(json);
                        geoloc_json(json);
                    }, null, 5000);
                }
            }
        }, null, 5000
    );
}
