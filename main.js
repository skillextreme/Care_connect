import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Heart, 
  Users, 
  ChefHat, 
  ShoppingBag, 
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Mail,
  Bell,
  Eye,
  Gift
} from 'lucide-react';

const CareConnect = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      title: "Trusted Nanny Services",
      icon: <Users className="w-6 h-6 text-pink-500" />,
      description: "Find and book verified nannies on demand with our intuitive scheduling system."
    },
    {
      title: "AI-Powered Meal Planning",
      icon: <ChefHat className="w-6 h-6 text-pink-500" />,
      description: "Get personalized meal plans and recipes tailored to your kitchen and child's needs."
    },
    {
      title: "Childcare Essentials",
      icon: <ShoppingBag className="w-6 h-6 text-pink-500" />,
      description: "Shop curated products and enjoy exclusive deals on essential items."
    },
    {
      title: "Expert Support",
      icon: <Stethoscope className="w-6 h-6 text-pink-500" />,
      description: "Connect with pediatricians, psychologists, and other childcare experts."
    }
  ];

  const benefits = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Be in the Know",
      description: "Get the latest updates on our progress"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Sneak Peeks",
      description: "Access early previews of our features"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Exclusive Offers",
      description: "Be the first to try the app when it launches"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">CareConnect</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Be the First to Know!
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Parenting made simpler, smarter, and stress-free — that's the vision behind CareConnect. Sign up now for early access!
          </p>
        </div>
      </div>

      {/* Email Signup Section */}
      {!isSubmitted ? (
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 rounded-l-md border border-gray-300 px-3 py-2"
                      placeholder="Enter your email"
                    />
                    <button
                      type="submit"
                      className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition-colors flex items-center"
                    >
                      Sign Up
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  We value your privacy and promise to only send relevant updates (no spam, ever!)
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Signing Up!</h3>
              <p className="text-gray-500">We'll keep you updated on all the exciting developments at CareConnect.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What is CareConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transform transition-all duration-300 ${
                activeFeature === index ? 'scale-105 shadow-xl' : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-pink-100 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Sign Up?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="ml-2 text-lg font-bold">CareConnect</span>
          </div>
          <p className="text-center text-gray-500 text-sm">
            Together, we're reimagining what it means to care for our children and ourselves.
          </p>
          <p className="text-center text-gray-400 text-sm mt-4">
            © 2024 CareConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CareConnect;