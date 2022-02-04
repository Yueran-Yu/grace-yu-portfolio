import React from 'react';
import {ToggleButton} from "./ToggleBtn.styles";
import {motion} from 'framer-motion';
import {useDayNightTheme} from "../../../context/ThemeProvider";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeLinecap='round'
    strokeWidth='3'
    {...props}/>)

const transition = {duration: 0.3}

const ToggleBtn = ({toggle, isOpen}) => {
  const {isDark} = useDayNightTheme()
  const strokeColor = isDark ? 'white' : '#133467';
  return (
    <ToggleButton onClick={toggle} isOpen={isOpen}>
      <svg width="25" height="25" viewBox="0 0 25 25">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {d: "M 2 2.5 L 20 2.5", stroke: strokeColor},
            open: {d: "M 3 16.5 L 17 2.5", stroke: strokeColor},
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={strokeColor}
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={transition}
        />

        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {d: "M 2 16.346 L 20 16.346", stroke: strokeColor},
            open: {d: "M 3 2.5 L 17 16.346", stroke: strokeColor},
          }}
          transition={transition}
        />
      </svg>
    </ToggleButton>
  );
};

export default ToggleBtn;
