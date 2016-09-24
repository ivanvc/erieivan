function ready(fn) {
    if (document.readyState != 'loading'){
        fn()
    } else {
        document.addEventListener('DOMContentLoaded', fn)
    }
}

ready(function() {
    var form = document.getElementById('rsvp-form')
    var button = form.querySelectorAll("input[type=submit]")[0]
    form.addEventListener('submit', function(ev) {
        ev.preventDefault()
        button.setAttribute('disabled', true)
        var request = new XMLHttpRequest()
        request.open('POST', ev.target.getAttribute('action'), true)
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
        var email = ev.target.querySelectorAll('input[name=email]')[0].value
        var phone = ev.target.querySelectorAll('input[name=phone]')[0].value
        var name = ev.target.querySelectorAll('input[name=name]')[0].value
        request.send('email=' + email + '&phone=' + phone + '&name=' + name)

        request.onload = function() {
            var resp = request.responseText
            if (request.status >= 200 && request.status < 400) {
                ev.target.innerHTML = '<h2>' + resp + '</h2>'
            } else {
                ev.target.insertBefore('<h3>' + resp + '</h3>', ev.target.firstChild)
                button.setAttribute('disabled', false)
            }
        }
        request.onerror = function() {
            ev.target.insertBefore('<h3>Por favor vuelve a intentarlo</h3>', ev.target.firstChild)
            button.setAttribute('disabled', false)
        }
    })
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
