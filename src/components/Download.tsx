import React from 'react';
import { Smartphone, Download, Sun, Activity } from 'lucide-react';

const monitoringApps = [
  {
    id: 1,
    name: 'Growatt',
    title: 'Growatt Monitoring Portal',
    description: 'Monitor your solar system in real-time',
    playstore: 'https://play.google.com/store/apps/details?id=com.growatt.shinephones',
    appstore: 'https://apps.apple.com/us/app/shinephone/id669936054',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 2,
    name: 'Solis Cloud',
    title: 'Solis Cloud Monitoring Portal',
    description: 'Smart cloud-based solar monitoring',
    playstore: 'https://play.google.com/store/apps/details?id=com.ginlongsolis',
    appstore: 'https://apps.apple.com/us/app/soliscloud/id1371324452',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    id: 3,
    name: 'Theatouch',
    title: 'Theatouch Monitoring Portal',
    description: 'Touch-friendly solar control interface',
    playstore: 'https://play.google.com/store/apps/details?id=com.pvinverter.thea',
    appstore: 'https://apps.apple.com/us/app/theatouch/id1366258285',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    id: 4,
    name: 'Waaree',
    title: 'Waaree Monitoring Portal',
    description: 'Advanced energy monitoring solution',
    playstore: 'https://play.google.com/store/apps/details?id=com.odm.waaree',
    appstore: null,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  }
];

const DownloadSection = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 shadow-lg">
              <Sun className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Download Monitoring Apps
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Monitor and control your solar system from anywhere with our official apps
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {monitoringApps.map((app) => (
              <div
                key={app.id}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* App Header */}
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${app.bgColor} rounded-xl sm:rounded-2xl mb-3 sm:mb-4`}>
                  <Activity className={`w-5 h-5 sm:w-6 sm:h-6 ${app.textColor}`} />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  {app.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 line-clamp-2">
                  {app.description}
                </p>

                {/* Download Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  {/* Play Store */}
                  <a
                    href={app.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-all group/btn border border-gray-200"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D856"/>
                      <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                      <path d="M3.84 2.15C4.27 1.94 4.79 2.03 5.16 2.4L14.54 11.78L6.05 2.66L3.84 2.15Z" fill="#00A6F6"/>
                      <path d="M16.81 8.88L19.69 10.53C20.41 10.95 20.41 12.05 19.69 12.47L16.81 14.12L14.54 11.85L16.81 8.88Z" fill="#FF3A44"/>
                    </svg>
                    <div className="flex-1 text-left">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Google Play</p>
                    </div>
                    {/* <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover/btn:text-green-600 transition-colors" /> */}
                  </a>

                  {/* App Store */}
                  {app.appstore ? (
                    <a
                      href={app.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-all group/btn border border-gray-200"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="flex-1 text-left">
                        <p className="text-sm sm:text-base font-semibold text-gray-900">App Store</p>
                      </div>
                      {/* <Download className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover/btn:text-blue-600 transition-colors" /> */}
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-100 rounded-lg sm:rounded-xl opacity-50 border border-gray-200">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                      <div className="flex-1 text-left">
                        <p className="text-sm sm:text-base font-semibold text-gray-400">App Store</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full shadow-md border border-gray-100">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              <span className="text-xs sm:text-sm text-gray-700">
                Compatible with iOS & Android devices
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;