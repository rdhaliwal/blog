import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';

const LogoSVG = () => {
  const logo = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="150px" height="150px" viewBox="0 0 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Logo" fill="#961010" class="TopAndBottom">
    <path d="M129.360886,121.688137 C128.643372,121.411595 127.915667,121.150969 127.183885,120.892332 C125.78351,120.392964 124.332176,119.875691 122.976647,119.237057 C122.705541,119.109728 122.432396,118.994336 122.163329,118.876955 C121.229746,118.477063 120.265587,118.065234 119.466538,117.235606 C116.372261,114.020553 120.259472,106.955791 122.829882,102.278446 C123.423054,101.19814 123.936729,100.265058 124.256756,99.5727077 C124.829544,98.3312514 125.392139,97.0579629 125.934351,95.8284437 C126.407258,94.7600751 126.880164,93.6917064 127.363263,92.6293063 C127.846362,91.5708853 128.390612,90.5303698 128.920593,89.5236761 C129.087741,89.2073435 129.252851,88.8910109 129.417961,88.5706993 C129.523957,88.3677689 129.63403,88.162849 129.746142,87.9559397 C130.208856,87.1024385 130.68584,86.2210841 130.834642,85.3277926 C130.995675,84.3688472 130.810181,83.437755 130.310776,83.0398524 C130.011132,82.7991213 129.615685,82.759331 129.087741,82.9284396 C127.846362,83.3323108 126.474525,84.9657012 125.371755,86.2767905 C124.982423,86.7423366 124.613474,87.1800295 124.281217,87.5301838 C123.196793,88.6701749 122.216327,89.9474424 121.268475,91.1789512 C120.255395,92.496009 119.209701,93.8588255 118.019281,95.0843657 C117.199848,95.9259298 116.378376,96.7674939 115.558943,97.6070685 C112.782655,100.448094 109.910563,103.388594 107.183197,106.360927 C106.744943,106.83841 106.288343,107.363642 105.809321,107.908768 C102.743582,111.424238 98.9317918,115.793209 93.9662724,115.3396 C92.2173333,115.17646 91.0432204,114.448298 90.4765478,113.178989 C88.4198117,108.565308 94.8835481,96.693882 109.692455,77.8929815 C110.051212,77.433404 110.33251,77.0792706 110.513927,76.8425185 C110.76261,76.5182279 111.0541,76.1501679 111.372089,75.7443072 C114.270681,72.0617181 120.304317,64.398113 118.610414,60.3892438 C118.125277,59.2432841 117.446493,58.5907238 116.531256,58.3957515 C113.508323,57.7431911 108.695682,62.0882881 106.384148,64.1752875 C106.149733,64.3881654 105.93774,64.5791587 105.752247,64.7422988 C98.8971391,70.8103143 93.1651849,78.0700482 87.622801,85.089051 L87.0153607,85.8609822 C84.4184511,89.1516371 81.7338908,92.5517153 78.9576029,95.794622 C76.291388,98.9101997 73.2704932,102.437607 69.7583463,104.809107 C66.5009983,107.009508 62.8482024,107.662069 60.4510551,106.47234 C59.1424084,105.821769 57.5626557,104.319686 57.4770433,100.849975 C57.3975461,97.6727225 58.7653062,94.7103372 60.0882216,91.8454381 C60.3491356,91.2804163 60.6080112,90.7213631 60.8526181,90.1662889 C63.1580378,84.9199424 66.2156236,79.9859495 69.1733283,75.2170862 C71.087377,71.6677945 73.9431621,66.8730675 77.2820458,61.4775075 C80.8655364,55.3876074 84.8587435,49.037081 89.4002776,42.2130505 C90.6661181,40.3150548 91.9462274,38.4230277 93.2365286,36.5389586 C102.42967,22.4890159 110.821724,10.0446104 112.332171,7.81038698 C112.468743,7.60944614 112.389246,7.36871504 112.162985,7.26724986 C100.421855,1.89556402 87.8144098,0.041337654 72.2859506,0.00154738854 C67.726071,-0.0382428769 60.5387059,0.687929468 53.4593756,2.34519402 C39.056108,5.71940853 26.5200062,12.3405087 17.1046803,23.629007 C1.85955743,41.9046759 -2.72885968,62.9815796 1.49264713,85.8788878 C4.48908123,102.133211 12.7384477,116.89341 25.0503266,128.219709 C45.481115,147.014641 69.4729717,154.053539 96.9504762,147.738824 C112.446321,144.179585 125.17607,136.442368 134.630125,124.244662 C134.785043,124.04571 134.701469,123.751262 134.462977,123.657755 L129.360886,121.688137 Z" id="Bottom" class="Layer"></path>
    <path d="M146.659534,48.1881122 C142.130005,31.7493021 133.170474,18.7385756 118.714574,10.103403 C118.539893,9.99946114 118.310369,10.0454354 118.19053,10.2073449 C98.3479426,37.3821531 80.3476348,65.8442417 64.685214,94.820043 C63.811807,96.4351401 62.6743468,100.111085 63.8585242,100.868662 C65.1523851,101.6942 69.3528632,99.9171935 85.9740005,78.6091056 C86.5630424,77.853528 86.9936523,77.3018364 87.2231756,77.019994 L88.4926624,75.4648634 C89.997766,73.615897 91.5536491,71.7049653 93.1359375,69.8599967 C96.5828481,65.8402439 99.5727435,62.6600218 102.542327,59.8575884 C105.595189,56.9732009 108.962884,54.0408402 112.889153,52.1159164 C116.575742,50.3069277 119.687509,50.2369668 121.889307,51.9100315 C124.80608,54.1267922 125.22044,57.7087897 123.150669,62.85991 C118.962378,73.2960758 113.059772,82.8927109 105.609407,91.3839639 C103.704162,93.5547504 102.071094,95.551634 100.618801,97.4905501 L100.557865,97.5725043 C98.6424636,100.127076 96.4711333,103.021458 95.593664,106.111731 C95.3357043,107.019223 95.24227,108.176576 95.6139758,108.720272 C95.7460024,108.912165 95.9308397,109.014108 96.1969241,109.042092 C96.8367455,109.116051 98.0432658,108.100619 98.6851183,107.558921 C98.8090203,107.45498 98.9207351,107.357034 99.022294,107.277079 C100.167879,106.343601 101.242373,105.338163 102.144216,104.474646 C104.849746,101.892089 107.380595,99.2055913 109.71442,96.6889982 C112.53979,93.6447001 115.340786,90.4824679 118.048347,87.4261765 C119.510796,85.7770984 120.969183,84.1280203 122.441787,82.4889366 L122.543346,82.3750003 C122.79115,82.1011534 123.038954,81.8253076 123.292851,81.5554585 C125.202159,79.5425837 127.578639,77.035985 131.16367,76.8920655 C133.154225,76.8121102 134.738545,77.9234889 135.433208,79.8664027 C136.627541,83.2085343 135.746009,87.4561597 134.342465,90.1826355 L124.615149,109.08207 C124.06673,110.149473 123.558936,111.270846 123.91033,112.246301 C124.078918,112.716038 124.448592,113.139802 125.070133,113.577557 C126.002444,114.23319 127.087094,114.826858 128.387048,115.390543 C128.833907,115.584435 129.280767,115.780325 129.727626,115.978215 C131.535375,116.77377 133.406091,117.59731 135.321493,118.250944 C135.666793,118.368878 137.182053,118.858605 137.943745,119.118459 C138.116395,119.176427 138.305295,119.106466 138.40076,118.95655 C145.34333,107.91872 148.611497,95.6895569 149.63318,82.8147545 C150.559397,71.1292871 149.789581,59.541765 146.659534,48.1881122 L146.659534,48.1881122 Z" id="Top" class="Layer"></path>
  </g>
</svg>
`;

  return (
    <div className={styles.logoSvg} dangerouslySetInnerHTML={{ __html: logo }} />
  );
};

const Logo = ({ x, y, theta, angle }) => {
  const containerRef = useRef(null);

  if (containerRef.current) {
    containerRef.current.style.setProperty('--x', x);
    containerRef.current.style.setProperty('--y', y);
    containerRef.current.style.setProperty('--theta', theta);
    containerRef.current.style.setProperty('--angle', angle);
  }

  return (
    <div className={styles.logo} ref={containerRef}>
      <LogoSVG />
    </div>
  );
};

const useMouse = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  let thing = typeof window !== "undefined" ? window : {}

  useEffect(() => {
    const updatePosition = (e) => {
      // https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y
      setMouse({ x: e.clientX, y: e.clientY });
    };

    thing.addEventListener('mousemove', updatePosition);
    return (() => {
      thing.removeEventListener('mousemove', updatePosition);
    });
  }, [thing]);

  return mouse;
};

const useViewport = () => {
  let thing = typeof window !== "undefined" ? window : {}

  const [viewport, setViewport] = useState({
    width: thing.innerWidth,
    height: thing.innerHeight,
  });

  useEffect(() => {
    const updateViewport = () => {
      setViewport({  width: window.innerWidth,  height: window.innerHeight });
    };

    thing.addEventListener('resize', updateViewport);
    return (() => {
      thing.removeEventListener('resize', updateViewport);
    });
  }, [thing]);

  return viewport;
};

const usePosition = (mouse, viewport) => {
  const [position, setPosition] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const { x, y } = mouse;
    const { width, height } = viewport;

    const gridWidth = width/2;
    const gridHeight = height/2;

    let workingX = x;
    let workingY = y;

    if (x > gridWidth) { workingX = x - gridWidth;  }
    if (y > gridHeight) { workingY = y - gridHeight;  }

    if (x < gridWidth) { workingX = gridWidth - x;  }
    if (y < gridHeight) { workingY = gridHeight - y;  }

    workingX = workingX/gridWidth;
    workingY = workingY/gridHeight;

    if (x < gridWidth) { workingX *= -1;  }
    if (y < gridHeight) { workingY *= -1;  }

    // Forgot why I need to do this. But I do.
    workingY *= -1;

    const theta = Math.atan2(workingY, workingX);
    const angle = theta * (180 / Math.PI);

    setPosition({ x: workingX, y: workingY, theta, angle });

    return (() => {});
  }, [ mouse, viewport ]);

  return position;
};

const Main = () => {
  const mouse = useMouse();
  const viewport = useViewport();
  const position = usePosition(mouse, viewport);

  return (
    <div className={styles.container}>
      <div className={styles.debugPanel}>
        <div> {`viewport.width: ${viewport.width}`} </div>
        <div> {`viewport.height: ${viewport.height}`} </div>
        <div> {`mouse.x: ${mouse.x}`} </div>
        <div> {`mouse.y: ${mouse.y}`} </div>
        <div> {`position.x: ${position.x}`} </div>
        <div> {`position.y: ${position.y}`} </div>
        <div>{`rotateX: ${position.y * 30}`}</div>
        <div>{`rotateY: ${position.x * 30}`}</div>
        <div>{`translateX: ${position.x * 0}`}</div>
        <div>{`translateY: ${position.y * -25}`}</div>
      </div>
      <div className={styles.centerTheThing}>
        <Logo {...position} />
      </div>
    </div>
  );
};

export default Main;