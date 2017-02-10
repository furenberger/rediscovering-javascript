/**
 * Created by ryanfurness on 2/9/17.
 */
var flickrapi = require("flickrapi");

var Flickr = require("flickrapi"),
    flickrOptions = {
        api_key: "95c50764c967839894e6f10cc223b660",
        secret: "0da77d33285a5838",
        user_id: '58052935@N00'
    };


Flickr.authenticate(flickrOptions, flickrapi.downsync());