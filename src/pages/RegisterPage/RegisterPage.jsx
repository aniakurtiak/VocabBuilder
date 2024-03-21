import React from 'react';
import illustrationMob from '../../img/illustrationMob.png';
import illustrationMob2x from '../../img/illustrationMob@2x.png';
import illustrationDesktop from '../../img/illustrationDesktop.png';
import illustrationDesktop2x from '../../img/illustrationDesktop@2x.png';
import illustrationMobWebp from '../../img//illustrationMob.webp';
import illustrationMob2xWebp from '../../img/illustrationMob@2x.webp'
import illustrationDesktopWebp from '../../img/illustrationDesktop.webp';
import illustrationDesktop2xWebp from '../../img/illustrationDesktop@2x.webp';

const RegisterPage = () => {
  return (
    <div>
      <picture>
      <source
          srcSet={`${illustrationDesktopWebp} 1x, ${illustrationDesktop2xWebp} 2x`}
          media="(min-width: 1440px)"
          type='image/webp'
        />
        <source
          srcSet={`${illustrationDesktop} 1x, ${illustrationDesktop2x} 2x`}
          media="(min-width: 1440px)"
        />
        <source
          srcSet={`${illustrationMobWebp} 1x, ${illustrationMob2xWebp} 2x`}
          media="(min-width: 320px)"
          type='image/webp'
          />
        <source
          srcSet={`${illustrationMob} 1x, ${illustrationMob2x} 2x`}
          media="(min-width: 320px)"
        />

        <img src={illustrationMob} alt="people reading dictionary" />
      </picture>

    </div>
  );
};

export default RegisterPage;
