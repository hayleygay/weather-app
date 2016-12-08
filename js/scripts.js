// Spokane


$.simpleWeather({
    location: '99205',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane title').text(weather.title);
      
      //  If this condition, show this icon
      if ( 26 >= weather.code && 30 <= weather.code ) {
          $('.spokane .wi').addClass('wi-day-cloudy');
      }
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>ERROR</p>');
    }
  
  });

// Phoenix

$.simpleWeather({
    location: '85034',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.phoenix .temp').text(weather.temp);
      $('.phoenix .city').text(weather.city);
      $('.phoenix img').attr('src', weather.image);
      $('.phoenix title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>ERROR</p>');
    }
  
  });

// Los Angeles

$.simpleWeather({
    location: '90045',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.la .temp').text(weather.temp);
      $('.la .city').text(weather.city);
      $('.la img').attr('src', weather.image);
      $('.la title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>ERROR</p>');
    }
  
  });

// Seattle

$.simpleWeather({
    location: '98101',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
      $('.seattle title').text(weather.title);
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>ERROR</p>');
    }
  
  });

