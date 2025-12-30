const groupOrdersByMonth = orders => {
  return orders.reduce((acc, order) => {
    const month = new Date(order.date).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });

    if (!acc[month]) acc[month] = [];
    acc[month].push(order);

    return acc;
  }, {});
};
export default groupOrdersByMonth;
