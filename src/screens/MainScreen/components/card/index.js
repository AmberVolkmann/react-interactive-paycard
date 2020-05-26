import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
    CSSTransition,
    TransitionGroup,
    SwitchTransition
} from 'react-transition-group';
import './styles.scss';

const CARDS = {
    visa: '^4',
    amex: '^(34|37',
    mastercard: '^5[1-5]',
    discover: '^6011'
}

const cardBackgroundName = () => {
    let random = Math.floor(Math.random() * 25 + 1);
    return `${random}.jpeg`;
}

const BACKGROUND_IMG = cardBackgroundName();

const Card = ({

}) => {

}

export default Card;
