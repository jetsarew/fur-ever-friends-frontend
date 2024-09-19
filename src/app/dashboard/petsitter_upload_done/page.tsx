import React from 'react';
import Image from 'next/image'; // For optimized image loading in Next.js

const VerificationPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Main container */}
      <div style={{ border: '1px solid #e5e7eb', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
        {/* Title */}
        <h1 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
          We’ve received your request and are currently verifying the authenticity of your documents
        </h1>

        {/* Image container - Flexbox for centering */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Image
            src="/Check your inbox.png" // Make sure the path is correct
            alt="Document Verification"
            width={180}
            height={180}
          />
        </div>

        {/* Message */}
        <p style={{ fontSize: '15px', color: '#1C7DBB', fontWeight: 'bold' }}>
          You will hear back from us within 7 days
        </p>

        {/* Back to homepage link */}
        <a href="/" style={{ color: 'grey', fontWeight: 'bold',fontSize: '10px', marginTop: '2px', display: 'inline-block' }}>
          Back to homepage
        </a>
      </div>
    </div>
  );
};

export default VerificationPage;
