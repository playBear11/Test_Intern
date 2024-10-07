"use client";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

export default function Homepage() {
    const users = [
        {
            "id": 1,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 2,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 3,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 4,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 5,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        },
        {
            "id": 6,
            "username": "********",
            "email": "********@********.com",
            "first_name": "********",
            "last_name": "********",
            "is_active": true,
            "date_joined": "2024-08-09T18:01:17.988250+07:00"
        }
    ];

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedUser, setSelectedUser] = useState<{ id: number; username: string; email: string; first_name: string; last_name: string; date_joined: string; } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State สำหรับเปิด/ปิด modal
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleUserClick = (user: { id: number; username: string; email: string; first_name: string; last_name: string; date_joined: string; }) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewUser({ username: "", email: "", first_name: "", last_name: "" });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // สำหรับเพิ่ม user ใหม่
        console.log(newUser);
        closeModal();
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <aside className="-translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 bg-opacity-50"
                style={{ backgroundImage: 'url("https://i.pinimg.com/enabled_hi/564x/66/ab/24/66ab244db3f9b8d7f0a7ab6ba5148c33.jpg")' }}>
                <div className="relative border-b border-white/20">
                    <a className="flex items-center gap-4 py-6 px-8" href="#/">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-[#000000]">Dashboard</h6>
                    </a>
                    <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        <li>
                            <a aria-current="page" className="active" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-300 to-blue-300 text-black shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Home</p>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">profile</p>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">tables</p>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
                                </button>
                            </a>
                        </li>
                        <li className="mt-52">
                            <a className="" href="#">
                                <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-black hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                    </svg>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Log Out</p>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="flex justify-end bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/fe/0c/46/fe0c468c8faf344dfc858c19cde399f4.jpg")' }}>

                <div className="flex justify-end items-center h-screen mr-20">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg items-center w-full">
                        <div className="flex flex-col gap-2 shrink-0 sm:flex-row w-full justify-between ">
                            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
                                User Management
                            </h5>
                            <button
                                className="flex select-none items-center gap-3 rounded-lg bg-sky-200 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20"
                                type="button"
                                onClick={openModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4 stroke-2"
                                >
                                    <path
                                        d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                                    ></path>
                                </svg>
                                Add member
                            </button>
                        </div>

                        <div className=" flex flex-col gap-2 shrink-0 sm:flex-row w-full justify-between">
                            <p className="block mt-3 mb-3 font-sans text-base antialiased font-normal leading-relaxed text-black px-2">
                                See information about all users
                            </p>
                            <div className="flex flex-1 justify-end h-20 items-center px-4">
                                <TextField
                                    className="w-[300px]"
                                    label="Search"
                                    variant="outlined"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    inputProps={{ className: "h-2" }}
                                    InputLabelProps={{
                                        style: { fontSize: "13px", color: "black" },
                                    }}
                                    InputProps={{
                                        style: {
                                            borderWidth: "0.1px",
                                            borderColor: "white",
                                        },
                                    }}
                                />
                            </div>
                        </div>

                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-500">
                            {/* ส่วนหัวตาราง */}
                            <thead className="text-xs text-orange-200 uppercase bg-gray-500 dark:bg-gray-900 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">ID</th>
                                    <th scope="col" className="px-6 py-3">Username</th>
                                    <th scope="col" className="px-6 py-3">Email</th>
                                    <th scope="col" className="px-6 py-3">First Name</th>
                                    <th scope="col" className="px-6 py-3">Last Name</th>
                                    <th scope="col" className="px-6 py-3">Date Joined</th>
                                    <th scope="col" className="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.first_name}</td>
                                        <td className="px-6 py-4">{user.last_name}</td>
                                        <td className="px-6 py-4">
                                            {new Date(user.date_joined).toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button className="text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                                <button className="text-red-600 dark:text-red-500 hover:underline">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* เพิ่ม user */}
                        {isModalOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                                    <h2 className="text-xl font-semibold mb-4">Add New Member</h2>
                                    <div className="flex flex-col space-y-3">
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            value={newUser.username}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={newUser.email}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                        />
                                        <input
                                            type="text"
                                            name="first_name"
                                            placeholder="First Name"
                                            value={newUser.first_name}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                        />
                                        <input
                                            type="text"
                                            name="last_name"
                                            placeholder="Last Name"
                                            value={newUser.last_name}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded"
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4 space-x-4">
                                        <button
                                            onClick={closeModal}
                                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}