import  { useState, useEffect, useRef } from 'react';
import baffle from 'baffle';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import {
  PreloaderVideoWrapper,
  HeroMain,
  CountdownContainer,
  CountdownItem,
  Title,
  Typewriter,
  HeroText,
  HeroContainer,
  CountText,
  Footer,
  Middle,
  Btn,
  FontAwesomeIconStyled,
  DrippingDigit,
  StyledContainer,
} from './Hero.styled';
import PreloaderVideo from './assets/preloader.mp4'; // Import the pre-loader video

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    } else {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <CountdownContainer>
      <CountdownItem>
        <DrippingDigit>{timeLeft.days}
          <CountText>Days</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.hours}
          <CountText>Hours</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.minutes}
          <CountText>Minutes</CountText>
        </DrippingDigit>
      </CountdownItem>

      <CountdownItem>
        <DrippingDigit>{timeLeft.seconds}
          <CountText>Seconds</CountText>
        </DrippingDigit>
      </CountdownItem>
    </CountdownContainer>
  );
};

const Hero = () => {
  const targetDate = new Date("2024-04-06T23:59:59");

  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const baffleRef = useRef(null);

  useEffect(() => {
    const text = baffle(baffleRef.current);
    text.set({
      characters: "!/|~#.^+*$#%nwf@%^&*!",
      speed: 250,
    });
    text.start();
    text.reveal(2000);

    // Clean up baffle instance on unmount
    return () => {
      text.stop();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlayed(true);
    }, 2000); // Play video for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!videoPlayed && (
        <PreloaderVideoWrapper> {/* Wrapper for centering the video */}
          <video autoPlay loop muted>
            <source src={PreloaderVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </PreloaderVideoWrapper>
      )} {/* Preloader Video */}
      <StyledContainer loaded={showContent ? 'true' : 'false'}>
        <HeroMain>
          <HeroContainer>
            <Title>
              <Typewriter className="baffle" ref={baffleRef}>
                Paridhi 2024
              </Typewriter>
            </Title>
            <HeroText>Starts in</HeroText>
            <CountdownTimer targetDate={targetDate} />
          </HeroContainer>
          <Footer>
            <Middle>
              <Btn href="#">
                <FontAwesomeIconStyled icon={faFacebook} />
              </Btn>
              <Btn href="#">
                <FontAwesomeIconStyled icon={faInstagram} />
              </Btn>
              <Btn href="#">
                <FontAwesomeIconStyled icon={faLinkedin} />
              </Btn>
              <Btn href="#">
                <FontAwesomeIconStyled icon={faYoutube} />
              </Btn>
            </Middle>
          </Footer>
        </HeroMain>
      </StyledContainer>
    </>
  );
};

export default Hero;
