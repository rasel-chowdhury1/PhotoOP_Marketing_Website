"use client";
import { Card } from 'antd';
import Image from 'next/image';
import { deletePolicy } from "../../../public/assets/AllImages";

const DeleteAccountSteps = () => {
  const steps = [
    {
      title: 'Steps 1 & 2',
      content: 'Step 1: First open the app.\nStep 2: Go to menu.',
      img: deletePolicy.settingsDrawer,
    },
    {
      title: 'Steps 3 & 4',
      content: 'Step 3: Go to settings.\nStep 4: Click delete account.',
      img: deletePolicy.deleteaccount,
    },
    {
      title: 'Steps 5 & 6',
      content: 'Step 5: A pop-up will appear. In the password field, enter your password.\nStep 6: Press the delete button.',
      img: deletePolicy.enterPass,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-900">
      {/* Main Header */}
      <h1 className="text-4xl font-bold text-center text-white mb-10">How to Delete Your Account</h1>

      {/* Steps Display */}
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center justify-center mb-16 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          style={{ gap: '2rem' }} // Add gap between text and image for better spacing
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center p-4">
            <Card
              hoverable
              className="bg-gray-800 border-none shadow-xl transition-transform transform hover:scale-105"
              style={{ width: 280, borderRadius: 16 }}
            >
              <Image
                src={step.img}
                alt={step.title}
                layout="responsive"
                width={280}
                height={500} // Auto-scaling to fit
                className="rounded-lg"
              />
            </Card>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center p-6 text-center">
            <div className="md:max-w-md">
              <h2 className="text-3xl font-semibold text-white mb-6">{step.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{step.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteAccountSteps;
