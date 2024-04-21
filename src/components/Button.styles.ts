import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 48px;

  border-radius: 4px;
  border: 0;
  margin: 3px;

  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme["gray-300"]};
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */



`