let osc, fft;
let amplitude, frequency;



function setup() {
  //createCanvas(720, 256);
  createCanvas(600,400);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
    
  amplitude=createSlider(0,100,100);
  amplitude.position(10,10);
  amplitude.style('width', '80px');
  
  frequency=createSlider(0,1000,0);
  frequency.position(100,10);
  frequency.style('width', '160px');
  
}

function draw() {
  background(0,230,230);

  let waveform = fft.waveform(); // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  let freq = map(frequency.value(), 0, width, 40, 880);
  osc.freq(freq);

  let amp = map(amplitude.value(), 0, 100, 1, 0.01);
  osc.amp(amp);
}
