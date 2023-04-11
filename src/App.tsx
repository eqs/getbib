import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import axios from "axios";

import { OpenBD, Summary } from './OpenBD';
import './App.css';

type OpenBDResponse = OpenBD[];


const fetchBook = async (isbn: string): Promise<OpenBD> => {
  const res = await axios.get<OpenBDResponse>(`https://api.openbd.jp/v1/get?isbn=${isbn}`);
  return res.data[0];
};

type BookSummaryProps = {
  summary?: Summary
}

function BookSummary(props: BookSummaryProps) {
  if (props.summary !== undefined) {
    const summary = props.summary;
    const year = summary.pubdate.substring(0, 4);
    const s = `${summary.author}，『${summary.title}』，${summary.publisher}，${year}．`;
    return (
      <>
        <p>{s}</p>
        <img src={summary.cover} width="80%" height="auto" alt="book" />
      </>
    );
  } else {
    return (
      <div style={{
          backgroundColor: "#F6F3F6",
          color: "#232623",
          width: "100%",
          height: "auto",
          textAlign: "center",
          padding: "16px 8px",
      }}>ISBNいれてね</div>
    );
  }
}

function App() {
  const [isbn, setISBN] = useState<string>('');
  const [summary, setSummary] = useState<Summary | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setISBN(e.target.value);
  };

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      const res = await fetchBook(isbn);
      if (res != null) {
        setSummary(res.summary);
      }
    }
  };

  return (
    <div style={{ margin: 16, maxWidth: 500 }}>
      <TextField
        id="outlined-basic"
        label="ISBN"
        variant="outlined"
        onChange={handleChange}
        onKeyPress={handleKeyPress} />
      <BookSummary summary={summary} />
    </div>
  );
}

export default App;
