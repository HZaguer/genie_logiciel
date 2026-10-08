const PRICING = Object.freeze({
  discountedItem: {
    type: 2,
    rate: 0.9,
  },
  vip: {
    threshold: 100,
    highRate: 0.8,
    lowRate: 0.95,
  },
  shipping: {
    freeThreshold: 50,
    cost: 4.99,
  },
});

function computeOrderTotal(user, items) {
  let total = 0;
  for (const item of items) {
    const basePrice = item.price * item.quantity;
    if (item.type === PRICING.discountedItem.type) {
      total += basePrice * PRICING.discountedItem.rate;
    } else {
      total += basePrice;
    }
  }
  if (user.vip) {
    const vipRate = total > PRICING.vip.threshold ? PRICING.vip.highRate : PRICING.vip.lowRate;
    total *= vipRate;
  }
  if (total < PRICING.shipping.freeThreshold) {
    total += PRICING.shipping.cost;
  }
  console.log("Total: " + total);
  return total;
}
