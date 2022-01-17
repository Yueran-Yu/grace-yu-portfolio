import React from 'react';
import {Link} from 'react-scroll';

// this the react-scroll library which is very convenient to use.
// but I consider to made the scroll by the vanilla code
export const HeadLink = ({name, offsetValue}) => (
  <Link to={name.toLowerCase()} spy={true} smooth={true} offset={offsetValue} duration={500} isDynamic={true}>
    {name}
  </Link>
)


