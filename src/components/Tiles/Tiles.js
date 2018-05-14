import React from 'react';
import './Tiles.css';

const hexToRgbA = (hex) => {
  /**
   * Converts hex color to rgba type that will used in box-shadow
   */
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

/**
 * Darken/Lighten color based on the percent
 */
const darkenColor = (color, percent) => {
  let f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
  return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

const Tile = (props) => {
  const { color } = props;
  const tileStyles = {
    backgroundColor: color,
    backgroundImage: `linear-gradient(135deg, ${color} 1%, ${darkenColor(color, -0.4)} 100%)`,
    boxShadow: `0px 5px 30px ${hexToRgbA(color)}`
  }
  return(
    <div className="tile-style" style={tileStyles}>
      <span className="tile-span-style">
        {props.children}
      </span>
    </div>
  );
};
export default Tile;
