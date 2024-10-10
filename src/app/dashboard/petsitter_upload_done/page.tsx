import React from "react";
import Image from "next/image"; // For optimized image loading in Next.js
import Link from "next/link";

const VerificationPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-[64px] mx-auto w-[918px] items-center">
      {/* Main container */}
      <div className="flex flex-col items-center gap-[64px] w-[918px]">
        {/* Title */}
        <h1 className="text-header text-center">
          We’ve received your request and are currently verifying the
          authenticity of your documents
        </h1>

        {/* Image container - Flexbox for centering */}
        <div>
          <Image
            src="/Check your inbox.svg" // Make sure the path is correct
            alt="Document Verification"
            width={180}
            height={180}
          />
        </div>

        {/* Message */}
        <p className="text-subheading2 text-dark-blue">
          You will hear back from us within 7 days
        </p>

        {/* Back to homepage link */}
        <Link href="/dashboard/home" className="text-button text-soft-gray">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default VerificationPage;
