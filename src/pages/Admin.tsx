import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

// Firebase configuration (ensure to secure your API keys in a real project)
const firebaseConfig = {
  apiKey: "AIzaSyAay8M_58K8RXHCfzmM2Gdw7dEgGmwz1sw",
  authDomain: "maden-infispark.firebaseapp.com",
  projectId: "maden-infispark",
  storageBucket: "maden-infispark.appspot.com",
  messagingSenderId: "1047210661059",
  appId: "1:1047210661059:web:4a372d286c5d0406fc3e76",
  measurementId: "G-FLCGBKNL0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Define types
type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
};

type LoginData = {
  email: string;
  password: string;
};

export default function AdminPage() {
  // State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchContacts(); // Fetch contacts when user is logged in
      } else {
        setIsLoggedIn(false);
        setContacts([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch contacts from Firebase Realtime Database
  const fetchContacts = () => {
    setLoading(true);
    const contactsRef = ref(database, 'contacts');
    onValue(contactsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert data object to array
        const contactsArray: Contact[] = Object.entries(data).map(([id, contact]) => ({
          id,
          ...(contact as Omit<Contact, 'id'>),
        }));
        setContacts(contactsArray);
      } else {
        setContacts([]);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching contacts:', error);
      setLoading(false);
    });
  };

  // Handle login form submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginData;
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Login successful
        setIsLoggedIn(true);
        setLoginError('');
      })
      .catch((error) => {
        console.error('Login error:', error);
        setLoginError('Invalid email or password');
      });
  };

  // Handle login input changes
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        setIsLoggedIn(false);
        setContacts([]);
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) => {
    const query = searchQuery.toLowerCase();
    return (
      contact.name.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.message.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        // Admin interface
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-[#15302d] mb-4 md:mb-0">Contact Submissions</h2>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
          {/* Search input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
              aria-label="Search contacts"
            />
          </div>
          {/* Loading Indicator */}
          {loading ? (
            <div className="flex justify-center items-center">
              <svg
                className="animate-spin h-8 w-8 text-[#b48c2e]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : (
            // Contacts list
            <div className="overflow-x-auto">
              {filteredContacts.length > 0 ? (
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-[#b48c2e] text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">No.</th>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Email</th>
                      <th className="py-3 px-4 text-left">Message</th>
                      <th className="py-3 px-4 text-left">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact, index) => (
                      <tr key={contact.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">{index + 1}</td>
                        <td className="py-3 px-4">{contact.name}</td>
                        <td className="py-3 px-4">{contact.email}</td>
                        <td className="py-3 px-4">{contact.message}</td>
                        <td className="py-3 px-4">
                          {new Date(contact.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center text-gray-500">
                  {searchQuery ? 'No contacts match your search.' : 'No contacts found.'}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        // Login form
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center text-[#15302d] mb-6">Admin Login</h2>
            {loginError && <p className="text-red-500 mb-4 text-center">{loginError}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#b48c2e] text-white font-semibold rounded-md hover:bg-[#a08b27] transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
