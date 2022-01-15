import React from 'react';
import {Link} from 'react-scroll';

export const HeadLink = ({name, offsetValue}) => (
  <Link to={name.toLowerCase()} spy={true} smooth={true} offset={offsetValue} duration={500} isDynamic={true}>
    {name}
  </Link>
)


