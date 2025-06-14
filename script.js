const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const freqSlider = document.getElementById('freq');
const freqLabel = document.getElementById('freqValue');

function drawSine(freq) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  const width = canvas.width;
  const height = canvas.height;
  const centerY = height / 2;
  const amp = height / 3;
  const samples = 1000;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples * 2 * Math.PI;
    const x = i / samples * width;
    const y = centerY - amp * Math.sin(freq * t);
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();
}

freqSlider.addEventListener('input', () => {
  const freq = parseFloat(freqSlider.value);
  freqLabel.textContent = freq.toFixed(1);
  drawSine(freq);
});

drawSine(1);
