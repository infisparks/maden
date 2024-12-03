import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

// Firebase configuration (same as your contact page)
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

  // Check authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        fetchContacts(); // Fetch contacts when user is logged in
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch contacts from Firebase Realtime Database
  const fetchContacts = () => {
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
    <div>
      {isLoggedIn ? (
        // Admin interface
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#15302d]">Contact Submissions</h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
            >
              Logout
            </button>
          </div>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent mb-6"
          />
          {/* Contacts list */}
          {filteredContacts.length > 0 ? (
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 border-b">Name</th>
                  <th className="py-2 border-b">Email</th>
                  <th className="py-2 border-b">Message</th>
                  <th className="py-2 border-b">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className="border px-4 py-2">{contact.name}</td>
                    <td className="border px-4 py-2">{contact.email}</td>
                    <td className="border px-4 py-2">{contact.message}</td>
                    <td className="border px-4 py-2">
                      {new Date(contact.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      ) : (
        // Login form
        <div className="flex items-center justify-center h-screen">
          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
            {loginError && <p className="text-red-500 mb-4">{loginError}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b48c2e] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-[#b48c2e] text-white rounded-lg hover:bg-[#15302d] transition-colors duration-200"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}