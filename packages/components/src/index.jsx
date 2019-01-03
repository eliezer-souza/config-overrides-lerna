import React from 'react';
import incrementE from '@overrides/core/src/utils';

const Title = ({ text }) => <h1>{incrementE(text)}</h1>;

export default Title;
