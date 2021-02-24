import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const animatedBlobMask = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="0" height="0" viewBox="0 0 350 350" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="Blobby" clipPathUnits="objectBoundingBox" transform="scale(0.002857143, 0.002857143)">
      <path class="clip" d="M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z">
        <animate
          id="GentleMorph"
          dur="30"
          begin="0"
          repeatCount="indefinite"
          attributeName="d"
          values="M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z;

                  m334.719465 233.064353c28.871403-82.339727 22.417835-142.7382456-65.204606-209.5226813-79.809275-60.8293649-253.8096353 20.7578982-267.53002864 148.6074893-8.93289979 83.277438 43.91922794 144.544272 117.27489464 167.117214 70.759155 26.348465 181.941653-10.60478 215.45974-106.202022z;

                  M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z;" />
      </path>
    </clipPath>
  </defs>
</svg>
`;

const staticBlobMask = `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="0" height="0" viewBox="0 0 350 350" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="Blobby" clipPathUnits="objectBoundingBox" transform="scale(0.002857143, 0.002857143)">
      <path class="clip" d="M340.359196,232.907053 C369.892183,148.680525 331.647945,55.2974307 224.595191,15.3076571 C127.999397,-20.7822144 15.0584823,2.4783672 1.02368828,133.257611 C-8.11390749,218.443339 44.9256302,318.452481 119.96223,341.542678 C192.34282,368.494915 306.073047,330.694892 340.359196,232.907053 Z">
      </path>
    </clipPath>
  </defs>
</svg>
`;

const BlobBackground = () => {
  const PREFERS_REDUCED_MOTION = typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion)').matches;

  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: PREFERS_REDUCED_MOTION ? staticBlobMask: animatedBlobMask }} />
      <div className={styles.blobby}
        style={{
          clipPath: `url(#Blobby)`,
        }}
        />
    </React.Fragment>
  );
};

const Home = () => {
  return (
    <div className={styles.page}>
      <BlobBackground />
      <div className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello! I'm Randeep</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam deserunt magni alias aspernatur cum sequi nihil consequuntur optio ipsa praesentium soluta distinctio impedit doloremque, officia debitis voluptatem enim, iste earum? Error quas placeat animi eaque sint ratione magni! Ratione voluptatum officia optio porro impedit atque ex reprehenderit dolores qui veniam, quasi necessitatibus reiciendis assumenda asperiores veritatis illum, eveniet autem quia?
          </p>
        </div>
        <div className={styles.imageContainer}>
        </div>
      </div>
    </div>
  );
};

export default Home;