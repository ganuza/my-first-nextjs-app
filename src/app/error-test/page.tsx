export default function ErrorTest() {
  // This will throw an error when the component is rendered
  throw new Error("This is a test error!");
  
  return (
    <div>
      <h1>This page should never render</h1>
    </div>
  );
}