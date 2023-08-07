import React from 'react';
import JsonToXmlConverter from './JsonToXmlConverter';
import XmlToJsonConverter from './XmlToJsonConverter';

const Conversion = () => {
  return (
    <div style={{ overflow: 'auto', maxHeight: '600px', width: '100%', height: '100vh' }}>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-slate-900 md:mb-6 lg:text-3xl">Collections</h2>
            <p className="mx-auto max-w-screen-md text-center text-slate-900 md:text-lg">
              Effortlessly convert XML data to JSON and vice versa with our versatile data format converter app. Streamline your data handling and integration process with ease
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-6 sm:grid-cols-2">
            {/* <!-- product - start --> */}
            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              {/* You can render your JsonToXmlConverter component here */}
              <JsonToXmlConverter />
            </div>
            {/* <!-- product - end --> */}

            {/* <!-- product - start --> */}
            <div className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              {/* You can render your XmlToJsonConverter component here */}
              <XmlToJsonConverter />
            </div>
            {/* <!-- product - end --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversion;
