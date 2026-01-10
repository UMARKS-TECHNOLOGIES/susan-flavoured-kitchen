

export function filteredOrders(orders, filter) {
  return orders.filter(o => {
    const statusMatch = filter.status ? o.status === filter.status : true;
    const paymentMatch = filter.payment
      ? o.paymentStatus === filter.payment
      : true;
    const deliveryMatch = filter.delivery
      ? o.deliveryMethod === filter.delivery
      : true;
    return statusMatch && paymentMatch && deliveryMatch;
  });
}
