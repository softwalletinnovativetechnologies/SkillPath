const Settings = () => {
  return (
    <div>
      <div className="bg-white rounded-[32px] p-10 shadow-lg">
        <h1 className="text-4xl font-black text-[#0B2D5C]">Parent Settings</h1>

        <p className="text-gray-500 mt-3">Manage your account settings</p>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-lg mt-8">
        <div className="space-y-6">
          <div>
            <label className="font-semibold">Parent Name</label>

            <input
              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          "
            />
          </div>

          <div>
            <label className="font-semibold">Email</label>

            <input
              className="
          w-full
          mt-2
          border
          rounded-2xl
          p-4
          "
            />
          </div>

          <button
            className="
        px-8
        py-4
        bg-[#0B2D5C]
        text-white
        rounded-2xl
        "
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
