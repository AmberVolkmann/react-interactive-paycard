import React, { useEffect, useState, useRef } from 'react';

export default function CForm({

}) {
    const [cardMumber, setCardNumber] = useState('');

    const handleFormChange = (event) => {
        const {name, value} = event.target;
        // onUpdateState(name, value);
    }
}