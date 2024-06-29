const defaultPhotoUrl =
  "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png";

export function transformarFotoProduto(foto: string) {
  return foto?.length > 30 ? foto : defaultPhotoUrl;
}
