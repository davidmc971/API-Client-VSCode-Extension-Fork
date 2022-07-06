import React from "react";
import styled from "styled-components";

import useRequestStore from "../../../store/useRequestStore";

function RequestUrl() {
  const { requestUrl, handleRequestUrlChange } = useRequestStore(
    (state) => state,
  );

  return (
    <InputContainer
      placeholder="Enter Request URL"
      value={requestUrl}
      onChange={(event) => handleRequestUrlChange(event.target.value)}
    />
  );
}

const InputContainer = styled.input`
  padding-left: 1.5rem;
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.78);
`;

export default RequestUrl;
