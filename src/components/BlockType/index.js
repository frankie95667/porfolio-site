import React from "react";
import Checklist from "./Checklist";
import Code from "./Code";
import Quote from "./Quote";
import Header from "./Header";
import Image from "./Image";
import Paragraph from "./Paragraph";
import List from "./Lists";

const Index = ({ type, data }) => {
  const renderType = (type, data) => {
    switch (type) {
      case "checklist":
        return <Checklist data={data} />;
      case "code":
        return <Code data={data} />;
      case "quote":
        return <Quote data={data} />;
      case "header":
        return <Header data={data} />;
      case "image":
        return <Image data={data} />;
      case "paragraph":
        return <Paragraph data={data} />;
      case "list":
        return <List data={data} />;
      default:
        return null;
    }
  };

  return renderType(type, data);
};

export default Index;
