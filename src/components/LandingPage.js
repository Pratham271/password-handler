import React from 'react'

function LandingPage() {
  return (
<div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SecurePass!</h1>
      <p className="text-lg mb-6">SecurePass is a powerful password manager designed to help you securely store and generate passwords for all your online accounts. With our user-friendly interface and robust security measures, you can say goodbye to the hassle of remembering multiple passwords and enjoy peace of mind knowing that your sensitive information is protected.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Password Generation</h2>
          <p className="text-lg mb-4">Tired of coming up with strong passwords? Let SecurePass do the work for you! Our built-in password generator creates unique, complex passwords that are virtually uncrackable. Simply specify the length and character types you prefer, and you'll have a strong password ready to use in seconds.</p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Secure Storage</h2>
          <p className="text-lg mb-4">Your passwords deserve the best protection. SecurePass encrypts and stores your passwords using industry-standard encryption algorithms. Rest assured that your data is safe from prying eyes, both in transit and at rest.</p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">User-Friendly Interface</h2>
          <p className="text-lg mb-4">We believe simplicity is key. Our intuitive and responsive interface makes it effortless to manage your passwords. Easily add, edit, and organize your accounts with just a few clicks. With SecurePass, you'll never have to worry about forgetting another password again.</p>
        </div>

        {/* <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Cross-Platform Access</h2>
          <p className="text-lg mb-4">Access your password vault from anywhere, on any device. SecurePass is compatible with desktops, laptops, tablets, and mobile devices, ensuring that your passwords are always within reach whenever you need them.</p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Seamless Synchronization</h2>
          <p className="text-lg mb-4">Keep your passwords in sync across all your devices. SecurePass seamlessly synchronizes your data, ensuring that any changes you make are reflected on all your connected devices. Say goodbye to manual updates and enjoy a seamless experience across platforms.</p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">Two-Factor Authentication (2FA)</h2>
          <p className="text-lg mb-4">Add an extra layer of security to your account with our 2FA feature. Enable this option to require a second authentication factor, such as a unique code sent to your mobile device, whenever you log in to your SecurePass account.</p>
        </div> */}
      </div>

      <p className="text-lg mb-6">Your security is our top priority. SecurePass follows best practices in the industry to safeguard your data and privacy. We employ strict security measures and regularly update our systems to stay ahead of potential threats.</p>
      <p className="text-lg mb-6">Get started with SecurePass today and take control of your passwords like never before. Sign up now to enjoy the convenience, security, and peace of mind that comes with having a robust password manager at your fingertips.</p>
      <p className="text-lg">Remember, your passwords are only as strong as the measures you take to protect them. With SecurePass, rest easy knowing that your passwords are secure, accessible, and always under your control.</p>
    </div>

    )
}

export default LandingPage
