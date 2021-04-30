/**
 * resume.js
 * By: Aaric Han
 * 
 * Created: 04/29/21
 * Last Modified: 04/29/21
 */

 import React from 'react';
 import { Document, Page } from 'react-pdf';
 import MyResume from './resume.pdf'
 
 export default function Resume() {
  return (
    <div>
      <Document file={MyResume}>
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}
 