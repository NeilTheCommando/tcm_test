import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, Database } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to TCM Tongue Diagnosis System</h1>
      <p className="text-gray-600 mb-6">
        Our AI-powered system helps analyze tongue images to assist in Traditional Chinese Medicine diagnosis.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Activity className="h-8 w-8 text-indigo-600" />}
          title="Accurate Analysis"
          description="Our AI model provides precise tongue diagnosis based on TCM principles."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-indigo-600" />}
          title="Multi-user Support"
          description="Manage patients, doctors, and clinics efficiently in one platform."
        />
        <FeatureCard
          icon={<Database className="h-8 w-8 text-indigo-600" />}
          title="Comprehensive Reports"
          description="Generate detailed diagnosis reports and track patient history over time."
        />
      </div>
      <div className="mt-8 flex justify-center">
        <Link to="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Home;