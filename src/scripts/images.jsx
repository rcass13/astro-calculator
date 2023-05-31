export const images = importAll(
    require.context("../assets/tarot-data/cards", false, /\.(png|jpe?g|svg)$/)
  );
  
  //import images
  function importAll(r) {
    let imgs = {};
    r.keys().forEach((item, index) => {
      imgs[item.replace("./", "")] = r(item);
    });
    return imgs;
  }