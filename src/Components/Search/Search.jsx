import { useState } from "react";
import { useLocation } from "wouter";
import "./Search.css";
import { Form, FormControl, InputGroup } from "react-bootstrap";

export function Search() {
  const [keyword, setKeword] = useState();

  const [location, navigate] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword}`, {repalce: true});
    }
  };

  const handleChange = (e) => {
    setKeword(e.target.value);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="Search d-flex justify-content-center"
    >
      <InputGroup>
        <InputGroup.Text>🔎</InputGroup.Text>
        <FormControl
          placeholder="Search gifs..."
          onChange={handleChange}
          value={keyword}
        />
      </InputGroup>
    </Form>
  );
}
