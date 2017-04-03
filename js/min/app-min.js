! function($, o, e) {
    $(o).ready(function() {
        $(".menu-toggle").click(function() {
            $(".collapsible").slideToggle()
        }), $(".map").length && $(".map").gmap3({
            map: {
                options: {
                    maxZoom: 14
                }
            },
            marker: {
                address: "40 Sibley St, Detroit"
            }
        }, "autofit")
    }), $(e).load(function() {})
}(jQuery, document, window);
