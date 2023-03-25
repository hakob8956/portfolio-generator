const myUtils = {
  async getData() {
    const response = await fetch("URL");
    return await response.json();
  },
};
export { myUtils };
