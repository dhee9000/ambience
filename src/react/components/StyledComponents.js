import React from 'react';
import { Text as RNText } from 'react-native';

import Typefaces from '../../config/Typefaces';

export const Text = props => (
    <RNText {...props} style={{fontFamily: Typefaces.Primary}} />
)

export const Heading = props => (
    <RNText {...props} style={{fontFamily: Typefaces.Black, fontSize: 36.0}} />
)