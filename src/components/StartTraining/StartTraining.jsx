import React, { useState } from 'react'
import reportMob from '../../img/reportMob.png';
import repotMob2x from '../../img/reportMob@2x.png';
import reportMobWebp from '../../img/reportMob.webp';
import reportMob2xWebp from '../../img/reportMob@2x.webp';
import report from '../../img/report.png';
import report2x from '../../img/report@2x.png';
import reportWebp from '../../img/report.webp';
import report2xWebp from '../../img/report@2x.webp';
import { ContentContainer, LinkStyle, LinkStyle2, NavigateContainer, PictureStyle, StartContainer, Text, Title } from './StartTraining.styled';
import { AddWordModal } from 'components/AddWordModal/AddWordModal';
import { Modal } from 'components/Modal/Modal';


export const StartTraining = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <StartContainer>
    <PictureStyle>
      <source
        srcSet={`${reportWebp} 1x, ${report2xWebp} 2x`}
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${report} 1x, ${report2x} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${reportMobWebp} 1x, ${reportMob2xWebp} 2x`}
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet={`${reportMob} 1x, ${repotMob2x} 2x`}
        media="(max-width: 767px)"
      />
      <img src={reportMobWebp} alt="report form" />
    </PictureStyle>
   <ContentContainer>
      <Title>You don't have a single word to learn right now. </Title>
      <Text>
        Please create or add a word to start the workout. We want to improve
        your vocabulary and develop your knowledge, so please share the words
        you are interested in adding to your study.
      </Text>
      <NavigateContainer>
        <LinkStyle to = '/dictionary' onClick={toggleModal}>Add word</LinkStyle>
        <LinkStyle2 to = '/dictionary'>Cancel</LinkStyle2>
      </NavigateContainer>
   </ContentContainer>

   {isOpen && (
        <Modal toggleModal={toggleModal}>
        <AddWordModal oggleModal={toggleModal}/>
        </Modal>
      )}
  </StartContainer>
  )
}
