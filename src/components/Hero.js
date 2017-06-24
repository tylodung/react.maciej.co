import React from 'react'

class Hero extends React.Component {

  componentDidMount() {
  	var canvas = this.refs.particles;
  	var ctx = canvas.getContext("2d");
  	var tempcanvas = document.createElement("canvas");
  	var tempctx = tempcanvas.getContext("2d");
  	canvas.width = 640;
  	canvas.height = 130;
  	canvas.style.width = 640 + "px";
  	canvas.style.height = 130 + "px";
  	var W = 640;
  	var H = 130;
  	var mp = 100;
  	var particles = [];
  	var PI2 = Math.PI * 2;
  	var imgs = [];

  	for (var i = 0; i < mp; i++) {
  		 var colors = ['#ffcc00', '#ff9500', '#ff3b30', '#ff5e3a'];
  		 var color = colors[Math.floor(Math.random() * colors.length)];
  	   particles.push({
  	       x: Math.floor(Math.random() * W),
  	       y: Math.floor(Math.random() * H),
  	       z: Math.floor(Math.random() * mp),
  	       d: Math.floor(Math.random() * (4 - 1) + 1),
  	       r: Math.floor(Math.random() * (30 - 15) + 15),
  	       o: color
  	   });

  	   var p = particles[i];
  	   tempcanvas.width = tempcanvas.height = p.r * 2;
  	   tempctx.fillStyle = p.o;
  	   tempctx.beginPath();
  	   tempctx.arc(p.r, p.r, p.r, 0, PI2, false);
  	   tempctx.closePath();
  	   tempctx.fill();
  	   var img = new Image();
  	   img.src = tempcanvas.toDataURL();
  	   imgs.push(img);
  	}
  	function animate() {
  	   requestAnimationFrame(animate);
  		 ctx.fillStyle = "#000";
  	   ctx.fillRect(0, 0, W, H);
  	   for (var i = 0; i < mp; i++) {
  	       var p = particles[i];
  	       p.y -= p.d;
  	       if (p.y <= - p.r*4) {
  	           p.y = 130;
  	           p.x = ~~ (Math.random() * W);
  	       }
  	       ctx.drawImage(imgs[i], p.x, p.y);
  	   }
  	}
  	animate();
  }

  render() {
    return (
      <header>
        <div className="header-wrap">
          <canvas ref="particles"></canvas>
          <svg width="640" height="130">
            <path d="M0 130V0h640v130H0zm617-54c0-10.58-8.703-16.596-18-18-13.135-2.28-22.942-.807-23-5 .058-2.193 1.774-3.912 4-4h12c3.134.066 5.923 1.614 7.658 3.746.57.7.89 1.09.89 1.09.526.643 1.594.943 2.37.675l11.186-3.856c1.047-.36 1.58-1.495 1.178-2.52 0 0 .09.145-.293-.68C611.03 38.922 602.276 33 592 33h-12c-11.174 0-20 8.842-20 20 0 10.702 8.703 16.596 18 18 14.484 2.404 22.942.807 23 5-.058 2.316-1.652 3.912-4 4h-12c-3.258-.07-6.143-1.74-7.86-4.002-.475-.627-.173-.248-.173-.248-.534-.966-1.816-1.467-2.867-1.117l-11.2 3.734c-1.05.35-1.587 1.474-1.183 2.504 0 0-.135-.265.217.507C565.854 90 574.654 96 585 96h12c11.174 0 20-8.842 20-20zm-60.994-43h-12.012c-1.1 0-1.994.893-1.994 1.995V36.5c-4-2.5-8.148-3.5-12-3.5-16.252 0-29 12.705-29 28v6c0 15.963 12.747 29 29 29 4 0 8-1 12-3-1.406 5.722-6.555 9.997-12 10-4.215-.002-7.852-1.828-10.3-4.596-.656-.74-1.18-1.297-1.18-1.297-.562-.612-1.616-.798-2.35-.417l-10.39 5.388c-.986.51-1.364 1.714-.85 2.692 0 0-.056-.038.45.787C510.344 113.665 519.587 119 530 119c15.252 0 28-12.5 28-28V34.996c0-1.108-.893-1.996-1.994-1.996zM542 67c0 7.32-5.665 13-12 13-7.335 0-13-5.68-13-13v-5c0-7.32 5.665-13 13-13 6.335 0 12 5.68 12 13v5zM361.008 96c1.1 0 1.992-.895 1.992-1.994V81.994c0-1.1-.896-1.994-1.997-1.994H354c-2.69-.003-5-1-5-4V49.993c0-.548.45-.993 1.007-.993h10.987c1.108 0 2.006-.895 2.006-1.994V34.994c0-1.1-.897-1.994-2.006-1.994h-10.987c-.556 0-1.007-.44-1.007-1.003V12c0-1.104-.893-2-1.992-2h-11.016c-1.1 0-1.992.897-1.992 2.005v11.99C334 29.522 329.52 34 323.995 34h-3.003c-1.1 0-1.992.893-1.992 1.992v11.016c0 1.1.897 1.992 2.006 1.992h10.987c.556 0 1.007.446 1.007.993V76c-.395 11.205 8.35 20 19 20h9.008zM77 94c0 1.105.895 2 1.994 2h12.012c1.1 0 1.994-.9 1.994-1.995V92.5c4 2.5 8.148 3.5 12 3.5 16.252 0 29-12.705 29-28v-6c0-15.963-12.747-29-29-29-4 0-8 1-12 3V11.997C93 10.894 92.105 10 91.006 10H78.994c-1.1 0-1.994.893-1.994 2v82zm16-27v-5c0-7.32 5.665-13 12-13 7.335 0 13 5.68 13 13v5c0 7.32-5.665 13-13 13-6.335 0-12-5.68-12-13zm195 27V12c0-1.107-.893-2-1.994-2h-12.012c-1.1 0-1.994.894-1.994 1.997V36c-4-2-8-3-12-3-16.253 0-29 13.037-29 29v6c0 15.295 12.748 28 29 28 3.852 0 8-1 12-3.5v1.505c0 1.094.893 1.995 1.994 1.995h12.012c1.1 0 1.994-.895 1.994-2zm-16-27c0 7.32-5.665 13-12 13-7.335 0-13-5.68-13-13v-5c0-7.32 5.665-13 13-13 6.335 0 12 5.68 12 13v5zm-44.994 29c1.1 0 1.994-.893 1.994-2V12c0-1.105-.895-2-1.994-2h-12.012c-1.1 0-1.994.893-1.994 2v82c0 1.105.895 2 1.994 2h12.012zm-18 0c1.1 0 1.994-.89 1.994-2.007V35.007c0-1.108-.895-2.007-1.994-2.007h-12.012c-1.1 0-1.994.89-1.994 2.007v58.986c0 1.108.895 2.007 1.994 2.007h12.012zm229 0c1.1 0 1.994-.89 1.994-2.007V35.007c0-1.108-.895-2.007-1.994-2.007h-12.012c-1.1 0-1.994.89-1.994 2.007v58.986c0 1.108.895 2.007 1.994 2.007h12.012zm-229-65c1.1 0 1.994-.902 1.994-1.995v-17.01c0-1.102-.895-1.995-1.994-1.995h-12.012c-1.1 0-1.994.902-1.994 1.995v17.01c0 1.102.895 1.995 1.994 1.995h12.012zm229 0c1.1 0 1.994-.902 1.994-1.995v-17.01c0-1.102-.895-1.995-1.994-1.995h-12.012c-1.1 0-1.994.902-1.994 1.995v17.01c0 1.102.895 1.995 1.994 1.995h12.012zm-247 65c1.1 0 1.994-.89 1.994-2.007V35.007c0-1.108-.895-2.007-1.994-2.007h-12.012c-1.1 0-1.994.892-1.994 2v32c0 7.5-5 13-12.5 13S152 74.5 152 67V35c0-1.105-.895-2-1.994-2h-12.012c-1.1 0-1.994.892-1.994 2v32c0 16.228 12.248 29 28.5 29 3.852 0 8.5-1 12.5-3.5v1.505c0 1.102.895 1.995 1.994 1.995h12.012zm175.988-86c-1.1 0-1.994.893-1.994 2v82c0 1.105.895 2 1.994 2h12.012c1.1 0 1.994-.892 1.994-2V62c0-7.5 5-13 12.5-13S406 54.5 406 62v32c0 1.105.895 2 1.994 2h12.012c1.1 0 1.994-.892 1.994-2V62c0-16.228-12.248-29-28.5-29-3.852 0-8.5 1-12.5 3.5V11.992c0-1.1-.895-1.992-1.994-1.992h-12.012zm77 23c-1.1 0-1.994.89-1.994 2.007v58.986c0 1.108.895 2.007 1.994 2.007h12.012c1.1 0 1.994-.892 1.994-2V62c0-7.5 5-13 12.5-13S483 54.5 483 62v32c0 1.105.895 2 1.994 2h12.012c1.1 0 1.994-.892 1.994-2V62c0-16.228-12.248-29-28.5-29-3.852 0-8.5 1-12.5 3.5v-1.505c0-1.102-.895-1.995-1.994-1.995h-12.012zM37.006 96c1.1 0 1.994-.893 1.994-2V12c0-1.105-.895-2-1.994-2H24.994c-1.1 0-1.994.893-1.994 2v82c0 1.105.895 2 1.994 2h12.012z" fill="#FFFFFF" fillRule="evenodd"/>
          </svg>
        </div>
      </header>
    )
  }
}

export default Hero
