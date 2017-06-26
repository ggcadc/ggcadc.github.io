
var bgCycle = (bgData) => {
  console.log(bgData);
  if(bgData.includes('clear')){
    $('body').css({'background-image' : 'url("https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Wallpaper-Free-Download.jpg")'})}
  if(bgData.includes('cloudy')){
    $('body').css({'background-image' : 'url("https://skbthrive.files.wordpress.com/2015/03/bigstock-sunset-over-blurred-asphalt-ro-50182835.jpg")'})}
  if(bgData.includes('rain')){
    $('body').css({'background-image' : 'url("http://wallpapercave.com/wp/kTmeTt6.jpg")'})}
  if(bgData.includes('night')){
    $('body').css({'background-image' : 'url("https://wallpapershome.com/images/wallpapers/night-sky-3840x2400-night-city-earth-sky-stars-clouds-light-height-421.jpg")', 'background-position' : 'center'})}
  if(bgData.includes('fog')){
    $('body').css({'background-image' : 'url("https://s-media-cache-ak0.pinimg.com/originals/cc/f8/14/ccf814fbf7f0f50ae7fbabff8b77655d.jpg")'})}
}


var icons = new Skycons({'color' : 'rgba(255, 255, 255, 0.75)'}),
    list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i;

for(i = list.length; i--; )
  icons.set(list[i], list[i]);

icons.play();

const geoLocationSuccess = (position) => {
  // Construct a basic jQuery AJAX request.
  $.ajax({
    url: `https://darkskyproxy-nsawzskdsk.now.sh/weather/${position.coords.latitude}/${position.coords.longitude}`
  })
    .done(data => {
      let tempF = data.currently.apparentTemperature

      document.getElementById('apparentTemperature').innerHTML = tempF.toFixed(0) + '\u00B0 Farenheit';
      document.getElementById('apparentTemperatureC').innerHTML = ((tempF - 32)/1.8).toFixed(0) + '\u00B0 Celcius';

      document.getElementById(data.currently.icon).style.display = 'flex';

      document.getElementById('windSpeed').innerHTML = 'Wind ' + data.currently.windSpeed + 'MpH';

      document.getElementById('summary').innerHTML = data.currently.summary;

      document.getElementById('long').innerHTML = ' longitude: '+ data.longitude.toFixed(2);
      document.getElementById('lat').innerHTML = 'latitude: ' + data.latitude.toFixed(2);
      document.getElementById('topTitle').innerHTML = data.timezone.substring(8).replace(/_/g, " ");

      bgCycle(data.currently.icon);


    })
};

// Don't bother checking for geolocation support.
navigator.geolocation.getCurrentPosition(geoLocationSuccess, (err) => {
  // handle an unsuccessful fetch inline.
  console.error(err);
});

$(document).ready(function (){
  $('#apparentTemperature').click(function (){
    $('#apparentTemperatureC').css({'display' : 'block'});
    $('#apparentTemperature').css({'display' : 'none'})
  })
})
$(document).ready(function (){
  $('#apparentTemperatureC').click(function (){
    $('#apparentTemperature').css({'display' : 'block'});
    $('#apparentTemperatureC').css({'display' : 'none'})
  })
})
