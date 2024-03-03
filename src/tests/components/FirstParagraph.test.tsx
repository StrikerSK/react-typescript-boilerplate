import React from "react";
import {create} from 'react-test-renderer';
import FirstParagraph from '../../components/FirstParagraph';

it('renders correctly', () => {
    const tree = create(<FirstParagraph/>).toJSON();
    expect(tree).toMatchSnapshot();
});