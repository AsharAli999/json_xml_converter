import React, { useState } from 'react';
import xmljs from 'xml-js';

const XmlToJsonConverter = () => {
  const [xmlData, setXmlData] = useState('');
  const [jsonData, setJsonData] = useState('');

  const handleConvert = () => {
    try {
      const parsedData = xmljs.xml2json(xmlData, {
        compact: true,
        ignoreComment: true,
        ignoreDeclaration: true,
        ignoreInstruction: true,
        spaces: 2,
        textFn: (value) => value.trim(), // Trim text content
      });
      setJsonData(parsedData);
    } catch (error) {
      console.error('Error converting XML to JSON:', error);
    }
  };

  return (
    <div>
      <textarea
        rows={12}
        cols={60}
        value={xmlData}
        onChange={(e) => setXmlData(e.target.value)}
      />
      <button className="bg-gradient-to-tr from-blue-800 to-blue-600 text-white p-2 rounded-lg" onClick={handleConvert}>Convert to JSON</button>
      <div style={{ overflow: 'auto', maxHeight: '300px' }}>
        <pre>{jsonData}</pre>
      </div>
    </div>
  );
};

export default XmlToJsonConverter;
