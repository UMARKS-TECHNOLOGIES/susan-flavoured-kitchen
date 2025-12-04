import AdminNavbar from '@/components/layout/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag } from 'lucide-react';
import React, { useState } from 'react'

const OrderManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const orders = [
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Unpaid', status: 'Pending', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Delivered', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Delivered', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Delivered', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Unpaid', status: 'Pending', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Delivered', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Cancelled', date: '11/02/25' },
        { id: 'SFK 1234', customer: 'Daniel E', item: 'Fried rice', amount: '£10.50', payment: 'Paid', status: 'Delivered', date: '11/02/25' }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'text-orange-500';
            case 'Delivered': return 'text-green-600';
            case 'Cancelled': return 'text-red-600';
            default: return 'text-gray-600';
        }
    };

    const getPaymentColor = (payment) => {
        return payment === 'Paid' ? 'text-gray-900' : 'text-orange-500';
    };
  return (
      <div>
          <AdminNavbar/>
          <div className="mt-20 mb-12">
              <h1 className="text-3xl font-bold">Order Management</h1>
          </div>

          {/* Search and Filters */}
          <div className="flex gap-4 mb-6 text-center">
              <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                      placeholder="Search Order ID or Customer Name"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12"
                  />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                  Search
              </Button>
          </div>

          <div className="flex gap-4 mb-6">
              <select
                  className="px-4 py-2 border rounded-lg"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
              >
                  <option>All</option>
                  <option>Pending</option>
                  <option>Accepted</option>
                  <option>Preparing</option>
                  <option>Delivered</option>
                  <option>Cancelled</option>
              </select>
              <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-48"
              />
          </div>

          {/* Orders Table */}
          {orders.length > 0 ? (
              <>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                      {/* Table Header */}
                      <div className="grid grid-cols-8 gap-4 px-6 py-3 bg-gray-200 font-semibold text-sm">
                          <div>Order ID</div>
                          <div>Customer</div>
                          <div>Item</div>
                          <div>Amount</div>
                          <div>Payment</div>
                          <div>Status</div>
                          <div>Date</div>
                          <div>Action</div>
                      </div>

                      {/* Table Rows */}
                      <div className="divide-y">
                          {orders.map((order, index) => (
                              <div key={index} className="grid grid-cols-8 gap-4 px-6 py-4 items-center hover:bg-gray-50">
                                  <div className="font-medium">{order.id}</div>
                                  <div>{order.customer}</div>
                                  <div className="text-sm">{order.item}</div>
                                  <div className="font-medium">{order.amount}</div>
                                  <div className={`font-medium ${getPaymentColor(order.payment)}`}>
                                      {order.payment}
                                  </div>
                                  <div className={`font-semibold ${getStatusColor(order.status)}`}>
                                      {order.status}
                                  </div>
                                  <div className="text-sm">{order.date}</div>
                                  <div>
                                      <Button
                                          size="sm"
                                          className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3"
                                      >
                                          View
                                      </Button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Pagination */}
                  <div className="flex items-center justify-end gap-4 mt-6">
                      <button className="text-orange-500 font-medium hover:text-orange-600">
                          Previous
                      </button>
                      <div className="flex gap-2">
                          {[1, 2, 3].map((page) => (
                              <button
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                  className={`w-8 h-8 rounded ${currentPage === page
                                          ? 'bg-orange-500 text-white'
                                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                      }`}
                              >
                                  {page}
                              </button>
                          ))}
                      </div>
                      <button className="text-orange-500 font-medium hover:text-orange-600">
                          Next
                      </button>
                  </div>
              </>
          ) : (
              // Empty State
              <div className="bg-white rounded-lg shadow-sm p-20 text-center">
                  <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
                          <ShoppingBag className="w-12 h-12 text-orange-500" />
                      </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">No Orders Right Now</h2>
                  <p className="text-gray-600">
                      Check back soon — new orders will appear here instantly.
                  </p>
              </div>
          )}
      </div>
  )
}

export default OrderManagement