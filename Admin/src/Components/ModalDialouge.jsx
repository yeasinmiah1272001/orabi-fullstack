import React from "react";

const ModalDialogue = ({ handleAdd, modalRef }) => {
  return (
    <dialog
      ref={modalRef}
      className="modal w-96 max-w-full p-0 rounded-lg shadow-lg bg-white overflow-hidden"
    >
      <div className="relative p-6">
        {/* Close Button */}
        <button
          onClick={() => modalRef.current.close()}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New User
        </h3>

        {/* Form */}
        <form onSubmit={handleAdd} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter user name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter user email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition ease-in-out duration-200"
              placeholder="Enter user password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition ease-in-out duration-200"
          >
            Add User
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ModalDialogue;
