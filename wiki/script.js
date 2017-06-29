function goSearch(){
  $.ajax( {
    url: "https://en.wikipedia.org/w/api.php",
    data: {
     'action' : 'query',
     'format' : 'json',
     'list' : 'search',
     'srsearch' : document.getElementById('searchText').value
   },
    dataType: 'jsonp',
  })
  .done(data => {
    console.log(data.query.search)
    document.getElementById('1').innerHTML = data.query.search[0].title.bold() + ' - ' + data.query.search[0].snippet;

    document.getElementById('2').innerHTML =  data.query.search[1].title.bold() + ' - ' + data.query.search[1].snippet;

    document.getElementById('3').innerHTML =  data.query.search[2].title.bold() + ' - ' + data.query.search[2].snippet;

    document.getElementById('4').innerHTML =  data.query.search[3].title.bold() + ' - ' + data.query.search[3].snippet;

    document.getElementById('5').innerHTML =  data.query.search[4].title.bold() + ' - ' + data.query.search[4].snippet;

    document.getElementById('6').innerHTML =  data.query.search[5].title.bold() + ' - ' + data.query.search[5].snippet;

    document.getElementById('7').innerHTML =  data.query.search[6].title.bold() + ' - ' + data.query.search[6].snippet;

    document.getElementById('8').innerHTML =  data.query.search[7].title.bold() + ' - ' +data.query.search[7].snippet;

    document.getElementById('9').innerHTML =  data.query.search[8].title.bold() + ' - ' + data.query.search[8].snippet;

    document.getElementById('10').innerHTML =  data.query.search[9].title.bold() + ' - ' + data.query.search[9].snippet;
    // document.getElementById('sub1').innerHTML = data.query.search[9].title;

    //do things with data here, like the .map destructuring thing matt did
  })

}

document.addEventListener('keydown', function(e) {
  if(e.keyCode == 13){
    goSearch();
  }
});
