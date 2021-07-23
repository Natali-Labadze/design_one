window.onload = function() {
    initMap();
};

function initMap() {

    //ad options and new map
    var options = {
        center: { lat: 41.7076, lng: 44.7628 },
        zoom: 16
    }
    var map = new google.maps.Map(document.getElementById("map"), options);

    //listen for click on map
    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({ coords: event.latLng }, { iconImage: '../images/map_icon.svg' });
    })

    var markers = [{
                coords: { lat: 41.7076, lng: 44.7628 },
                iconImage: '../images/map_icon_2.svg',
                content: `
        <div class="map_content">
            <div class="map_info">
                <svg class="map_svg_icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Group_407" data-name="Group 407" transform="translate(-284.301 -672.301)">
                    <rect id="Rectangle_272" data-name="Rectangle 272" width="50" height="50" transform="translate(284.301 672.301)" fill="rgba(255,255,255,0)"/>
                    <path id="location-point" d="M33.378,7.01a17.761,17.761,0,0,0-24.74,0,16.87,16.87,0,0,0,0,24.218L19.5,41.884a2.093,2.093,0,0,0,2.928,0L33.378,31.127a16.8,16.8,0,0,0,0-24.117ZM30.43,28.241,21.008,37.5l-9.422-9.263a12.844,12.844,0,0,1,.006-18.435,13.522,13.522,0,0,1,18.832,0A12.844,12.844,0,0,1,30.43,28.241ZM14.823,12.924a8.589,8.589,0,0,0,0,12.311,9.025,9.025,0,0,0,9.642,1.909A8.7,8.7,0,0,0,30,19.18a8.466,8.466,0,0,0-2.6-6.155,9,9,0,0,0-12.576-.1Zm9.669,9.445a4.881,4.881,0,0,1-6.07.623,4.648,4.648,0,0,1-1.795-5.711,4.825,4.825,0,0,1,5.379-2.824,4.729,4.729,0,0,1,3.868,4.622,4.657,4.657,0,0,1-1.484,3.29Z" transform="translate(288.303 675.063)" fill="#e4190b"/>
                    </g>
                </svg>
                <h3 class="map_title">თბილისი, ცოტნე დადიანის 135ა</h3>
            </div>
            <div class="map_info">
                <svg class="map_svg_icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                    <g id="Group_410" data-name="Group 410" transform="translate(-913.97 -687.97)">
                    <rect id="Rectangle_275" data-name="Rectangle 275" width="50" height="50" transform="translate(913.97 687.97)" fill="rgba(255,255,255,0)"/>
                    <path id="clock" d="M29.674,24.467l-4.433-2.559V12.564a2.113,2.113,0,1,0-4.226,0V23.128a2.112,2.112,0,0,0,1.056,1.83l5.489,3.169a2.113,2.113,0,1,0,2.113-3.66ZM23.128,2A21.128,21.128,0,1,0,44.256,23.128,21.128,21.128,0,0,0,23.128,2Zm0,38.031a16.9,16.9,0,1,1,16.9-16.9A16.9,16.9,0,0,1,23.128,40.031Z" transform="translate(915.841 689.841)"/>
                    </g>
                </svg>
                <h3 class="map_title">ორშ.-პარ. / 09:00 - 18:00 შაბ.: 10:00 - 17:00</h3>
            </div>
        </div>`
            },
            {
                coords: { lat: 41.7076, lng: 44.7596 },
                iconImage: "../images/map_icon_2.svg",
                content: 'კონტენტი 1'
            },
            {
                coords: { lat: 41.7086, lng: 44.7559 },
                iconImage: '../images/map_icon_2.svg',
                content: 'კონტენტი 2'
            },
            {
                coords: { lat: 41.7109, lng: 44.7585 },
                iconImage: "../images/map_icon_2.svg",
                content: 'კონტენტი 3'
            },

        ]
        //loop markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    var icon1 = "../images/map_icon.svg";
    var icon2 = "../images/map_icon_2.svg";

    function addMarker(props) {
        var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                icon: icon2,
                content: props.content

            })
            //check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }

        // check contenet
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content

            });
            marker.addListener('mouseover', () => {
                infoWindow.open(map, marker);
                marker.setIcon(icon1);






            })
            marker.addListener('mouseout', () => {
                infoWindow.close(map, marker);
                marker.setIcon(icon2);

            })
        }

    }
}