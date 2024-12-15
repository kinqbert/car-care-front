export const imageExists = (imageUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    };
    img.onerror = () => resolve(false);
  });
};
