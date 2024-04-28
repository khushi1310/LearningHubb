import React from 'react'
import ReactFlow, { Handle } from 'react-flow-renderer';

const customNodeStyles = {
    background: '#9CA8B3',
    color: '#FFF',
    padding: 10,
  };

const customNode = ({data}) => {
    return (
        <div style={customNodeStyles}>
           <Handle type="target" position="left" id="c"/>
           <Handle type="target" position="top" id = "d"/>
            <div>{data.text}</div>
            
            <Handle
        type="source"
        position="right"
        id="a"/>
      <Handle
        type="source"
        position="bottom"
        id="b"
      
      />
        </div>
    )
}

export default customNode