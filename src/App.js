import React, { useState } from 'react';
import styled from 'styled-components'

const StyledInput = styled.input `
  height : 15px;
  margin : 10px;
  width : 90px;
  text-align: center;
`

function StarDisplay() {
  const [numStar, setNumStar] = useState(0);
  const [stars, setStar] = useState([]);

  const updateStar = () => {
    const num = parseInt(numStar);
    const newStar = [];
    for (let i = 1; i <= num; i++) {
      newStar.push('*'.repeat(i));
    }
    for (let i = num - 1; i > 0; i--) {
      newStar.push('*'.repeat(i));
    }
    setStar(newStar);
  };

  return (
    <div>
      <div>Input : 
        <StyledInput type='num' value={numStar} onChange={(e) => setNumStar(e.target.value)} />
        <button onClick={updateStar}>Submit</button>
        {stars.map((star, index) => (
          <div key={index}>{star}</div>
        ))}
      </div>
    </div>
  );
}

export default StarDisplay;
