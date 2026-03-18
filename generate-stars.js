const fs = require('fs');

function generateStars(n) {
  let value = `${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)}px #FFF`;
  for(let i = 2; i <= n; i++) {
    value += `, ${Math.floor(Math.random()*2000)}px ${Math.floor(Math.random()*2000)}px #FFF`;
  }
  return value;
}

const css = `
/* Galaxy Background Stars */
#stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.stars-small {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${generateStars(700)};
  animation: animStar 100s linear infinite;
}
.stars-small:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${generateStars(700)};
}

.stars-medium {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${generateStars(200)};
  animation: animStar 150s linear infinite;
}
.stars-medium:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: ${generateStars(200)};
}

.stars-large {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${generateStars(50)};
  animation: animStar 200s linear infinite;
}
.stars-large:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${generateStars(50)};
}

@keyframes animStar {
  from { transform: translateY(0px) }
  to { transform: translateY(-2000px) }
}
`;

fs.writeFileSync('src/galaxy.css', css);
console.log('Galaxy CSS generated successfully.');
