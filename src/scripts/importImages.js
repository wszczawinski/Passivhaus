export const importImages = r => {
    let images = {};
    r.keys().forEach(item => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};
