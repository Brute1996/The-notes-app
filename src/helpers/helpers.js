export const innerTextFormater = (maxLength, textValue = "") => {
  if (textValue.length >= maxLength) {
    return `${textValue.slice(0, maxLength)}...`;
  } else {
    return textValue;
  }
};
