import React, { useState } from 'react';
import { User, Mail, Phone, KeyRound, Save, ShieldCheck } from 'lucide-react';

// Mock user data - in a real app, this would come from auth context or API
const mockUser = {
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  bio: 'Passionate lifelong learner and ISO enthusiast. Currently focusing on QMS and ISMS standards.',
  profilePictureUrl: 'https://randomuser.me/api/portraits/men/32.jpg' // Placeholder
};

const ProfilePage: React.FC = () => {
  const [fullName, setFullName] = useState(mockUser.fullName);
  const [phone, setPhone] = useState(mockUser.phone);
  const [bio, setBio] = useState(mockUser.bio);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string>(mockUser.profilePictureUrl);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [infoMessage, setInfoMessage] = useState('');
  const [infoError, setInfoError] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePicture(file);
      setProfilePicturePreview(URL.createObjectURL(file));
    }
  };

  const handleInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInfoError('');
    setInfoMessage('');
    if (!fullName) {
      setInfoError('Full name cannot be empty.');
      return;
    }
    // Mock save
    console.log('Updating profile info:', { fullName, phone, bio, profilePicture });
    setInfoMessage('Profile information updated successfully (mock)!');
    // In a real app, call API, then maybe update mockUser or global state
  };

  const handleChangePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordMessage('');
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setPasswordError('All password fields are required.');
      return;
    }
    if (newPassword.length < 6) {
        setPasswordError('New password must be at least 6 characters long.');
        return;
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match.');
      return;
    }
    // Mock change password
    console.log('Changing password...');
    setPasswordMessage('Password changed successfully (mock)!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    // In a real app, call API
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h1>
      
      {/* Profile Information Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Profile Information</h2>
        {infoError && <p className="mb-4 text-sm text-red-600 p-2 bg-red-100 rounded-md">{infoError}</p>}
        {infoMessage && <p className="mb-4 text-sm text-green-600 p-2 bg-green-100 rounded-md">{infoMessage}</p>}
        <form onSubmit={handleInfoSubmit} className="space-y-6">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <div className="relative">
              <img 
                src={profilePicturePreview} 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-sm"
              />
              <label 
                htmlFor="profilePictureInput" 
                className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-md transition-colors"
              >
                <User size={16}/>
                <input type="file" id="profilePictureInput" className="hidden" accept="image/*" onChange={handleProfilePictureChange} />
              </label>
            </div>
            <div className="flex-1 w-full">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input pl-10" placeholder="Your Full Name" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address (Read-only)</label>
             <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input type="email" id="email" value={mockUser.email} readOnly className="form-input pl-10 bg-gray-100 cursor-not-allowed" />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-input pl-10" placeholder="e.g., 123-456-7890"/>
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Short Bio (Optional)</label>
            <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="form-textarea" placeholder="Tell us a bit about yourself..."></textarea>
          </div>

          <div className="text-right">
            <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Save size={18} className="mr-2" />
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Change Password</h2>
        {passwordError && <p className="mb-4 text-sm text-red-600 p-2 bg-red-100 rounded-md">{passwordError}</p>}
        {passwordMessage && <p className="mb-4 text-sm text-green-600 p-2 bg-green-100 rounded-md">{passwordMessage}</p>}
        <form onSubmit={handleChangePasswordSubmit} className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" id="currentPassword" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="form-input pl-10" placeholder="Enter your current password" />
            </div>
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
             <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-input pl-10" placeholder="Enter new password (min. 6 characters)" />
            </div>
          </div>
          <div>
            <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <KeyRound className="h-5 w-5 text-gray-400" />
                </div>
                <input type="password" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} className="form-input pl-10" placeholder="Confirm new password" />
            </div>
          </div>
          <div className="text-right">
            <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <ShieldCheck size={18} className="mr-2" />
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage; 