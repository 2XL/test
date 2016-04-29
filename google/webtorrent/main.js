if (WebTorrent.WEBRTC_SUPPORT) {
    console.info("WEBRTC ROCKS!!!")
} else {
    console.error("No webrtc support")
}


var client = new WebTorrent({
/*
    dht: Boolean | Object,   // Enable DHT (default=true), or options object for DHT
    maxConns: Number,      // Max number of connections per torrent (default=55)
    nodeId: String | Buffer, // DHT protocol node ID (default=randomly generated)
    peerId: String | Buffer, // Wire protocol peer ID (default=randomly generated)
    rtcConfig: Object,     // RTCPeerConnection configuration object (default=STUN only)
    tracker: Boolean,      // Whether or not to enable trackers (default=true)
    wrtc: Object           // Custom webrtc implementation (in node, specify the [wrtc](https://www.npmjs.com/package/wrtc) or [electron-webrtc](https://github.com/mappum/electron-webrtc) package)
*/
});

var torrentID = ""; // xD
/**
torrentId can be one of:

* magnet uri (string)
* torrent file (buffer)
* info hash (hex string or buffer)
* parsed torrent (from parse-torrent)
* http/https url to a torrent file (string)
* filesystem path to a torrent file (string)
*/

client.add(torrentID, {
/*
    announce: [],              // Torrent trackers to use (added to list in .torrent or magnet uri)
    getAnnounceOpts: Function, // Custom callback to allow sending extra parameters to the tracker
    maxWebConns: Number,       // Max number of simultaneous connections per web seed [default=4]
    path: String,              // Folder to download files to (default=`/tmp/webtorrent/`)
    store: Function            // Custom chunk store (must follow [abstract-chunk-store](https://www.npmjs.com/package/abstract-chunk-store) API)
*/
}, /* ontorrent */ function (torrent) {

    // this event callback will be called when THIS torrent is ready to be used

    // Torrents can contain many files.
    // Lets use the first
    var file = torrent.files[0];

    // Display the file by adding it to the DOM. supports video, audio, image, etc. files

    file.appendTo('body');

});

// https://github.com/feross/webtorrent/blob/master/docs/api.md
// mirar el codigo fuente de WebTorrent i replicar el comportamiento

