const myUtils = {
  async getData() {
    const response = await fetch(
      "https://gist.github.com/hakob8956/94212e55b4e07855e226b28bb80e9688/raw"
    );
    return await response.json();
  },
};
export { myUtils };
