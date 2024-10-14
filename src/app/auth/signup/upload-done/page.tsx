import React from "react";
import Image from "next/image";
import Link from "next/link";

const VerificationPage: React.FC = () => {
  return (
    <div className="-mt-9 flex flex-col gap-[64px] mx-auto w-[918px] items-center">
      <div className="flex flex-col items-center gap-[64px] w-[918px]">
        <h1 className="text-[32px] font-semibold text-center leading-[120%]">
          We’ve received your request and are currently verifying the
          authenticity of your documents
        </h1>
        <div>
          <Image
            src="/Check your inbox.svg"
            alt="Document Verification"
            width={314}
            height={252}
          />
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="text-subheading2 text-dark-blue">
            You will hear back from us within 7 days
          </p>
          <Link href="/" className="text-body-bold text-soft-gray">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
