import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100vh;
  font-family: "Monument Extended";
  background: url(https://media.giphy.com/media/6wpHEQNjkd74Q/giphy.gif) no-repeat 50% 50%;
  background-size: cover;
  text-transform: uppercase;
}

@media(max-width: 900px) {
  .watch, .rotatethis, .hero-title p, .hero-gif {
        display: none !important;
  }

  .hero-title {
        top: 45%;
        left: 50%;
  }

  .hero-title h1 {
        font-size: 32px;
  }
}


.gif-overlay {
  z-index: -1;
  margin: 0%;
  padding: 0%;
  width: 100%;
  height: 100vh;
  background: rgba(14, 14, 14, 0.8);
}


.glitch {
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 4px;
  text-shadow: -31px 0 rgb(0, 174, 255);
  background: black;
}
.glitch::after {
  left: -3px;
  text-shadow: -3px 0 blue;
  background: black;
}

.glitch::before {
  clip: rect(54px, 250px, 56px, 40px);
}

@keyframes noise-anim {
  0% {
    clip-path: inset(40% 0 61% 0);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
  }
}

.glitch::before {
  animation: noise-anim 2s infinite linear alternate-reverse;
}

.glitch::after {    
  animation: noise-anim 2s infinite linear alternate-reverse;
}


a { 
  text-decoration: none;
  color: white;
  :hover { 
    color: red;
  }
}

.flex-fixed {
  display: flex;
    position: fixed;
}

.flex {
  display: flex;
}

.space-around {
  justify-content: space-around;
}

`;
