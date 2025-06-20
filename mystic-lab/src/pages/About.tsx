const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Medoscopic Pharma
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              This page is coming soon. We're working on creating detailed
              information about our company, mission, and values.
            </p>
            <div className="mt-8 p-6 bg-gradient-to-r from-medoscopic-blue-50 to-medoscopic-teal-50 dark:from-medoscopic-blue-900/20 dark:to-medoscopic-teal-900/20 rounded-lg">
              <h3 className="text-lg font-semibold text-medoscopic-blue-600 mb-2">
                Coming Soon
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn about our 15+ years of experience in pharmaceutical
                excellence and our commitment to advancing healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
