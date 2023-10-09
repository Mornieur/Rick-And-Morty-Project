import styled, { keyframes, css } from "styled-components";
import { IContainer, IStyled, IVariant } from ".";

const pulseAnimation = keyframes`
  0% { opacity: 0.4 }
  50% { opacity: 0.8 }
  100% { opacity: 0.4 }
`;

const waveAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
   100% {
    background-position: 468px 0;
  }
`;

const roundedOptions: { [Key in IVariant]: string } = {
  circular: "50%",
  rectangular: "0",
  rounded: "8px",
};

export const Container = styled.div<IContainer>`
  padding: ${(p) => p.padding ?? 0};
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  gap: 1rem;
`;

export const Cube = styled.div<IStyled>`
  display: flex;
  width: ${(p) => (p.width ? p.width : "100%")};
  height: ${(p) => p.height};

  animation: 1000ms linear infinite;
  animation-name: ${(p) =>
    p.animation === "pulse" ? pulseAnimation : waveAnimation};

  border-radius: ${(p) => roundedOptions[p.variant ?? "rounded"]};

  background: rgba(130, 130, 130, 0.1);

  ${(p) =>
    p.animation === "wave" &&
    css`
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(8%, rgba(130, 130, 130, 0.8)),
        color-stop(18%, rgba(130, 130, 130, 0.8)),
        color-stop(33%, rgba(130, 130, 130, 1))
      );
      background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.1) 8%,
        rgba(130, 130, 130, 0) 18%,
        rgba(130, 130, 130, 0.1) 33%
      );
    `}
`;
