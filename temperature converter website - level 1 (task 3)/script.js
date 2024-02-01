 function convertTemperature() {
      var temperatureInput = document.getElementById("temperature").value;
      var unit = document.getElementById("unit").value;
      var resultArea = document.getElementById("result");

      if (!temperatureInput || isNaN(temperatureInput)) {
        alert("Please enter a valid temperature.");
        return;
      }

      var temperature = parseFloat(temperatureInput);
      var convertedTemperature;

      switch (unit) {
        case "celsius":
          convertedTemperature = (temperature - 32) * 5/9;
          resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} °C`;
          break;
        case "fahrenheit":
          convertedTemperature = (temperature * 9/5) + 32;
          resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} °F`;
          break;
        case "kelvin":
          convertedTemperature = temperature + 273.15;
          resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} K`;
          break;
        default:
          alert("Invalid unit selection.");
          break;
      }
    }