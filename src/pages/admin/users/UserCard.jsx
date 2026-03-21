import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  PackageOpen,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Truck,
  X,
} from 'lucide-react';

export default function UserCard({ user }) {
  const [openOrders, setOpenOrders] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const isAdmin = user.role === 'admin';

  return (
    <>
      <div className={`bg-white rounded-xl p-5 w-full mx-auto my-2 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 relative overflow-hidden`}>
        {/* Accent Top Bar */}
        <div className={`absolute top-0 left-0 w-full h-1.5 ${isAdmin ? 'bg-purple-500' : 'bg-indigo-500'}`}></div>
        
        {/* Header Section */}
        <div className="flex items-start sm:items-center gap-4 pb-4 border-b border-gray-100 mt-1">
          {/* Avatar */}
          <div className="shrink-0">
            <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center text-lg font-bold shadow-sm ${
              isAdmin 
                ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white' 
                : 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white'
            }`}>
              {user.email?.[0]?.toUpperCase() || '?'}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">
              {user.name || user.email.split('@')[0]}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                isAdmin 
                  ? 'bg-purple-50 text-purple-700 border-purple-200' 
                  : 'bg-indigo-50 text-indigo-700 border-indigo-200'
              }`}>
                {user.role}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50/50 p-2 rounded-lg border border-gray-100/50">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center shadow-sm text-indigo-500 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <span className="truncate font-medium" title={user.email}>{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50/50 p-2 rounded-lg border border-gray-100/50">
            <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center shadow-sm text-indigo-500 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <span className="truncate font-medium">{user.phone || 'Not provided'}</span>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-5">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            Delivery Addresses
          </h4>
          {user.addresses?.length > 0 ? (
            <div className="space-y-2">
              {user.addresses.map((addr, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/50">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 line-clamp-2" title={`${addr.street}, ${addr.city} ${addr.state || ''}`}>
                    {addr.street}, <span className="font-semibold text-gray-800">{addr.city}</span> {addr.state || ''}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-400 italic flex items-center gap-2">
              No address on file
            </div>
          )}
        </div>

        {/* Orders Section */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button
            onClick={() => setOpenOrders(!openOrders)}
            className="w-full flex items-center justify-between text-sm font-semibold text-indigo-700 bg-indigo-50/50 hover:bg-indigo-100/60 p-2.5 rounded-lg transition-colors border border-indigo-100"
          >
            <div className="flex items-center gap-2">
              <PackageOpen className="w-4 h-4 text-indigo-500" />
              <span>Orders ({user.orders?.length || 0})</span>
            </div>
            {openOrders ? <ChevronUp className="w-4 h-4 text-indigo-500" /> : <ChevronDown className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* Expanded Orders List */}
          {openOrders && (
            <div className="mt-3 space-y-2 bg-white">
              {user.orders?.length > 0 ? (
                user.orders.map(order => (
                  <div
                    key={order._id}
                    className="cursor-pointer bg-white border border-gray-200 rounded-lg p-3 hover:border-indigo-300 hover:shadow-sm transition-all"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-gray-800">
                        #{order._id.slice(-6).toUpperCase()}
                      </span>
                      <span className="font-bold text-indigo-700 text-sm">
                        £{order.total}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-wider">
                      <span className={`px-2 py-0.5 rounded ${
                        order.status === 'pending' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {order.status}
                      </span>
                      <span className={`px-2 py-0.5 rounded ${
                        order.paymentStatus === 'failed' ? 'bg-red-100 text-red-700' : 'bg-sky-100 text-sky-700'
                      }`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                 <div className="text-center py-4 bg-gray-50 rounded-lg border border-dashed border-gray-200 text-gray-500 text-sm font-medium">
                   No orders recorded.
                 </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Side Drawer for Order Details */}
      {selectedOrder && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setSelectedOrder(null)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 border-l border-gray-200">
            {/* Drawer Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <PackageOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">
                    #{selectedOrder._id.slice(-6).toUpperCase()}
                  </h2>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mt-0.5">Order Details</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Status Overview */}
              <div className={`flex items-center justify-between mb-8 p-4 rounded-xl border ${
                selectedOrder.status === 'pending' ? 'bg-amber-50 border-amber-200' : 'bg-emerald-50 border-emerald-200'
              }`}>
                <div>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${selectedOrder.status === 'pending' ? 'text-amber-600' : 'text-emerald-600'}`}>Status</p>
                  <p className={`text-base font-bold capitalize flex items-center gap-2 ${selectedOrder.status === 'pending' ? 'text-amber-800' : 'text-emerald-800'}`}>
                    {selectedOrder.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${selectedOrder.status === 'pending' ? 'text-amber-600' : 'text-emerald-600'}`}>Total</p>
                  <p className={`text-xl font-black ${selectedOrder.status === 'pending' ? 'text-amber-900' : 'text-emerald-900'}`}>£{selectedOrder.total}</p>
                </div>
              </div>

              {/* Order Meta */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between text-sm py-2.5 border-b border-gray-100">
                  <span className="flex items-center gap-2 text-gray-500 font-medium"><Calendar className="w-4 h-4 text-indigo-500" /> Date</span>
                  <span className="font-bold text-gray-900">{new Date(selectedOrder.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2.5 border-b border-gray-100">
                  <span className="flex items-center gap-2 text-gray-500 font-medium"><Truck className="w-4 h-4 text-emerald-500" /> Delivery</span>
                  <span className="font-bold text-gray-900 capitalize">{selectedOrder.deliveryMethod}</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2.5 border-b border-gray-100">
                  <span className="flex items-center gap-2 text-gray-500 font-medium"><CreditCard className="w-4 h-4 text-sky-500" /> Payment</span>
                  <span className={`font-bold ${selectedOrder.paymentStatus === 'failed' ? 'text-red-600' : 'text-gray-900'}`}>
                    {selectedOrder.paymentStatus}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Purchased Items
                </h3>
                <div className="space-y-3">
                  {selectedOrder.items.map(item => (
                    <div key={item._id} className="flex gap-4 items-center p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-14 w-14 object-cover rounded-lg border border-gray-100"
                        />
                      ) : (
                        <div className="h-14 w-14 bg-gray-50 rounded-lg flex items-center justify-center text-xs font-medium text-gray-400 border border-gray-100">
                          Img
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-500 font-medium mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">£{item.unitPrice}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Bottom */}
              <div className="mt-8 pt-5 space-y-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-gray-900">£{selectedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Delivery Fee</span>
                  <span className="text-gray-900">£{selectedOrder.deliveryFee}</span>
                </div>
                <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-200">
                  <span className="text-base font-bold text-gray-900 uppercase tracking-wide">Total</span>
                  <span className="text-xl font-black text-indigo-700">£{selectedOrder.total}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
