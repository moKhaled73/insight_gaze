import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./pages/model/Model";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

// import { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { Buffer } from "buffer"; // Buffer polyfill for the browser
// import ReactMarkdown from "react-markdown";

// // Initialize the Google Generative AI model
// const genAI = new GoogleGenerativeAI("AIzaSyAMUlEpf_SMOe-_-mfOTCXseUc62lIS364");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const App = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [response, setResponse] = useState("");

//   // Function to convert a file to GenerativePart format
//   const fileToGenerativePart = (file, mimeType) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const base64String = Buffer.from(event.target.result).toString(
//           "base64"
//         );
//         resolve({
//           inlineData: {
//             data: base64String,
//             mimeType,
//           },
//         });
//       };
//       reader.onerror = reject;
//       reader.readAsArrayBuffer(file);
//     });
//   };

//   // Handle file input change event
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   // Generate content by calling the API
//   const generateContent = async () => {
//     if (!selectedFile) {
//       alert("Please select an image file.");
//       return;
//     }

//     try {
//       const mimeType = selectedFile.type;
//       const imagePart = await fileToGenerativePart(selectedFile, mimeType);
//       const prompt =
//         "provide a recommendation for this interface design to enhance user experience";

//       const result = await model.generateContent([prompt, imagePart]);
//       setResponse(result.response.text());
//     } catch (error) {
//       console.error("Error generating content:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Generative AI Image Input</h1>

//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <button onClick={generateContent}>Generate Content</button>

//       {response && (
//         <div>
//           <h3>Response:</h3>
//           <ReactMarkdown>{response}</ReactMarkdown>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
