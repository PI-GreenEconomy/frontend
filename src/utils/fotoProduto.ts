const defaultPhotoUrl =
  "https://ik.imagekit.io/GreenEconomy/default-product-image.png?updatedAt=1724762147450";

export function transformarFotoProduto(foto: string) {
  return foto?.length > 30 ? foto : defaultPhotoUrl;
}
