import { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import { fadeInLeft } from "react-animations";
import { fadeInRight } from "react-animations";
import { fadeInUp } from "react-animations";

export const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const fadeInRightAnimation = keyframes`${fadeInRight}`;

export const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const zoomInAnimation = keyframes`${zoomIn}`;
