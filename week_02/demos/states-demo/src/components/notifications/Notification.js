import React from 'react';
import styled from 'styled-components';
export default function Notification({ type, title, message }) {
  const spacing = '1rem';
  const color = {
    success: 'hsl(124deg 42.86% 93.14%)',
    successDark: 'hsl(122.65deg 37.36% 64.31%)',
    error: 'hsl(13.55deg 100% 93.92%)',
    errorDark: 'hsl(14.03deg 98.72% 69.41%)',
    info: 'hsl(208.89deg 77.14% 93.14%)',
    infoDark: 'hsl(208.29deg 80.46% 65.88%)',
    warning: 'hsl(36.67deg 100% 92.94%)',
    warningDark: 'hsl(35.93deg 98.88% 64.9%)',
  };
  const icon = {
    success: '✔',
    error: '✖',
    info: 'ℹ',
    warning: '⚠',
  };
  const theme = {
    color: '',
    colorDark: '',
    icon: '',
  };
  switch (type) {
    case 'success':
      theme.color = color.success;
      theme.colorDark = color.successDark;
      theme.icon = icon.success;
      break;
    case 'error':
      theme.color = color.error;
      theme.colorDark = color.errorDark;
      theme.icon = icon.error;
      break;
    case 'info':
      theme.color = color.info;
      theme.colorDark = color.infoDark;
      theme.icon = icon.info;
      break;
    case 'warning':
      theme.color = color.warning;
      theme.colorDark = color.warningDark;
      theme.icon = icon.warning;
      break;
    default:
      theme.color = 'black';
      theme.colorDark = 'darkgray';
      break;
  }
  const Notification = styled.div`
    border: 1px solid ${theme.colorDark};
    display: flex;
    flex-direction: column;
    background-color: ${theme.color};
    width: 20rem;
    padding: 1rem 0.5rem;
    position: relative;
    border-box: box-sizing;
    padding-left: 4rem;
    border-left: 0.4rem solid ${theme.colorDark};
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0px 2px gray;
    span {
      font-weight: bold;
    }
    &:before {
      content: '${theme.icon}';
      position: absolute;
      top: 0;
      left: 0;
      margin: ${spacing};
      border: 1px solid ${theme.colorDark};
      background-color: ${theme.colorDark};
      color: white;
      border-radius: 50%;
      width: 1.5rem;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      line-height: 0;
        }
    &:after {
      content: '✖';
      position: absolute;
      top: 0;
      right: 0;
      margin: ${spacing};
      color: ${theme.colorDark};
    }
  `;

  return (
    <Notification>
      <span>{title}</span>
      <p>{message}</p>
    </Notification>
  );
}
