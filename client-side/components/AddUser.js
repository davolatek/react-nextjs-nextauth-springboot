import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

  function closeModal() {
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = async (e) => {
    e.preventDefault();

    const response = await fetch(USER_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const _user = await response.json();

    if (_user) {
      
      window.alert("User successfully added");
      closeModal()
    }
  };
  return (
    <>
      <div className="container max-auto my-8">
        <div className="h-12">
          <button
            onClick={openModal}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          >
            Add User
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-indigo-200">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add new User
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 font-normal text-sm">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        name="firstName"
                        className="h-10 w-96 mt-2 px-2 py-2"
                      />
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 font-normal text-sm">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                        name="lastName"
                        className="h-10 w-96 mt-2 px-2 py-2"
                      />
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 font-normal text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={user.emailId}
                        onChange={(e) => handleChange(e)}
                        name="emailId"
                        className="h-10 w-96 mt-2 px-2 py-2"
                      />
                    </div>
                    <div className="h-14 my-4 space-x-4 pt-4">
                      <button
                        onClick={saveUser}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
                      >
                        Save
                      </button>
                      <button
                        onClick={closeModal}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddUser;
