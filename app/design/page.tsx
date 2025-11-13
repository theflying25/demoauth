export default function PricingCard() {
  return (
    <div className="w-72 bg-primary text-white rounded-2xl p-6 shadow-lg relative">
      {/* Tag */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-xs font-semibold px-3 py-1 rounded-full">
        MOST POPULAR
      </div>

      {/* Content */}
      <h2 className="text-2xl font-semibold mt-4">Docker Team</h2>
      <div className="mt-2">
        <span className="text-5xl font-bold">$16</span>
        <p className="text-sm mt-1">per user/month</p>
      </div>
      <p className="text-sm mt-4 text-blue-100">
        For small teams that need collaborative tools to make working together more efficient.
      </p>
    </div>
  );
}
