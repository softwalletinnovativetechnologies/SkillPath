const AIAnalytics = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">
          AI Analytics Center
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Top Career Match</h3>

          <h2 className="text-4xl font-black mt-4">Data Scientist</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Highest Career Score</h3>

          <h2 className="text-4xl font-black mt-4">94%</h2>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h3>Students At Risk</h3>

          <h2 className="text-4xl font-black mt-4 text-red-500">7</h2>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;
