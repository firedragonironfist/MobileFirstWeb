document
            .getElementById("getLocationButton")
            .addEventListener("click", function () {
                if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        function (position) {
                            const latitude = position.coords.latitude;
                            const longitude = position.coords.longitude;
                            const altitude = position.coords.altitude || "Not available";
                            const accuracy = position.coords.accuracy;
                            const speed = position.coords.speed || "Not available";
                            const timestamp = position.timestamp;

                            const message = `Latitude: ${latitude}\nLongitude: ${longitude}\nAltitude: ${altitude}\nAccuracy: ${accuracy}\nSpeed: ${speed}\nTimestamp: ${timestamp}`;

                            alert(message);
                        },
                        function (error) {
                            switch (error.code) {
                                case error.PERMISSION_DENIED:
                                    alert("User denied the request for geolocation.");
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    alert("Location information is unavailable.");
                                    break;
                                case error.TIMEOUT:
                                    alert("The request to get user location timed out.");
                                    break;
                                default:
                                    alert("An unknown error occurred.");
                                    break;
                            }
                        }
                    );
                } else {
                    alert("Geolocation is not available in this browser.");
                }
            });