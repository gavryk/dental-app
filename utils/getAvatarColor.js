export default (letter) => {
  const charCode = letter.charCodeAt();
  if (charCode >= 64 && charCode <= 73) {
    return {
      background: "#F5D6D9",
      color: "#F38181",
    };
  }
  if (charCode >= 74 && charCode <= 82) {
    return {
      background: "#F8ECD5",
      color: "#F1A32F",
    };
  }
  if (charCode >= 83 && charCode <= 90) {
    return {
      background: "#DAD5F8",
      color: "#816CFF",
    };
  }
  return {
    background: "#E9F5FF",
    color: "#2A86FF",
  };
};