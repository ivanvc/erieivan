function ready(fn) {
    if (document.readyState != 'loading'){
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

ready(function() {
    //skrollr.init()
    var baseMapStyle = function(center) {
        return {
            center: church,
            zoom: 17,
            styles: [
                {
                    featureType: 'all',
                    stylers: [
                        { saturation: -90 }
                    ]
                },{
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [
                        { hue: '#D7D5BE' },
                        { saturation: 10 }
                    ]
                },{
                    featureType: 'poi',
                    elementType: 'geometry',
                    stylers: [
                        { hue: '#cfa2b4' },
                        { saturation: 10 }
                    ]
                },{
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [
                        { hue: '#6A939C' },
                        { saturation: 50 }
                    ]
                },{
                    featureType: 'transit',
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                }, {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                }
            ]
        }
    }

    var church = {lat: 19.4289619, lng: -99.1330934}
    var reception = {lat: 19.4291389, lng: -99.1314142}
    var map = new google.maps.Map(document.getElementById('map'), baseMapStyle(church))

    var marker = new google.maps.Marker({
        position: church,
        map: map,
        title: 'Hello World!',
        icon: '/img/church.png'
    });
    var marker2 = new google.maps.Marker({
        position: reception,
        map: map,
        icon: '/img/reception.png'
    })
})
