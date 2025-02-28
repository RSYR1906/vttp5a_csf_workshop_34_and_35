export interface Weather {
    location: {
      name: string;
    };
    current: {
      temp_c: number;           // Celsius
      temp_f: number;           // Fahrenheit
      condition: {
        text: string;
      };
      wind_mph: number;
      humidity: number;
      uv: number;
    };
  }