export function getPcCartInfo({ list }: any) {
  var ret = list.map((item: any) => {
    var vendor = {
      title: item.title,
      id: item.sellerId,
      shopId: item.shopId,
      url: item.url,
      items: item.bundles[0].orders.map((subitem: any) => ({
        id: subitem.id,
        cartId: subitem.cartId,
        amount: subitem.amount.now,
        isValid: subitem.isValid,
        sellerId: subitem.sellerId,
        shopId: subitem.shopId,
        skuId: subitem.skuId,
        itemId: subitem.itemId,
        url: subitem.url,
        img: subitem.pic,
        title: subitem.title,
        price: subitem.price.now / 100,
        attr: subitem.attr,
        checked: subitem.checked,
        createTime: subitem.createTime
      }))
    };
    return vendor;
  });
  return ret;
}