// vim: set et sw=4 ts=4 sts=4 ft=javascript fdm=marker ff=unix fenc=utf8 nobomb:
/**
 * @author mingcheng<lucky#gracecode.com>
 * @date   2013-11-15
 */

Zepto(function($) {
    chrome.tabs.getSelected(null, function(tab) {
        if (tab.favIconUrl) {
            $("#fav").attr("src", tab.favIconUrl).show();
        }
        jQuery('#content').qrcode({
            text    : tab.url
        });
    });
});
