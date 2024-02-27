import React from "react";
import BuilderCard from "./BuilderCard";

function BuilderCardList() {
  const builderCardData = [
    {
      slNumber: 1,
      name: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores",
      colors: "(Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      isBestChoice: true,
      isBestValue:false,
      isDiscount:false,
      isFeature:false,
      rating:{grade:9.8,performance:"Exceptional"}

    },
    {
      slNumber: 2,
      name: "Builder",
      title: "SiteCraft 68-Inch Ultimate Web Design Studio-",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms",
      colors: " (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      isBestChoice: false,
      isBestValue:true,
      isFeature:false,
      isDiscount:false,

      rating:{grade:9.5,performance:"Excellent"}


    },
    {
      slNumber: 3,
      name: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder-",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores",
      colors: "(Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      isBestChoice: false,
      isBestValue:false,
      isDiscount:false,
      isFeature:false,
      rating:{grade:9.3,performance:"Exceptional"}


    },
    {
      slNumber: 4,
      name: "CDK",
      title: "CDK Resposive Builder : ",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      colors: "",
      highlights: "",
      isBestChoice: false,
      isBestValue:false,
      isDiscount:true,
      isFeature:true,
      rating:{grade:9.1,performance:"Very Good"}


    },
  ];

  return (
    <>
      <div>
        {builderCardData.map((data) => (
          <BuilderCard key={data.slNumber} data={data} />
        ))}
      </div>
    </>
  );
}

export default BuilderCardList;
