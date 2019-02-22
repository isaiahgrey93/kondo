export const konmari = (
  value: { [key: string]: any },
  key: string,
  sparksJoy: boolean
) => {
  if (!sparksJoy) {
    delete value[key];
    return "☹️";
  } else {
    return "😄";
  }
};

export default konmari;
