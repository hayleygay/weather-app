// My Scripts

$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('.state').text(weather.region);
      $('.one .code').text(weather.code);
      
      // Change background color
      $('body').addClass('bg-' + weather.code);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
      $('body').append('<p>ERROR</p>');
    }
  
  });

