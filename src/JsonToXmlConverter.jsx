import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core'; // Import PrismJS components for syntax highlighting
import 'prismjs/components/prism-json'; // Import PrismJS language definition for JSON
import SimpleCodeEditor from 'react-simple-code-editor';

const jsonToXml = (jsonObj, indent = 0) => {
  const getIndentation = (spaces) => ' '.repeat(spaces);

  const toXml = (json, spaces) => {
    let xml = '';

    for (const prop in json) {
      if (json.hasOwnProperty(prop)) {
        const value = json[prop];

        if (Array.isArray(value)) {
          xml += value
            .map((item) => `${getIndentation(spaces + 2)}<${prop}>\n${toXml(item, spaces + 4)}\n${getIndentation(spaces + 2)}</${prop}>`)
            .join('\n');
        } else if (typeof value === 'object') {
          xml += `${getIndentation(spaces + 2)}<${prop}>\n${toXml(value, spaces + 4)}\n${getIndentation(spaces + 2)}</${prop}>\n`;
        } else {
          xml += `${getIndentation(spaces + 2)}<${prop}>${value}</${prop}>\n`;
        }
      }
    }

    return xml;
  };

  return `<?xml version="1.0" encoding="UTF-8"?>\n${toXml(jsonObj, indent)}`;
};

const JsonToXmlConverter = () => {
  const [jsonData, setJsonData] = useState('');
  const [xmlData, setXmlData] = useState('');

  const handleConvert = () => {
    try {
      const parsedData = JSON.parse(jsonData);
      const xmlData = jsonToXml(parsedData);
      setXmlData(xmlData);
    } catch (error) {
      console.error('Error converting JSON to XML:', error);
    }
  };

  return (
    <div>
      <textarea
        rows={12}
        cols={60}
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      />
      <button className="bg-gradient-to-tl from-blue-600 to-blue-800 text-white p-2 rounded-lg" onClick={handleConvert}>Convert to XML</button>
      <div style={{ overflow: 'auto', maxHeight: '300px' }}>
        <pre>{xmlData}</pre>
      </div>
    </div>
  );
};

export default JsonToXmlConverter;