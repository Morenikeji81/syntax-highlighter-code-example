import React from 'react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function MyComponents() {
  
  const codeString = `function hello() {
    console.log('Hello, world!');
  }`;

 

  return (
    <SyntaxHighlighter
     language="javascript" 
     style={tomorrow}
    customStyle={{fontSize: '30px',fontWeight:'bold', background:'#f5f5f5'}} >

      {codeString}
      
    </SyntaxHighlighter>
  );
}


   

  